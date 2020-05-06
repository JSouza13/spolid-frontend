import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { Input } from '~/components/Input';
import { signInRequest } from '~/store/modules/auth/actions';
import themes from '~/styles/themes/light';

import { Container, Content, AnimationContainer, Background } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('Um e-mail válido deve ser informado'),
  password: Yup.string().required('Uma senha válida deve ser informada'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="SPOLID" width="350" height="100" />

          <Form schema={schema} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <button type="submit">
              {loading ? 'Carregando...' : 'Entrar'}
            </button>
            <Link to="/forgot">Esqueci minha senha</Link>
          </Form>
          <Link to="/register">
            <FiLogIn size={16} color={themes.color.primary} />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}
