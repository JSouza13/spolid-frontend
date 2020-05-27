import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    border-width: 4px;
    border-style: solid;
    border-color: #e02020;
    border-image: initial;
  }
  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #e02020;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }
    &:hover {
      background: ${shade(0.2, '#E02020')};
    }
  }
`;
