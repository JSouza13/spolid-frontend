import { shade } from 'polished';
import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,700;1,300&display=swap');

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
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.theme.background};
    color: ${(props) => props.theme.theme.trash};
    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    background-color: ${(props) => props.theme.theme.button.background};
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

    -webkit-appearance: button;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    box-sizing: border-box;
    border-width: 2px;
    border-style: outset;
    border-color: ${(props) => props.theme.theme.button.background};
    border-image: initial;
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
