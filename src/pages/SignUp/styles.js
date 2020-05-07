import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

import backgroundSignUp from '../../assets/backgroundSignUp.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 50vw;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1.3s;

  form {
    margin: 40px 0;
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 24px;
      color: ${(props) => props.theme.theme.h1};
    }

    a {
      color: ${(props) => props.theme.theme.text};
      margin-top: 24px;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#C0C0C0')};
      }
    }
  }
  > a {
    color: ${(props) => props.theme.theme.button.background};
    display: flex;
    align-items: center;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#C91C1C')};
    }
    svg {
      margin-right: 8px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;

  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${backgroundSignUp}) no-repeat center;
  background-size: cover;
  animation: ${appearFromLeft} 1.3s;
`;
