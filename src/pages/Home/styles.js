import { darken } from 'polished';
import styled from 'styled-components';

import themes from '~/styles/themes/light';

import backgroundEstudar from '../../assets/background.png';

export const Container = styled.div`

  height: 100vh;
  width: 100vw;
  padding:15px;

  display:flex;
  flex-direction: column;
  align-items: center;

  background-image: linear-gradient(to bottom, rgba(255,255,255,.5) 0%,rgba(255,255,255,0.3) 100%),url('${backgroundEstudar}');
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

`;

export const Content = styled.div`
  justify-content: initial;
  z-index: 1;
  color: #000;
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

  a {
    margin-top: 50px;
    height: 60px;
    width: 100%;
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
