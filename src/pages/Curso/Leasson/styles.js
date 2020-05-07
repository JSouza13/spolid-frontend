import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-width: 0px;
  flex: 1 1 0%;
`;

export const Complete = styled.div`
  ${(props) =>
    !props.isComplete &&
    css`
      /* color: ${props.theme.theme.button.background}; */
      background-color:gray;
      color: darkgray;
    `}
  ${(props) =>
    props.isComplete &&
    css`
      /* color: ${props.theme.theme.button.background}; */
      background-color:springgreen;
      color: white;
    `}
`;
