import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  height: 80px;
  display: flex;
  width: 100%;
  top: 0px;
  z-index: 9999;
  opacity: 1;
  visibility: visible;
  background: ${(props) => props.theme.theme.header.background};
  padding: 0px 30px;
  transition: all 0.5s ease-in-out 0s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme.theme.header.text};

  @media (max-width: 650px) {
    padding: 0 5px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px 0px;
  nav {
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  aside {
    display: flex;
    align-items: center;
    height: 100%;

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
        width: 46px;
        height: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: ${(props) => props.theme.theme.background};
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;

        svg {
          width: 25px;
          height: 25px;
          color: ${(props) => props.theme.theme.header.text};
          &:hover {
            color: #e02020;
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
  margin: 0px;
  padding: 0px;
  img {
    width: 56px;
    height: 56px;
    border-width: 3px;
    border-style: solid;
    border-image: initial;
    border-radius: 50%;
    border-color: #e02020;
    background: ${(props) => props.theme.theme.header.text};

    &:hover {
      opacity: 0.7;
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
  top: calc(10% + 20px);
  background: ${(props) => props.theme.theme.header.background};
  border-radius: 4px;
  padding: 15px 5px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.5);

  @media (max-width: 650px) {
    top: calc(10% + 11px);
    left: calc(100% - 125px);
  }

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
