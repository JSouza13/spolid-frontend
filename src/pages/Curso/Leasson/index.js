import React, { useState } from 'react';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi';

import PropTypes from 'prop-types';

import ResponsivePlayer from '~/components/Video';

import { Container, Player, Nav, Menu } from './styles';

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
    title: 'Animações do After Effects no React Native com Lottie',
    url: 'https://www.youtube.com/watch?v=V3QGW2PgKKY',
  },
];

function Leasson({ Title, src }) {
  const [watchComplete, setWatchComplete] = useState(false);
  const [url, SetUrl] = useState(listClasses[0].url);
  const [itemSelect, SetItemSelect] = useState(listClasses[0]);
  const [navVisible, setNavVisible] = useState(true);

  function handleWatchComplete({ played }) {
    if (played >= 0.9 && !watchComplete) {
      setWatchComplete(true);
    }
  }

  function handleSelect(item) {
    SetItemSelect(item);
    SetUrl(item.url);
  }

  function handleNavVisible() {
    setNavVisible(!navVisible);
  }

  return (
    <Container>
      <Player>
        <header>
          <div className="title">
            <strong>{itemSelect.title}</strong>
            {Title && <span>{Title}</span>}
          </div>
          <Nav onClick={handleNavVisible}>
            {navVisible === true ? (
              <FiChevronsRight size={25} />
            ) : (
              <FiChevronsLeft size={25} />
            )}
            <p>
              {navVisible === true ? 'Esconder navegação' : 'Mostrar navegação'}
            </p>
          </Nav>
        </header>
        <ResponsivePlayer url={url} onProgress={handleWatchComplete} />
      </Player>
      <Menu isVisible={navVisible}>
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
                onClick={() => handleSelect(listClasse)}
                aria-hidden="true"
              >
                <button type="button" onClick={() => handleSelect(listClasse)}>
                  {}
                </button>
                {listClasse.title}
              </li>
            ))}
          </ul>
        </aside>
      </Menu>
    </Container>
  );
}

Leasson.propTypes = {
  Title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Leasson;
