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
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  max-width: 1366px;
  align-items: flex-start;
  flex: 1 1 0%;
  overflow: hidden;
`;

export const Classes = styled.div`
  width: 350px;
  margin-left: 30px;
  display: initial;
  background: ${(props) => props.theme.theme.box};
  border-radius: 5px;
  overflow: hidden;
  animation: ${appearFromLeft} 1.3s;
`;
