import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function NotFound() {
  return (
    <Container>
      <h1>404: Página não encontrada</h1>
      <p>
        Desculpe... a página que você está procurando não existe ou foi
        alterada.
      </p>
      <Link to="/">Voltar para Home</Link>
    </Container>
  );
}

export default NotFound;
