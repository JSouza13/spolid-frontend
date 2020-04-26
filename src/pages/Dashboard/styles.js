import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 40px;
  margin: 32px 0;

  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin-top: 60px;
    color: #3c3b37;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02rem;
    font-size: 2.1rem;
  }

  p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
    margin: 10px 0 30px 0;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(216px, 1fr));
    grid-gap: 24px;
    list-style: none;
    margin-bottom: 60px;

    p {
      margin: 0;
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
`;
