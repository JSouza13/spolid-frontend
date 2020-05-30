import React, { useState, useEffect } from 'react';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi';

import PropTypes from 'prop-types';

import ResponsivePlayer from '~/components/Video';
import api from '~/services/api';

import {
  Container,
  Player,
  Lesson,
  LessonOptions,
  LessonInfo,
  Sidebar,
} from './styles';

function Leasson({ course_id }) {
  const [lessons, setLessons] = useState([]);
  const [itemSelect, SetItemSelect] = useState(
    JSON.parse(localStorage.getItem('@Spolid:SelectClass')) || lessons[0]
  );
  const [watchComplete, setWatchComplete] = useState(false);
  const [siderbarVisible, setSiderbarVisible] = useState(true);
  const [progressTime, setProgressTime] = useState(null);
  const [course, setCourse] = useState({});
  const [image, setImage] = useState({});
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

  useEffect(() => {
    async function loadLessons() {
      const response = await api.get(`/courses/${course_id}/lesson`, {
        params: {
          showAll: true,
        },
      });

      const data = response.data.map((lesson) => ({
        ...lesson,
      }));

      setLessons(data);
    }

    loadLessons();
  }, [course_id]);

  useEffect(() => {
    async function loadCourses() {
      const { data } = await api.get(`/courses/${course_id}`);
      setCourse(data);
      setImage(data.image);
    }

    loadCourses();
  }, [course_id]);

  return (
    <Container>
      <Player>
        <header>
          <LessonInfo>
            <strong>{itemSelect.title}</strong>
            {course.title && <span>{course.title}</span>}
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
          url={itemSelect.video_url}
          onProgress={handleWatchComplete}
          seek={
            itemSelect.played < progressTime ? progressTime : itemSelect.played
          }
        />
      </Player>
      <Sidebar visible={siderbarVisible}>
        <header>
          {image && <img src={image.url} alt={course.title} />}
          {course.title && <strong>{course.title}</strong>}
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

export default Leasson;

Leasson.propTypes = {
  course_id: PropTypes.string.isRequired,
};
