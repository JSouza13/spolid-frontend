import React from 'react';

import course12 from '~/assets/course-12.jpg';

import Leasson from './Leasson';
import { Container, Content } from './styles';

export default function Curso() {
  return (
    <Container>
      <Content>
        <Leasson Title="React" src={course12} />
      </Content>
    </Container>
  );
}
