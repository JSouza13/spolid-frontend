import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import capaCurso from '~/assets/capaCurso.jpg';

import { Container } from './styles';

export default function Dashboard() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <h2>Bem-vindo(a) de volta, {profile.name}</h2>
      <p>
        Escolha entre 100.000 cursos em vídeo online com novas adições
        publicadas mensalmente
      </p>
      <ul>
        <Link to="/curso/1">
          <li>
            <img src={capaCurso} alt="Curso" />
            <strong>Matemática básica</strong>

            <p>Pedro Augusto</p>

            <strong>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(20)}
            </strong>
          </li>
        </Link>
        <Link to="/curso/1">
          <li>
            <img src={capaCurso} alt="Curso" />{' '}
            <strong>Matemática básica</strong>
            <p>Pedro Augusto</p>
            <strong>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(20)}
            </strong>
          </li>
        </Link>
        <Link to="/curso/1">
          <li>
            <img src={capaCurso} alt="Curso" />{' '}
            <strong>Matemática básica</strong>
            <p>Pedro Augusto</p>
            <strong>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(20)}
            </strong>
          </li>
        </Link>
        <Link to="/curso/1">
          <li>
            <img src={capaCurso} alt="Curso" />{' '}
            <strong>Matemática básica</strong>
            <p>Pedro Augusto</p>
            <strong>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(20)}
            </strong>
          </li>
        </Link>
        <Link to="/curso/1">
          <li>
            <img src={capaCurso} alt="Curso" />{' '}
            <strong>Matemática básica</strong>
            <p>Pedro Augusto</p>
            <strong>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(20)}
            </strong>
          </li>
        </Link>
        <Link to="/curso/1">
          <li>
            <img src={capaCurso} alt="Curso" />{' '}
            <strong>Matemática básica</strong>
            <p>Pedro Augusto</p>
            <strong>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(20)}
            </strong>
          </li>
        </Link>
        <Link to="/curso/1">
          <li>
            <img src={capaCurso} alt="Curso" />{' '}
            <strong>Matemática básica</strong>
            <p>Pedro Augusto</p>
            <strong>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(20)}
            </strong>
          </li>
        </Link>
        <Link to="/curso/1">
          <li>
            <img src={capaCurso} alt="Curso" />{' '}
            <strong>Matemática básica</strong>
            <p>Pedro Augusto</p>
            <strong>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(20)}
            </strong>
          </li>
        </Link>
        <Link to="/curso/1">
          <li>
            <img src={capaCurso} alt="Curso" />{' '}
            <strong>Matemática básica</strong>
            <p>Pedro Augusto</p>
            <strong>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(20)}
            </strong>
          </li>
        </Link>
        <Link to="/curso/1">
          <li>
            <img src={capaCurso} alt="Curso" />{' '}
            <strong>Matemática básica</strong>
            <p>Pedro Augusto</p>
            <strong>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(20)}
            </strong>
          </li>
        </Link>
      </ul>
    </Container>
  );
}
