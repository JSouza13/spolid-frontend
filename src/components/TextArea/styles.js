import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

export const Label = styled.div`
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 400;
  }
`;

export const Container = styled.div`
  width: 100%;
  color: ${(props) => props.theme.theme.input.color};
  background: ${(props) => props.theme.theme.input.background};
  border: 2px solid ${(props) => props.theme.theme.input.background};
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${props.theme.theme.button.background};
    `}

    ${(props) =>
      props.isFilled &&
      css`
        color: ${props.theme.theme.button.background};
      `}

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
    align-self: baseline;
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

  textarea {
    min-height: 140px;
    flex: 1;
    border: 0;
    background: transparent;
    color: ${(props) => props.theme.theme.input.color};
    border-radius: 10px;
    resize: vertical;
    font-family: 'Roboto Slab', sans-serif;
    font-size: 18px;

    &::placeholder {
      color: ${(props) => props.theme.theme.input.color};
    }
  }

  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus {
    -webkit-text-fill-color: ${(props) => props.theme.theme.input.color};
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  align-self: baseline;
  svg {
    margin: 0;
    transition: color 2s;
  }
  span {
    background: #c53030;
    color: #fff;
    border-color: #c53030 transparent;
  }
`;
