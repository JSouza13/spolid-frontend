import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import './config/ReactotronConfig';
import Routes from './routes';
import history from './services/history';
import { store, persistor } from './store';
import GlobalStyle from './styles/global';
import ToggleTheme from './styles/themes/context';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState('theme', dark);
  const toggleTheme = () => {
    return theme === light ? setTheme(dark) : setTheme(light);
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToggleTheme.Provider
          value={{
            theme,
            toggleTheme,
          }}
        >
          <ToggleTheme.Consumer>
            {() => (
              <ThemeProvider theme={{ theme }}>
                <Router history={history}>
                  <Routes />
                  <GlobalStyle />
                </Router>
              </ThemeProvider>
            )}
          </ToggleTheme.Consumer>
        </ToggleTheme.Provider>
      </PersistGate>
    </Provider>
  );
}

export default App;
