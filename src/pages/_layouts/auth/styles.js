import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  height: 100vh;

  @media (max-width: 650px) {
    overflow: hidden;
  }

  @media (max-width: 1024px) {
    overflow: hidden;
  }
`;
