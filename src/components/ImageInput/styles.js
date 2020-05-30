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
  display: flex;
  flex-direction: column;
  align-items: initial;
  justify-content: center;

  img {
    border: 0;
    vertical-align: middle;
    height: auto;
    margin-bottom: 10px;
  }

  > div {
    flex: 1;
    margin-bottom: 10px;
  }
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  padding: 16px;
  height: 44px;
  align-items: center;
  color: ${(props) => props.theme.theme.input.color};
  background: ${(props) => props.theme.theme.input.background};
  border: 2px solid ${(props) => props.theme.theme.input.background};
  border-radius: 10px;

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

  input[type='file'] {
    display: none;
  }

  label {
    display: flex;
    justify-content: start;
    width: 100%;
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
