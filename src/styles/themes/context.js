import { createContext } from 'react';

const ToggleTheme = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export default ToggleTheme;
