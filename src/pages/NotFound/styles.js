import { darken } from 'polished';
import styled from 'styled-components';

import themes from '~/styles/themes/light';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;

  color: coral;

  h1 {
    margin: 30px 0;
  }

  p {
    margin: 30px 0;
  }

  a {
    min-width: 290px;
    color: ${(props) => props.theme.theme.button.textColor};
    background-color: ${(props) => props.theme.theme.button.background};
    height: 60px;
    border: 1px solid transparent;
    padding: 20px 12px;
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
      background: ${darken(0.03, `${themes.button.background}`)};
    }
    @media (max-width: 340px) {
      min-width: 0px;
    }
  }
`;
