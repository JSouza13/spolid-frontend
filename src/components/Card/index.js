import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Card({ id, Title, Provider, Price, ImgUrl }) {
  return (
    <Container>
      <Link to={`/curso/${id}`}>
        <li>
          <img src={ImgUrl} alt={Title} />

          <div className="content">
            <strong>{Title}</strong>
            <p>{Provider}</p>
            <p>
              {Price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
        </li>
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
