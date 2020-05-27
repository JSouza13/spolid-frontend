import React, { useContext, useRef, useState } from 'react';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import Switch from 'react-switch';

import { Form } from '@unform/web';
import { ThemeContext } from 'styled-components';

import { Input } from '~/components/Input';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';
import { Container, Content, AnimationContainer } from './styles';

export default function Profile() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const { theme } = useContext(ThemeContext);
  const [provider, setProvider] = useState(profile.provider);

  console.log(document.getElementById('avatar_id'));

  function handleProvider() {
    setProvider(!provider);
  }

  function handleSubmit(data) {
    data.provider = provider;

    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} initialData={profile} onSubmit={handleSubmit}>
            <AvatarInput name="avatar_id" />

            <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
              disabled
              style={{ cursor: 'not-allowed', opacity: '0.3' }}
            />
            <p>Quero ser um instrutor!</p>
            <div style={{ alignSelf: 'start', marginBottom: '30px' }}>
              <Switch
                onChange={handleProvider}
                checked={provider}
                checkedIcon={false}
                uncheckedIcon={false}
                height={18}
                width={45}
                handleDiameter={24}
                offColor={theme.color.secudary}
                onColor={theme.color.primary}
                offHandleColor={theme.color.primary}
                onHandleColor={theme.color.secudary}
              />
            </div>
            <hr />
            <Input
              name="oldPassword"
              icon={FiLock}
              type="password"
              placeholder="Sua senha atual"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova senha"
            />
            <Input
              name="confirmPassword"
              icon={FiLock}
              type="password"
              placeholder="Confirmação de senha"
            />
            <button type="submit">Atualizar perfil</button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
