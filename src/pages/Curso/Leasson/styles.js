import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Complete = styled.div`
  padding: 15px 20px;
  margin: 20px 0;
  display: inline-block;

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
