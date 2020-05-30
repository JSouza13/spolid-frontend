import React, { useRef, useCallback } from 'react';
import { FiArrowLeft, FiMail } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { Input } from '~/components/Input';
import Loading from '~/components/Loading';
import { forgotRequest } from '~/store/modules/auth/actions';

import { Container, Content, AnimationContainer, Background } from './styles';

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async ({ email }) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Informe um e-mail válido')
            .required('E-mail é obrigatório'),
        });

        await schema.validate(
          { email },
          {
            abortEarly: false,
          }
        );

        await dispatch(forgotRequest(email));
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          Swal.fire({
            title: `Ocorreu um erro`,
            text: 'Informe um e-mail válido',
            icon: 'error',
            confirmButtonColor: '#e02020',
            confirmButtonText: 'Ok!',
          });
        }
      }
    },
    [dispatch]
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logo} alt="SPOLID" width="350" height="100" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperar senha</h1>
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
              width="100%"
            />
            {loading ? (
              <Loading color="#E02020" size={30} />
            ) : (
              <button type="submit" width="100%">
                <strong>Salvar</strong>
              </button>
            )}
          </Form>
          <Link to="/logon">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
