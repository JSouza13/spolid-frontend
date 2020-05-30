import React, { useState, useRef, useEffect } from 'react';
import { FiCamera } from 'react-icons/fi';

import { useField } from '@unform/core';

import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const AvatarRef = useRef();

  useEffect(() => {
    if (AvatarRef.current) {
      registerField({
        name: 'avatar_id',
        ref: AvatarRef.current,
        path: 'dataset.file',
      });
    }
  }, [AvatarRef, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <img src={preview || 'https://api.adorable.io/avatars/285/ava'} alt="" />
      <label htmlFor="avatar">
        <FiCamera />

        <input
          type="file"
          accept="image/*"
          id="avatar"
          data-file={file}
          ref={AvatarRef}
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
