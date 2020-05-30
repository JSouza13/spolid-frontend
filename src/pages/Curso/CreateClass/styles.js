import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  padding: 25px;
  background: ${(props) => props.theme.theme.box};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 15px;

  @media (max-width: 800px) {
    max-width: 700px;
  }

  @media (max-width: 650px) {
    max-width: fit-content;
  }

  form {
    max-width: 960px;
    width: 100%;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 32px;
      margin-bottom: 24px;
      color: ${(props) => props.theme.theme.h1};
      align-self: center;

      @media (max-width: 340px) {
        font-size: 20px;
      }
    }

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
    @media (max-width: 650px) {
      max-width: 280px;
      margin: 20px 0;
    }

    @media (max-width: 340px) {
      max-width: 250px;
    }
  }
`;
