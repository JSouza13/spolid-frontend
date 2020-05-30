import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { Input } from '~/components/Input';
import Loading from '~/components/Loading';
import { signUpRequest } from '~/store/modules/auth/actions';

import { Container, Content, AnimationContainer, Background } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('Senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logo} alt="SPOLID" width="350" height="100" />

          <Form schema={schema} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input
              name="name"
              icon={FiUser}
              type="text"
              placeholder="Nome"
              width="100%"
            />
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
              width="100%"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
              width="100%"
            />
            {loading ? (
              <Loading color="#E02020" size={30} />
            ) : (
              <button type="submit" width="100%">
                <strong>Cadastrar</strong>
              </button>
            )}{' '}
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
