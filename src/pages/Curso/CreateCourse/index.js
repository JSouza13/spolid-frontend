import React, { useRef, useCallback, useState } from 'react';
import { FiBookOpen, FiImage, FiDollarSign, FiFileText } from 'react-icons/fi';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import { ImageInput } from '~/components/ImageInput';
import { Input } from '~/components/Input';
import Loading from '~/components/Loading';
import { TextArea } from '~/components/TextArea';
import api from '~/services/api';
import history from '~/services/history';
import getValidationErrors from '~/utils/getValidationErrors';

import { Container } from './styles';

export default function NewIncident() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  // const [video, setVideo] = useState(null);
  const [file, setFile] = useState();

  const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});

        setLoading(true);

        const schema = Yup.object().shape({
          title: Yup.string()
            .max(30, 'O Título precisa ter no máximo 30 caracteres')
            .required('Título deve ser informado'),
          description: Yup.string()
            .max(300, 'A descrição pode ter no máximo 300 caracteres')
            .required('Descrição deve ser informada'),
          value: Yup.number()
            .typeError('O preço deve ser um número')
            .positive('O preço deve ser positivo')
            .required('Preço deve ser informado'),
          image_id: Yup.mixed()
            .required('Uma imagem deve ser enviada')
            .test(
              'fileFormat',
              'Formato do arquivo inválido',
              () => file && SUPPORTED_FORMATS.includes(file.type)
            ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        data.image_id = image;
        // data.video_id = video;

        const response = await api.post('courses', data);

        setLoading(false);

        history.push(`/course/${response.data.id}/lesson`);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current.setErrors(errors);

          setLoading(false);
        }
      }
    },
    [SUPPORTED_FORMATS, file, image]
  );

  const handleChangeImg = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append('file', e.target.files[0]);
    setFile(e.target.files?.[0]);
    const img = e.target.files?.[0];

    if (!img) {
      setPreview(null);
    } else {
      const previewURL = URL.createObjectURL(img);
      setPreview(previewURL);
    }

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

        <ImageInput
          name="image_id"
          label="Insira uma imagem"
          onChange={handleChangeImg}
          icon={FiImage}
          data-file={image}
          preview={preview}
          placeholder="Imagem de capa"
          width="50%"
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
