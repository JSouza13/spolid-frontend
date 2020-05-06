import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-right: 25px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  z-index: 1;
  background: ${(props) => props.theme.theme.background};
  max-width: 350px;

  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.1, 1.1);

    .__img--hover {
      height: 100%;
      opacity: 0.2;
    }
  }
  .__img {
    visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 160px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  .__img--hover {
    ${(props) =>
      props.imgUrl &&
      css`
        background-image: url(${props.imgUrl});
      `}
    transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 160px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    top: 0;
  }

  .content {
    z-index: 2;
    background: ${(props) => props.theme.theme.background};
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 5px 24px 24px 24px;

    span {
      font-family: 'Raleway', sans-serif;
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: 2px;
      font-weight: 500;
      color: ${(props) => props.theme.theme.text};
      @media (max-width: 500px) {
        font-size: 0.8rem;
      }
    }
    h3 {
      margin-top: 5px;
      margin-bottom: 10px;
      font-family: 'Roboto', sans-serif;
      display: block !important;
      color: ${(props) => props.theme.theme.text};
      box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      font-weight: 700;
      height: 40px;
      font-size: 16px;
      line-clamp: 2;

      @media (max-width: 500px) {
        font-size: 1.1rem;
      }
    }

    h3 + span {
      color: ${(props) => props.theme.theme.text};
      white-space: nowrap;
      font-weight: 700;
      font-size: 18px;
      text-align: right;
      letter-spacing: 0px;
      @media (max-width: 500px) {
        font-size: 0.75rem;
      }
    }
    &:hover {
      background-color: transparent;
      position: relative;
    }
  }
`;
