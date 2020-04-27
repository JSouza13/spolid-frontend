import React from 'react';
import { useSelector } from 'react-redux';

import capaCurso from '~/assets/capaCurso.jpg';
import Card from '~/components/Card';

import { Container, Content } from './styles';

export default function Dashboard() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <h2>Bem-vindo(a) de volta, {profile.name}</h2>
      <p>
        Escolha entre 100.000 cursos em vídeo online com novas adições
        publicadas mensalmente
      </p>
      <Content>
        <ul>
          <Card
            id={1}
            Title="Matemática básica"
            Provider="Pedro Augusto"
            Price={50}
            ImgUrl={capaCurso}
          />
          <Card
            id={1}
            Title="Matemática básica"
            Provider="Pedro Augusto"
            Price={50}
            ImgUrl={capaCurso}
          />
          <Card
            id={1}
            Title="Matemática básica"
            Provider="Pedro Augusto"
            Price={50}
            ImgUrl={capaCurso}
          />
          <Card
            id={1}
            Title="Matemática básica"
            Provider="Pedro Augusto"
            Price={50}
            ImgUrl={capaCurso}
          />
          <Card
            id={1}
            Title="Matemática básica"
            Provider="Pedro Augusto"
            Price={50}
            ImgUrl={capaCurso}
          />
          <Card
            id={1}
            Title="Matemática básica"
            Provider="Pedro Augusto"
            Price={50}
            ImgUrl={capaCurso}
          />
          <Card
            id={1}
            Title="Matemática básica"
            Provider="Pedro Augusto"
            Price={50}
            ImgUrl={capaCurso}
          />
          <Card
            id={1}
            Title="Matemática básica 12312312312312313 123123123123123123"
            Provider="Pedro Augusto"
            Price={50}
            ImgUrl={capaCurso}
          />
          <Card
            id={1}
            Title="Matemática básica"
            Provider="Pedro Augusto"
            Price={50}
            ImgUrl={capaCurso}
          />
        </ul>
      </Content>
    </Container>
  );
}
