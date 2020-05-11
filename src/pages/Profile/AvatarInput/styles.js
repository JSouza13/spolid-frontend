import styled from 'styled-components';

export const Container = styled.div`
  width: 112px;
  height: 112px;
  margin-bottom: 10px;
  position: relative;
  flex-shrink: 0;
  border-width: 4px;
  border-style: solid;
  border-color: #e02020;
  border-image: initial;
  border-radius: 50%;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 104px;
      height: 104px;
      opacity: 1;
      border-radius: 50%;
    }

    input {
      display: none;
    }
  }
`;
