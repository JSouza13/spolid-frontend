import { darken } from 'polished';
import styled, { keyframes } from 'styled-components';

import themes from '~/styles/themes/light';

import backgroundEstudar from '../../assets/background.png';

const appearOpac = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`

  height: 100vh;
  width: 100vw;
  padding:15px;

  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  animation: ${appearOpac} 1.3s;

  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%,rgba(0, 0, 0, 0.6) 100%),url('${backgroundEstudar}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  img {
    margin-top: 25px;
    max-width: 450px;
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 1024px) {
    height: 100vh;
    width: 100vw;
    justify-content: center;
    }

    a {
    margin-top: 50px;
    height: 60px;
    width: 100%;
    max-width: 450px;
    background: ${(props) => props.theme.theme.button.background};
    border-radius: 5px;
    color: ${(props) => props.theme.theme.button.textColor};
    font-weight: 700;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    border: 0;
    font-size: 16px;
    line-height: 60px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, `${themes.color.primary}`)};
    }
  }

`;

export const Content = styled.div`
  justify-content: initial;
  z-index: 1;
  color: #fff;
  padding: 20px;
  margin: 30px auto;
  box-sizing: content-box;
  display: block;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 450px;

  h1 {
    margin-bottom: 25px;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.33;
  }

  p {
    font-size: 18px;
    line-height: 1.61;
    opacity: 1;
  }
`;
