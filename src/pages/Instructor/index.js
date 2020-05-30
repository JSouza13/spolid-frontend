import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

import CourseCard from '~/components/CourseCard';
import Loading from '~/components/Loading';
import api from '~/services/api';

import { Content, Pagination } from './styles';

export default function Instructor() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({ currentPage: 1 });
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function loadCourses() {
      setLoading(true);

      const response = await api.get('/instructor/courses', {
        params: {
          currentPage: query.currentPage,
        },
      });

      if (!isMounted) return;

      const data = response.data.map((course) => ({
        ...course,
      }));

      setCourses(data);
      setLoading(false);
    }

    loadCourses();

    return () => {
      isMounted = false;
    };
  }, [query.currentPage, query.search]);

  async function handlePageChange(next) {
    const nextPage = query.currentPage + (next ? 1 : -1);

    setQuery({
      ...query,
      currentPage: nextPage,
    });
  }

  return (
    <>
      {loading ? (
        <Loading color="#E02020" size={60} />
      ) : (
        <Content>
          <header>
            <h1>Meus cursos</h1>
            <Link to="/course/create">Novo curso</Link>
          </header>
          <hr />
          <>
            {courses.length > 0 ? (
              <ul>
                {courses.map((course) => (
                  <CourseCard key={course.id.toString()} course={course} />
                ))}
              </ul>
            ) : (
              <span>Whoops! Nenhum curso encontrado.</span>
            )}
            <Pagination>
              {query.currentPage > 1 && (
                <button onClick={() => handlePageChange(false)} type="button">
                  <MdChevronLeft color="#fff" size={30} />
                </button>
              )}

              <span>{query.currentPage}</span>

              {courses.length > 0 && (
                <button onClick={() => handlePageChange(true)} type="button">
                  <MdChevronRight color="#fff" size={30} />
                </button>
              )}
            </Pagination>
          </>
        </Content>
      )}
    </>
  );
}
