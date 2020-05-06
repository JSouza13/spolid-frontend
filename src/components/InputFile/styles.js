import styled, { css } from 'styled-components';

export const Content = styled.div`
  width: max-content;
  height: 44px;
  color: ${(props) => props.theme.theme.input.color};
  background: ${(props) => props.theme.theme.input.background};
  border: 2px solid ${(props) => props.theme.theme.input.background};
  border-radius: 10px;
  padding: 16px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input[type='file'] {
    display: none;
  }

  label {
    display: flex;
    justify-content: center;
    font-size: 16px;
    color: ${(props) => props.theme.theme.input.color};
    cursor: pointer;
    svg {
      margin-right: 16px;
      color: ${(props) => props.theme.theme.input.color};
      ${(props) =>
        props.isFocused &&
        css`
          color: ${props.theme.theme.button.background};
          border-color: ${props.theme.theme.button.background};
        `}
      ${(props) =>
        props.isFilled &&
        css`
          color: ${props.theme.theme.button.background};
        `}
    }
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 5px;
  font-size: 1.4rem;
  color: #b22222;
`;
