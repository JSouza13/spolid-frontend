import React, { useState, useContext } from 'react';
import { FiSunset, FiSunrise } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { ThemeContext } from 'styled-components';

import logo from '~/assets/logo.svg';
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
  const { theme } = useContext(ThemeContext);

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
              <button type="button" onClick={toggleTheme}>
                {theme.title === 'light' ? (
                  <FiSunset size={30} />
                ) : (
                  <FiSunrise size={30} />
                )}
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
                    alt=""
                    width="60"
                    height="60"
                  />
                </Badge>

                <OptionProfileList visible={visible}>
                  <OptionProfile visible>
                    <Link to="/profile" onClick={handleToggleVisible}>
                      Editar perfil
                    </Link>
                  </OptionProfile>
                  <OptionProfile visible={profile.provider}>
                    <Link to="/instructor" onClick={handleToggleVisible}>
                      Área do instrutor
                    </Link>
                  </OptionProfile>

                  <OptionProfile visible>
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
