import { darken } from 'polished';
import styled, { keyframes } from 'styled-components';

import themes from '~/styles/themes/light';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Content = styled.div`
  max-width: 960px;
  min-width: 280px;
  background: ${(props) => props.theme.theme.box};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 40px;
  margin: 32px auto;
  justify-content: center;
  align-items: center;
  animation: ${appearFromLeft} 1.3s;

  header {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    > h1 {
      margin: 0 30px 30px 0;
      font-weight: 400;
      font-size: 30px;
      float: right;
      color: ${(props) => props.theme.theme.h1};

      @media (max-width: 731px) {
        font-size: 20px;
        margin-right: 0px;
      }

      @media (max-width: 731px) {
        font-size: 15px;
        margin-right: 0px;
      }
    }

    > a {
      min-width: 278px;
      color: ${(props) => props.theme.theme.button.textColor};
      background-color: ${(props) => props.theme.theme.button.background};
      height: 60px;
      border: 1px solid transparent;
      padding: 20px 12px;
      font-size: 16px;
      border-radius: 5px;
      display: inline-block;
      margin-bottom: 0;
      margin-left: 10px;
      font-weight: 700;
      text-align: center;
      vertical-align: middle;
      touch-action: manipulation;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, `${themes.button.background}`)};
      }
      @media (max-width: 731px) {
        font-size: 12px;
        padding: 8px 6px;
        height: 36px;
        min-width: 0;
      }
    }
    @media (max-width: 731px) {
      min-width: -webkit-fill-available;
    }
  }

  hr {
    border: 0;
    height: 1px;
    width: 100%;
    background: ${(props) => props.theme.theme.hr};
    margin-bottom: 40px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 268px);
    grid-gap: 37px;

    > p {
      margin: 0;
    }

    @media (max-width: 350px) {
      grid-template-columns: repeat(auto-fill, 200px);
    }
  }

  @media (max-width: 1036px) {
    max-width: 653px;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 731px) {
    max-width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 340px) {
    max-width: 280px;
  }
`;

export const Pagination = styled.footer`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50%;
  > button {
    max-width: fit-content;
    padding-top: 6px;
    border: 0;
    background: transparent;
  }
`;
