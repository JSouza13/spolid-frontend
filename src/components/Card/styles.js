import styled from 'styled-components';

export const Container = styled.div`
  width: 216px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);

  .content {
    display: block;
    padding: 15px 10px 0 15px;
    font-size: small;
    strong {
      display: block !important;
      color: #29303b;
      box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      font-weight: 700;
      height: 38px;
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
      color: #29303b;
      margin-right: 10px;
      white-space: nowrap;
      font-weight: 700;
      font-size: 18px;
      min-height: 36px;
      text-align: right;
      @media (max-width: 500px) {
        font-size: 0.75rem;
      }
    }
  }

  img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    max-width: 100%;
    object-fit: cover;
  }

  &:hover {
    img {
      opacity: 0.4;
      cursor: pointer;
    }
  }
`;
