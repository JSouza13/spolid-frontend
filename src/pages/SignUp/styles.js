import { darken } from 'polished';
import styled from 'styled-components';

import themes from '~/styles/themes/light';

export const Container = styled.div`
  padding: 50px;
  background: ${(props) => props.theme.theme.box};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 650px) {
    margin: 25px;
    padding: 20px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-items: flex-end;
  }

  section {
    width: 100%;
    max-width: 350px;
    margin-right: 50px;

    @media (max-width: 650px) {
      min-width: 70%;
      margin: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @media (max-width: 1024px) {
      max-width: 550px;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
    }

    h1 {
      margin: 0px 0 15px;
      font-size: 32px;

      @media (max-width: 650px) {
        margin: 15px 0 10px;
        font-size: 28px;
      }

      @media (max-width: 1024px) {
        margin: 15px 0 10px;
        font-size: 28px;
      }
    }

    p {
      font-size: 18px;
      color: ${(props) => props.theme.theme.trash};
      line-height: 32px;

      @media (max-width: 650px) {
        font-size: 14px;
      }
    }

    a {
      display: flex;
      align-items: center;
      margin-top: 40px;
      color: ${(props) => props.theme.theme.h1};
      font-size: 16px;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }

      svg {
        margin-right: 8px;
      }

      @media (max-width: 650px) {
        margin-top: 15px;
      }
    }
  }

  form {
    width: 100%;
    max-width: 350px;

    @media (max-width: 650px) {
      margin-top: 0px;
    }

    @media (max-width: 1024px) {
      margin-top: 0px;
      margin-right: 0px;
      max-width: 550px;
    }

    h1 {
      font-size: 32px;
      margin-bottom: 20px;

      @media (max-width: 650px) {
        margin: 10px;
      }

      @media (max-width: 568px) {
        font-size: 25px;
      }
    }

    input {
      width: 100%;
      height: 44px;
      border-width: 2px;
      border-style: solid;
      border-color: ${darken(0.03, `${themes.color.secudary}`)};
      border-image: initial;
      border-radius: 5px;
      padding: 0 15px;
      margin: 10px 0 10px;

      &::placeholder {
        font-size: 14px;
      }

      @media (max-width: 650px) {
        padding: 0 10px;
        margin-top: 3px;
      }
    }

    span {
      color: #cd0000;
      align-self: flex-start;
    }

    button {
      margin-top: 16px;
      height: 60px;
      width: 100%;
      border-radius: 5px;
      font-weight: 700;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      border: 0;
      font-size: 16px;
      line-height: 60px;
      transition: background 0.2s;

      @media (max-width: 650px) {
        height: 40px;
        line-height: 40px;
      }
    }
  }
`;
