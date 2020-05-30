import React from 'react';

import PropTypes from 'prop-types';

import Lesson from './Lesson';
import { Container, Content } from './styles';

export default function Curso({
  match: {
    params: { id },
  },
}) {
  return (
    <Container>
      <Content>
        <Lesson course_id={id} />
      </Content>
    </Container>
  );
}

Curso.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
