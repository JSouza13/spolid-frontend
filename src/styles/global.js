import { shade } from 'polished';
import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: ${(props) => props.theme.theme.background};
    color: ${(props) => props.theme.theme.trash};;
    -webkit-font-smoothing: antialiased !important;
    transition: all 0.5s ease-in-out 0s;
  }

  body, input, button {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    background: ${(props) => props.theme.theme.button.background};
    color: ${(props) => props.theme.theme.button.textColor};
    font-weight: 500;
    margin-top: 16px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    height: 56px;
    width: 100%;
    transition: background 0.2s;
    cursor: pointer;
    &:hover {
      background: ${shade(0.2, '#E02020')};
    }
  }

  input {
    color: ${(props) => props.theme.theme.inputColor};
  }

  a {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 18px;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
