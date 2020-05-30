import React, { useContext, useRef, useState } from 'react';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import Switch from 'react-switch';

import { Form } from '@unform/web';
import { ThemeContext } from 'styled-components';

import { Input } from '~/components/Input';
import Loading from '~/components/Loading';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';
import { Container, Content, AnimationContainer } from './styles';

export default function Profile() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const { theme } = useContext(ThemeContext);
  const [provider, setProvider] = useState(profile.provider);
  const [loading, setLoading] = useState(false);

  function handleProvider() {
    setProvider(!provider);
  }

  function handleSubmit(data) {
    setLoading(true);

    data.provider = provider;

    dispatch(updateProfileRequest(data));
    setLoading(false);
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} initialData={profile} onSubmit={handleSubmit}>
            <AvatarInput name="avatar_id" />

            <Input
              name="name"
              icon={FiUser}
              type="text"
              placeholder="Nome"
              width="100%"
            />
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
              disabled
              style={{ cursor: 'not-allowed', opacity: '0.3' }}
              width="100%"
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
              width="100%"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova senha"
              width="100%"
            />
            <Input
              name="confirmPassword"
              icon={FiLock}
              type="password"
              placeholder="Confirmação de senha"
              width="100%"
            />
            {loading ? (
              <Loading color="#E02020" size={30} />
            ) : (
              <button type="submit" width="50%">
                <strong>Atualizar perfil</strong>
              </button>
            )}
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
