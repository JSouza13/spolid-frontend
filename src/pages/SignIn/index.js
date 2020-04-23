import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import heroesImg from '~/assets/heroes.png';
import logo from '~/assets/logo.svg';
import { signInRequest } from '~/store/modules/auth/actions';
import themes from '~/styles/themes/light';

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
    <>
      <section>
        <img src={logo} alt="SPOLID" width="350" height="100" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />
          <Link
            to="/forgot"
            style={{
              marginTop: '5px',
              fontSize: '12px',
              fontWeight: 600,
              color: `${themes.color.primary}`,
            }}
          >
            Esqueci minha senha
          </Link>

          <button type="submit">{loading ? 'Carregando...' : 'Entrar'}</button>
          <Link to="/register">
            <FiLogIn size={16} color={themes.color.primary} />
            Criar conta gratuita
          </Link>
        </Form>
      </section>

      <img src={heroesImg} alt="Heroes" width="596" height="574" />
    </>
  );
}
