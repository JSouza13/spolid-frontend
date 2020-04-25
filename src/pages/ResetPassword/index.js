import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { resetRequest } from '~/store/modules/auth/actions';
import themes from '~/styles/themes/light';

import { Container } from './styles';

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
      <section>
        <img src={logo} alt="SPOLID" width="350" height="100" />

        <Link to="/logon">
          <FiArrowLeft size={16} color={themes.color.primary} />
          Voltar para o login
        </Link>
      </section>
      <section>
        <Form
          schema={schema}
          onSubmit={handleSubmit}
          style={{ marginTop: '0px' }}
        >
          <Input name="password" type="password" placeholder="Sua senha" />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirme sua senha"
          />

          <button type="submit">
            {loading ? 'Carregando...' : 'Recuperar'}
          </button>
        </Form>
      </section>
    </Container>
  );
}
