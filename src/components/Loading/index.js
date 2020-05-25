import React from 'react';
import { Levels } from 'react-activity';

import PropTypes from 'prop-types';

import { Container } from './styles';

function Loading({ size, color, speed, animating, only }) {
  if (only)
    return (
      <Levels size={size} color={color} speed={speed} animating={animating} />
    );
  return (
    <Container>
      <Levels size={size} color={color} speed={speed} animating={animating} />
    </Container>
  );
}

Loading.defaultProps = {
  size: 40,
  color: '#fff',
  speed: 0.7,
  animating: true,
  only: false,
};

Loading.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  speed: PropTypes.number,
  animating: PropTypes.bool,
  only: PropTypes.bool,
};

export default Loading;
