import React, { useRef, useCallback, useState } from 'react';
import { FiYoutube, FiTag } from 'react-icons/fi';

import { Form } from '@unform/web';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Input } from '~/components/Input';
import Loading from '~/components/Loading';
import api from '~/services/api';
import history from '~/services/history';
import getValidationErrors from '~/utils/getValidationErrors';

import { Container } from './styles';

function CreateClass({
  match: {
    params: { id },
  },
}) {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});

        setLoading(true);

        const schema = Yup.object().shape({
          title: Yup.string()
            .max(45, 'O Título precisa ter no máximo 45 caracteres')
            .required('Título deve ser informado'),
          video_url: Yup.string().required('O link deve ser informado'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post(`/courses/${id}/lesson`, data);
        setLoading(false);
        history.push('/instructor');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current.setErrors(errors);

          setLoading(false);
        }
      }
    },
    [id]
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Aulas</h1>
        <Input
          placeholder="Insira o título"
          name="title"
          icon={FiTag}
          label="Título"
        />

        <Input
          placeholder="Link do vídeo do youtube"
          name="video_url"
          icon={FiYoutube}
          label="Preço do curso"
        />
        {loading ? (
          <Loading color="#E02020" size={30} />
        ) : (
          <button type="submit" width="50%">
            <strong>Salvar</strong>
          </button>
        )}
      </Form>
    </Container>
  );
}

export default CreateClass;

CreateClass.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
