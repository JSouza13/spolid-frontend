import React, { useState } from 'react';

import PropTypes from 'prop-types';

import ResponsivePlayer from '~/components/Video';

import { Container, Player } from './styles';

const listClasses = [
  {
    id: 1,
    title: 'Criando um projeto do zero para seu portfólio',
    url: 'https://www.youtube.com/watch?v=EhnXaybirdA',
  },
  {
    id: 2,
    title: 'Menu de subcategorias com recursividade no JavaScript',
    url: 'https://www.youtube.com/watch?v=-VQPimwkstM',
  },
  {
    id: 3,
    title: 'Typescript, Carreira & AdonisJS',
    url: 'https://www.youtube.com/watch?v=sEE-3P9kKyE',
  },
  {
    id: 4,
    title: '4 SOLOS DE VIOLÃO mais fáceis do mundo!',
    url: 'https://www.youtube.com/watch?v=-2YeIQyJj2c',
  },
  {
    id: 5,
    title: 'Violão: Toque sua PRIMEIRA MÚSICA em apenas 10 minutos!',
    url: 'https://www.youtube.com/watch?v=GXpwC_6JRgA&t=718s',
  },
  {
    id: 6,
    title: 'Animações do After Effects no React Native com Lottie',
    url: 'https://www.youtube.com/watch?v=V3QGW2PgKKY',
  },
];

function Leasson({ Title, src }) {
  const [watchComplete, setWatchComplete] = useState(false);
  const [url, SetUrl] = useState(listClasses[0].url);

  function handleWatchComplete({ played }) {
    if (played >= 0.9 && !watchComplete) {
      setWatchComplete(true);
    }
  }

  function handleSetUrl(item) {
    SetUrl(item.url);
  }

  return (
    <Container>
      <Player>
        <ResponsivePlayer url={url} onProgress={handleWatchComplete} />
      </Player>
      <aside>
        <header>
          {src && <img src={src} alt="" />}
          {Title && <strong>{Title}</strong>}
        </header>
        <ul>
          {listClasses.map((listClasse) => (
            <li
              type="video"
              key={listClasse.id}
              onClick={() => handleSetUrl(listClasse)}
              aria-hidden="true"
            >
              <button type="button" onClick={() => handleSetUrl(listClasse)}>
                {}
              </button>
              {listClasse.title}
            </li>
          ))}
        </ul>
      </aside>
    </Container>
  );
}

Leasson.propTypes = {
  Title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Leasson;
