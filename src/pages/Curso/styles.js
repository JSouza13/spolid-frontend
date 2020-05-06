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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 65vw;
  padding: 0 30px;
  margin: 32px 0;
  -webkit-scrollbar {
    width: 50px;
    background: ${(props) => props.theme.theme.background};
  }
`;

export const Classes = styled.div`
  align-self: flex-start;
  width: 100%;
  max-width: 35vw;
  display: flex;
  padding: 30px;
  margin: 32px 0;
  background: ${(props) => props.theme.theme.box};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  animation: ${appearFromLeft} 1.3s;
`;
