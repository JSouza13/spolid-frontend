import styled from 'styled-components';

export const Container = styled.header`
  background: ${(props) => props.theme.theme.header.background};
  height: 80px;
  width: 100%;
  padding: 0px 30px;
  position: sticky;
  z-index: 9999;
  display: flex;
  justify-content: center;
  top: 0px;
  color: ${(props) => props.theme.theme.header.text};
  box-shadow: 0 8px 6px -6px ${(props) => props.theme.theme.boxShadow};

  @media (max-width: 768px) {
    height: 60px;
    padding: 0px 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 12px 0px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    align-items: center;
    padding: 0px;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 40vw;
    a {
      text-decoration: none;
      img {
        width: 140px;
        height: auto;
        display: block;
        @media (max-width: 768px) {
          width: 112px;
        }
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 40vw;

    button {
      display: flex;
      justify-content: center;
      margin-right: 14px;

      margin: 0px;
      padding: 0px;
      border: 0;
      background: none;
    }
    .setTheme {
      position: relative;
      display: flex;
      justify-content: center;
      margin-right: 14px;

      .toggleTheme {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: 5px;
        padding: 10px;
        background-color: ${(props) =>
          props.theme.theme.header.backgroundInput};
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        @media (max-width: 768px) {
          width: 36px;
          height: 36px;
        }

        > svg {
          height: 20;
          width: 20;
          stroke: currentcolor;
          fill: currentcolor;
          color: ${(props) => props.theme.theme.header.text};
          &:hover {
            color: #e02020;
          }

          @media (max-width: 768px) {
            width: 16px;
            height: 16px;
          }
        }
      }

      @media (max-width: 650px) {
        margin-right: 0px;
      }
    }

    @media (max-width: 650px) {
      margin-left: 14px;
    }
  }
`;

export const Badge = styled.button`
  align-self: center;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 3px solid #e02020;
    background: ${(props) => props.theme.theme.header.text};
    align-self: center;

    &:hover {
      opacity: 0.7;
    }

    @media (max-width: 768px) {
      width: 36px;
      height: 36px;
    }
  }
`;

export const OptionProfile = styled.div`
  color: ${(props) => props.theme.theme.header.text};
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px groove ${(props) => props.theme.theme.separator};
  }

  a {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    color: ${(props) => props.theme.theme.header.text};
  }

  button {
    background: none;
    border: 0;
    position: relative;
    color: ${(props) => props.theme.theme.header.text};
    font-size: 13px;
    text-align: center;
  }
`;

export const OptionProfileList = styled.div`
  position: absolute;
  width: 120px;
  left: calc(100% - 130px);
  top: calc(100% + 5px);
  background: ${(props) => props.theme.theme.header.background};
  border-radius: 4px;
  padding: 15px 5px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.5);

  button {
    height: 100%;
    font-size: 13px;
    line-height: 18px;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.theme.header.text};
    font-weight: bold;
  }

  a {
    height: 100%;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.theme.header.text};
    font-weight: bold;
  }

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 16px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid ${(props) => props.theme.theme.header.background};
    @media (max-width: 768px) {
      left: calc(65% - 15px);
    }

    @media (max-width: 650px) {
      left: calc(65% - 7px);
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  text-align: right;
  padding: 12px 10px;
  outline: 0px;

  div {
    margin-right: 18px;
    align-self: center;

    span {
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      max-width: 200px;
      white-space: nowrap;
      overflow: hidden !important;
      text-overflow: ellipsis;
      color: ${(props) => props.theme.theme.header.text};
    }

    @media (max-width: 650px) {
      margin-left: 0px;

      span {
        display: none;
        width: 85px;
      }
    }
  }

  @media (max-width: 650px) {
    padding: 0px;
  }
`;
