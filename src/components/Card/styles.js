import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 216px;
  background: ${(props) => props.theme.theme.background};
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2);

  li {
    margin: 10px;

    .content {
      display: block;
      font-size: small;
      strong {
        display: block !important;
        color: ${(props) => props.theme.theme.trash};
        box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        font-weight: 700;
        height: 36px;
        font-size: 15px;
        line-clamp: 2;

        @media (max-width: 500px) {
          font-size: 1.1rem;
        }
      }

      strong + p {
        color: #686f7a;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        margin-bottom: 14px;
        @media (max-width: 500px) {
          font-size: 0.8rem;
        }
      }

      p + p {
        color: ${(props) => props.theme.theme.trash};
        white-space: nowrap;
        font-weight: 700;
        font-size: 18px;
        text-align: right;
        @media (max-width: 500px) {
          font-size: 0.75rem;
        }
      }
    }

    img {
      max-width: 100%;
      object-fit: cover;
    }
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    top: -8px;
    box-shadow: 0 8px 8px #666;
    img {
      opacity: 0.4;
      cursor: pointer;
    }
  }
`;
