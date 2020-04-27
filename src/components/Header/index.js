import React, { useState } from 'react';
import { TiLightbulb } from 'react-icons/ti';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
// import Notifications from '~/components/Notifications';
import { signOut } from '~/store/modules/auth/actions';
import ToggleTheme from '~/styles/themes/context';

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
    <ToggleTheme.Consumer>
      {({ toggleTheme }) => (
        <Container>
          <Content>
            <nav>
              <Link to="/">
                <img src={logo} alt="SPOLID" width="150" height="60" />
              </Link>
            </nav>

            <aside>
              {/* <Notifications /> */}
              <button type="button" onClick={toggleTheme}>
                <TiLightbulb size={30} />
              </button>

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
      )}
    </ToggleTheme.Consumer>
  );
}
