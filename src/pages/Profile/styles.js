import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
  padding-top: 120px;
  max-width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  padding: 25px;
  background: ${(props) => props.theme.theme.box};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  animation: ${appearFromLeft} 1.3s;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    margin: 40px 0;
    width: 540px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 32px;
      margin-bottom: 24px;
      color: ${(props) => props.theme.theme.h1};
    }

    p {
      margin: 10px 0;
      align-self: stretch;
    }

    span {
      color: #cd0000;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      width: 100%;
      background: ${(props) => props.theme.theme.hr};
      margin: 10px 0 20px;
    }

    button {
      margin: 15px 0 0;
      height: 60px;
      width: 100%;
      border: 0;
      border-radius: 8px;
      font-weight: 700;
      font-size: 16px;
      transition: background 0.2s;
    }

    @media (max-width: 650px) {
      max-width: 280px;
      margin: 20px 0;
    }

    @media (max-width: 340px) {
      max-width: 250px;
    }
  }
`;
