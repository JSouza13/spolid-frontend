import React from 'react';

import Leasson from './Leasson';
import { Container, Classes, Content } from './styles';

export default function Curso() {
  return (
    <Container>
      <Content>
        <Leasson />
      </Content>
      <Classes>
        <ul>
          <li>aula 01</li>
          <li>aula 02</li>
          <li>aula 03</li>
          <li>aula 04</li>
          <li>aula 05</li>
          <li>aula 06</li>
        </ul>
      </Classes>
    </Container>
  );
}
