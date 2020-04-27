import { darken } from 'polished';
import { createGlobalStyle } from 'styled-components';

import themes from './themes/light';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background: ${(props) => props.theme.theme.background};
    color: ${(props) => props.theme.theme.trash};;
    -webkit-font-smoothing: antialiased !important;
  }

  input, button, textarea {
    font-family: Roboto, serif;
    font-size: 16px;
  }

  button {
    background: ${(props) => props.theme.theme.color.primary};
    color: ${(props) => props.theme.theme.button.color};

    &:hover {
        background: ${darken(0.03, `${themes.color.primary}`)};
      }
  }

  input {
    color: ${(props) => props.theme.theme.inputColor};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
