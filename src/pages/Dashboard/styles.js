import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 40px;
  margin: 32px 0;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin-top: 60px;
    color: ${(props) => props.theme.theme.text};
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02rem;
    font-size: 2.1rem;
  }

  p {
    color: ${(props) => props.theme.theme.trash};
    line-height: 21px;
    font-size: 16px;
    margin: 10px 0 30px 0;
  }
`;

export const Content = styled.div`
  padding: 50px;
  background: ${(props) => props.theme.theme.box};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-bottom: 60px;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(216px, 1fr));
    grid-gap: 24px;
    list-style: none;

    p {
      margin: 0;
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    @media (max-width: 518px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
`;
