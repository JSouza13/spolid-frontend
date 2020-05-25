import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Container, Course } from './styles';

function CourseCard({ course }) {
  return (
    <Course>
      <Container imgUrl={course.image.url}>
        <Link to={`/course/${course.id}`}>
          <div className="__img" />
          <div className="__img--hover" />

          <div className="content">
            {course.intructor.name && <span>{course.intructor.name}</span>}
            {course.title && <h3>{course.title}</h3>}

            {course.value && (
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(course.value)}
              </span>
            )}
          </div>
        </Link>
      </Container>
    </Course>
  );
}

CourseCard.propTypes = {
  course: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CourseCard;
