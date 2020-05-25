import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 40px;
  margin: 32px 0;
  -webkit-scrollbar {
    width: 50px;
    background: ${(props) => props.theme.theme.background};
  }
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
  }

  h2 {
    margin-top: 60px;
    color: ${(props) => props.theme.theme.text};
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02rem;
    font-size: 2.1rem;

    @media (max-width: 550px) {
      margin-top: 25px;
    }
  }

  p {
    color: ${(props) => props.theme.theme.trash};
    line-height: 21px;
    font-size: 16px;
    margin: 10px 0 30px 0;
  }
`;

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
  padding: 50px;
  background: ${(props) => props.theme.theme.box};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-bottom: 60px;
  justify-content: center;
  align-items: center;
  animation: ${appearFromLeft} 1.3s;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 265px);
    grid-gap: 37px;
    list-style: none;

    p {
      margin: 0;
    }
  }

  @media (max-width: 550px) {
    padding: 20px;
  }

  @media (max-width: 350px) {
    padding: 20px;
  }
`;
