import { lighten } from 'polished';
import styled from 'styled-components';

import themes from '~/styles/themes/light';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 2px solid ${lighten(0.2, '#e02020')};
      background: ${lighten(0.7, `${themes.color.primary}`)};
    }

    input {
      display: none;
    }
  }
`;
