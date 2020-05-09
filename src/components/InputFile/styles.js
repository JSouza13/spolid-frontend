import styled from 'styled-components';

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

export const ErrorMessage = styled.div`
  margin-top: 5px;
  font-size: 1.4rem;
  color: #b22222;
`;
