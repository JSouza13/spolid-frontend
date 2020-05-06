import React from 'react';
import { FiArrowLeft, FiLock } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { Input } from '~/components/Input';
import { resetRequest } from '~/store/modules/auth/actions';

import { Container, Content, AnimationContainer, Background } from './styles';

const schema = Yup.object().shape({
  password: Yup.string()
    .required('A senha deve conter no minimo 6 caracteres')
    .min(6),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field.required(
          'A confirmação de senha deve conter no minimo 6 caracteres'
        )
      : field
  ),
});

export default function ResetPassword() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const token = useParams();

  function handleSubmit({ password, confirmPassword }) {
    dispatch(resetRequest(token.tokenTemp, password, confirmPassword));
  }
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logo} alt="SPOLID" width="350" height="100" />

          <Form
            schema={schema}
            onSubmit={handleSubmit}
            style={{ marginTop: '0px' }}
          >
            <h1>Recuperar senha</h1>
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Input
              name="confirmPassword"
              icon={FiLock}
              type="password"
              placeholder="Confirme sua senha"
            />

            <button type="submit">
              {loading ? 'Carregando...' : 'Salvar'}
            </button>
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
