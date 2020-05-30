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
  color: ${(props) => props.theme.theme.input.color};
  background: ${(props) => props.theme.theme.input.background};
  border: 2px solid ${(props) => props.theme.theme.input.background};
  border-radius: 10px;
  padding: 16px;
  display: flex;
  align-items: center;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}


  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

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

  & + div {
    margin-top: 8px;
  }

  > span{
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

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: ${(props) => props.theme.theme.input.color};
    ::placeholder {
      color: ${(props) => props.theme.theme.input.color};
    }
    @media (max-width: 440px) {
      display: block !important;
      box-orient: horizontal;
      overflow: hidden;
      text-overflow: clip;
      text-overflow: ellipsis;
      text-overflow: '…';
    }
  }
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

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: ${(props) => props.theme.theme.input.color};
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
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
