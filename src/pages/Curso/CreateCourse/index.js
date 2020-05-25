import React, { useRef, useState } from 'react';
import {
  FiBookOpen,
  // FiYoutube,
  FiImage,
  FiDollarSign,
  FiFileText,
} from 'react-icons/fi';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Input } from '~/components/Input';
import { InputFile } from '~/components/InputFile';
import { TextArea } from '~/components/TextArea';
import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

export default function NewIncident() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  // const [video, setVideo] = useState(null);

  const handleSubmit = async (data) => {
    setLoading(true);

    try {
      const schema = Yup.object().shape({
        title: Yup.string()
          .max(30, 'O Título precisa ter no máximo 30 caracteres')
          .required('Campo obrigatório'),
        description: Yup.string()
          .max(125, 'A descrição pode ter no máximo 125 caracteres')
          .required('Campo obrigatório'),
        value: Yup.string().required('Campo obrigatório'),
      });
      // eslint-disable-next-line no-console
      console.log(schema);
      // await schema.validate(
      //   { data },
      //   {
      //     abortEarly: false,
      //   }
      // );
      data.image_id = image;
      // data.video_id = video;

      const response = await api.post('courses', data);

      // eslint-disable-next-line no-console
      console.log(response);
      setLoading(false);

      history.push('/instructor');
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
      setLoading(false);
    }
  };

  const handleChangeImg = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data, {
      // onUploadProgress: (progressEvent) => {
      //   // console.log(progressEvent.loaded / progressEvent.total);
      // },
    });

    setImage(response.data.id);
  };

  // const handleChangeVideo = async (e) => {
  //   e.preventDefault();
  //   const data = new FormData();

  //   data.append('file', e.target.files[0]);

  //   const response = await api.post('files', data, {
  //     // onUploadProgress: (progressEvent) => {
  //     //   // console.log(progressEvent.loaded / progressEvent.total);
  //     // },
  //   });

  //   setVideo(response.data.id);
  // };

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Criar novo curso</h1>
        <Input
          placeholder="Insira o título"
          name="title"
          icon={FiBookOpen}
          label="Título"
        />

        <TextArea
          placeholder="Insira a descrição de seu curso"
          name="description"
          label="Descrição"
          icon={FiFileText}
        />

        <InputFile
          type="file"
          name="image_id"
          accept="image/*"
          label="Insira uma imagem"
          onChange={handleChangeImg}
          icon={FiImage}
          data-file={image}
          placeholder="Imagem de capa"
        />

        {/* <InputFile
          type="file"
          name="video_id"
          accept="video/*"
          label="Insira um vídeo"
          placeholder="Vídeo promocional"
          onChange={handleChangeVideo}
          icon={FiYoutube}
          data-file={video}
        /> */}

        <Input
          placeholder="Ex: 99.99"
          name="value"
          icon={FiDollarSign}
          label="Preço do curso"
          prefix="R$"
        />

        <button type="submit">
          <strong>{loading ? 'Carregando...' : 'Salvar'}</strong>
        </button>
      </Form>
    </Container>
  );
}
