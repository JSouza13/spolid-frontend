import styled from 'styled-components';

import Tooltip from '../Tooltip';

export const Label = styled.div`
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 400;
  }
`;

export const Content = styled.div`
  width: max-content;
  height: 44px;
  color: ${(props) => props.theme.theme.input.color};
  background: ${(props) => props.theme.theme.input.background};
  border: 2px solid ${(props) => props.theme.theme.input.background};
  border-radius: 10px;
  padding: 16px;
  width: 100%;

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
    justify-content: start;
    width: 100%;

    font-size: 16px;
    color: ${(props) => props.theme.theme.input.color};
    cursor: pointer;
    svg {
      margin-right: 16px;
      color: ${(props) => props.theme.theme.input.color};
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
