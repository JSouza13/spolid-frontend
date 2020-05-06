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
  width: 100%;
  color: ${(props) => props.theme.theme.input.color};
  background: ${(props) => props.theme.theme.input.background};
  border-radius: 10px;

  & + div {
    margin-top: 8px;
  }

  textarea {
    width: 100%;
    min-height: 140px;
    display: flex;
    align-items: center;
    padding: 16px;
    color: ${(props) => props.theme.theme.input.color};
    background: ${(props) => props.theme.theme.input.background};
    border: 2px solid ${(props) => props.theme.theme.input.background};
    border-radius: 10px;
    resize: vertical;
    font-family: 'Roboto Slab', sans-serif;
    font-size: 18px;

    &::placeholder {
      padding-top: 3px;
      color: ${(props) => props.theme.theme.input.color};
    }
  }
`;

export const ErrorMessage = styled.div`
  height: 20px;
  svg {
    margin: 0px;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
