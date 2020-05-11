import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Card({ id, Title, Provider, Price, ImgUrl }) {
  return (
    <Container imgUrl={ImgUrl}>
      <Link to={`/course/${id}`}>
        <div className="__img" />
        <div className="__img--hover" />

        <div className="content">
          <span>{Provider}</span>
          <h3>{Title}</h3>

          <span>
            {Price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
      </Link>
    </Container>
  );
}

Card.propTypes = {
  Title: PropTypes.string.isRequired,
  Provider: PropTypes.string.isRequired,
  Price: PropTypes.number.isRequired,
  ImgUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
