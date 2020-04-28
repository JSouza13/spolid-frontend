import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Switch from 'react-switch';

import { Form, Input } from '@rocketseat/unform';
import { ThemeContext } from 'styled-components';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';
import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const { theme } = useContext(ThemeContext);

  const [provider, setProvider] = useState(profile.provider);

  function handleProvider() {
    setProvider(!provider);
  }

  function handleSubmit(data) {
    data.provider = provider;

    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome completo" />
        <Input
          name="email"
          type="email"
          placeholder="Seu endereço de e-mail"
          disabled
          style={{ cursor: 'not-allowed' }}
        />
        <p>Quero ser um instrutor!</p>
        <Switch
          onChange={handleProvider}
          checked={provider}
          checkedIcon={false}
          uncheckedIcon={false}
          height={12}
          width={35}
          handleDiameter={18}
          offColor={theme.color.secudary}
          onColor={theme.color.primary}
          offHandleColor={theme.color.primary}
          onHandleColor={theme.color.secudary}
        />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <button type="submit">Atualizar perfil</button>
      </Form>
    </Container>
  );
}
