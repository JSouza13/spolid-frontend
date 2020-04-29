import { darken } from 'polished';
import styled from 'styled-components';

import themes from '~/styles/themes/light';

export const Container = styled.div`
  background: ${(props) => props.theme.theme.box};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: 50px;
  margin-bottom: 21px;
  padding: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 650px) {
    margin: 50px 15px 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text {
    width: 75%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: -15px;
    padding: 30px 0;
    float: left;

    svg {
      color: ${(props) => props.theme.theme.h1};
    }

    h1 {
      margin: 0 30px 0 0;
      font-weight: 400;
      font-size: 36px;
      margin-right: -15px;
      float: right;
      color: ${(props) => props.theme.theme.h1};
      @media (max-width: 650px) {
        font-size: 30px;
      }
    }
  }

  a {
    min-width: 290px;
    color: ${(props) => props.theme.theme.button.color};
    background-color: ${(props) => props.theme.theme.color.primary};
    border: 1px solid transparent;
    padding: 16px 12px;
    font-size: 16px;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, `${themes.color.primary}`)};
    }
  }
`;
