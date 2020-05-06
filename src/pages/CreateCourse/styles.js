import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  padding: 25px;

  form {
    max-width: 960px;
    width: 100%;

    input[type='file'] {
      cursor: pointer;
    }

    button {
      height: 60px;
      margin: 15px 0px 0px;
      padding: 0px 30px;
      border-radius: 5px;
      display: inline-block;
      line-height: 50px;
      text-align: center;
      text-decoration: none;
      border: 0;
      font-size: 16px;
      transition: all 150ms linear 0s;

      @media (max-width: 650px) {
        line-height: 40px;
      }
    }
  }
`;
