import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useSelector } from 'react-redux';

import CourseCard from '~/components/CourseCard';
import Loading from '~/components/Loading';
import api from '~/services/api';

import { Container, Content, Pagination } from './styles';

export default function Dashboard() {
  const profile = useSelector((state) => state.user.profile);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState({ currentPage: 1 });
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function loadCourses() {
      const response = await api.get('courses', {
        params: {
          currentPage: query.currentPage,
          perPage: 15,
        },
      });

      const data = response.data.map((course) => ({
        ...course,
      }));

      setCourses(data);
      setLoading(false);
    }

    loadCourses();
  }, [query.currentPage]);

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
        <Container>
          <h2>Bem-vindo(a) de volta, {profile.name}</h2>
          <p>
            Escolha entre 100.000 cursos em vídeo online com novas adições
            publicadas mensalmente
          </p>
          <Content>
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
          </Content>
        </Container>
      )}
    </>
  );
}
