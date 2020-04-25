import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content } from './styles';

export default function Home() {
  return (
    <Container>
      <img src={logo} alt="SPOLID" width="200" height="100" />
      <Content>
        <h1>Aprenda no seu tempo</h1>
        <p>
          Estude a qualquer hora em qualquer lugar. Explore os vários cursos
          disponíveis.
        </p>
        <Link to="/logon">Acessar</Link>
      </Content>
    </Container>
  );
}
