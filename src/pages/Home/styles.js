import { darken } from 'polished';
import styled from 'styled-components';

import themes from '~/styles/themes/light';

import background from '../../assets/background.png';

export const Container = styled.div`

  height: 100vh;
  width: 100vw;
  padding:15px;

  display:flex;
  flex-direction: column;
  align-items: center;

  background-image: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.8) 100%),url('${background}');
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

`;

export const Content = styled.div`
  justify-content: initial;
  z-index: 1;
  color: #fff;
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
    background: ${themes.color.primary};
    border-radius: 5px;
    color: #fff;
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
