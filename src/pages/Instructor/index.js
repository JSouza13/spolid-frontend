import React from 'react';
import { FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Instructor() {
  return (
    <Container>
      <div className="text">
        <FiFileText size={64} style={{ marginRight: '30px' }} />
        <h1>Iniciar criação do curso</h1>
      </div>
      <Link to="/course/create">Criar novo curso</Link>
    </Container>
  );
}
