import { lighten } from 'polished';
import styled from 'styled-components';

import themes from '~/styles/themes/light';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 40px;
  margin: 32px auto;

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
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 24px;
    list-style: none;

    li {
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      position: relative;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);

      &:hover {
        background: ${lighten(0.65, `${themes.text}`)};
        -ms-transform: scale(0.3);
        transform: scale(1.1);
        z-index: 1;
      }

      img {
        max-width: 100%;
      }

      strong {
        display: block;
        margin-top: 10px;
        color: #3c3b37;
        font-size: 20px;
      }

      strong + p {
        color: #737380;
        line-height: 21px;
        font-size: 12px;
        margin-top: 0px;
      }

      strong + p + strong {
        margin-top: 10px;
        color: #3c3b37;
      }
    }
  }
`;
