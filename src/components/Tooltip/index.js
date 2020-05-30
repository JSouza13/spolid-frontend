import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

function Tooltip({ title, className, children }) {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
}

export default Tooltip;

Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Tooltip.defaultProps = {
  className: '',
};
