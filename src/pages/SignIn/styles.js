import { darken } from 'polished';
import styled from 'styled-components';

import backgroundEstudar from '~/assets/estudar.jpg';
import themes from '~/styles/themes/light';

export const Container = styled.div`
  max-width: 100vw;
  display: flex;
  align-items: center;


  @media (max-width: 650px) {
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.8) 100%),url('${backgroundEstudar}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  @media (max-width: 1024px) {
    height: 100vh;
    width: 100vw;
    justify-content: center;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.8) 100%),url('${backgroundEstudar}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  img {
      max-width: 350px;
      width: 100%;
      height: auto;
      display: block;

      @media (max-width: 650px) {
        padding: 20px;
      }
    }

  section {
    width: 50vw;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 650px) {
      min-width: 70%;
      width: 100vw;
      margin: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @media (max-width: 1024px) {
      max-width: 550px;
    }


    form {
      width: 100%;
      max-width: 350px;
      margin-top: 20px;

      @media (max-width: 650px) {
        margin-top: 0px;
        padding: 20px;
      }

      @media (max-width: 1024px) {
        margin-top: 0px;
        max-width: 550px;
      }

      h1 {
        font-size: 32px;
        margin-bottom: 20px;
        color: ${(props) => props.theme.theme.h1};

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
        color: ${(props) => props.theme.theme.inputColor};
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
        color: #fff;
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
  }

  .background {
    height: 100vh;
    width: 50vw;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.8) 100%),url('${backgroundEstudar}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    @media (max-width: 768px) {
      height: 0;
      width: 0;
    }

    @media (max-width: 1024px) {
      height: 0;
      width: 0;
    }
}`;
