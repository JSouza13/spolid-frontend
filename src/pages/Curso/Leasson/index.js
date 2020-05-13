import React, { useState } from 'react';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi';

import PropTypes from 'prop-types';

import ResponsivePlayer from '~/components/Video';

import {
  Container,
  Player,
  Lesson,
  LessonOptions,
  LessonInfo,
  Sidebar,
} from './styles';

const lessons = [
  {
    id: 1,
    title: 'Criando um projeto do zero para seu portfólio',
    url: 'https://www.youtube.com/watch?v=EhnXaybirdA',
    watched: false,
    played: 0,
  },
  {
    id: 2,
    title: 'Menu de subcategorias com recursividade no JavaScript',
    url: 'https://www.youtube.com/watch?v=-VQPimwkstM',
    watched: false,
    played: 0,
  },
  {
    id: 3,
    title: 'Typescript, Carreira & AdonisJS',
    url: 'https://www.youtube.com/watch?v=sEE-3P9kKyE',
    watched: false,
    played: 0,
  },
  {
    id: 4,
    title: 'Animações do After Effects no React Native com Lottie',
    url: 'https://www.youtube.com/watch?v=V3QGW2PgKKY',
    watched: false,
    played: 0,
  },
];

function Leasson({ Title, thumbnail_url }) {
  const [itemSelect, SetItemSelect] = useState(
    JSON.parse(localStorage.getItem('@Spolid:SelectClass')) || lessons[0]
  );
  const [watchComplete, setWatchComplete] = useState(false);
  const [siderbarVisible, setSiderbarVisible] = useState(true);
  const [progressTime, setProgressTime] = useState(null);

  function handleWatchComplete(data) {
    setProgressTime(data.playedSeconds);

    if (data.played >= 0.9 && !watchComplete) {
      setWatchComplete(!itemSelect.watched);
    }
  }

  function handleSidebarToggle() {
    setSiderbarVisible(!siderbarVisible);
  }

  function handleSelectClass(item) {
    SetItemSelect(item);
    localStorage.setItem('@Spolid:SelectClass', JSON.stringify(item));
  }

  return (
    <Container>
      <Player>
        <header>
          <LessonInfo>
            <strong>{itemSelect.title}</strong>
            {Title && <span>{Title}</span>}
          </LessonInfo>

          <LessonOptions onClick={handleSidebarToggle}>
            {siderbarVisible ? (
              <FiChevronsRight color="#e02020" size={25} />
            ) : (
              <FiChevronsLeft color="#e02020" size={25} />
            )}
            <p>{`${siderbarVisible ? 'Esconder' : 'Mostrar'} navegação`}</p>
          </LessonOptions>
        </header>
        <ResponsivePlayer
          url={itemSelect.url}
          onProgress={handleWatchComplete}
          seek={
            itemSelect.played < progressTime ? progressTime : itemSelect.played
          }
        />
      </Player>
      <Sidebar visible={siderbarVisible}>
        <header>
          {thumbnail_url && <img src={thumbnail_url} alt={Title} />}
          {Title && <strong>{Title}</strong>}
        </header>
        <ul>
          {lessons.map((lesson) => (
            <Lesson
              type="video"
              key={lesson.id}
              onClick={() => handleSelectClass(lesson)}
              aria-hidden="true"
              watched={watchComplete}
            >
              <button type="button" onClick={() => handleSelectClass(lesson)}>
                {}
              </button>
              {lesson.title}
            </Lesson>
          ))}
        </ul>
      </Sidebar>
    </Container>
  );
}

Leasson.propTypes = {
  Title: PropTypes.string.isRequired,
  thumbnail_url: PropTypes.string.isRequired,
};

export default Leasson;
