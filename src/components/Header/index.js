import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-header.svg';
import Notifications from '~/components/Notifications';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Content,
  Profile,
  Badge,
  OptionProfileList,
  OptionProfile,
} from './styles';

export default function Header() {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.user.profile);

  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="SPOLID" width="166" height="49" />
          </Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
            </div>

            <Badge onClick={handleToggleVisible}>
              <img
                src={
                  (profile.avatar && profile.avatar.url) ||
                  'https://api.adorable.io/avatars/50/abott@adorable.png'
                }
                alt={profile.name}
                width="50"
                height="50"
              />
            </Badge>

            <OptionProfileList visible={visible}>
              <OptionProfile>
                <Link to="/profile" onClick={handleToggleVisible}>
                  Editar perfil
                </Link>
              </OptionProfile>
              <OptionProfile>
                <button type="button" onClick={handleSignOut}>
                  Sair
                </button>
              </OptionProfile>
            </OptionProfileList>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
