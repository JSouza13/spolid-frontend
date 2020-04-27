import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.theme.header.background};
  padding: 5px 20px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2);
  top: 0;
  position: sticky;
  z-index: 2;
  color: ${(props) => props.theme.theme.header.text};

  @media (max-width: 650px) {
    padding: 0 15px;
  }
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
`;

export const OptionProfile = styled.div`
  color: ${(props) => props.theme.theme.header.text};
  display: flex;
  align-items: center;
  justify-content: center;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  a {
    font-size: 13px;
    line-height: 18px;
    color: ${(props) => props.theme.theme.header.text};
  }

  button {
    background: none;
    border: 0;
    position: relative;
    color: ${(props) => props.theme.theme.header.text};
    font-size: 13px;
  }
`;

export const OptionProfileList = styled.div`
  position: absolute;
  width: 100px;
  left: calc(100% - 105px);
  top: calc(100% + 10px);
  background: ${(props) => props.theme.theme.header.background};
  border-radius: 4px;
  padding: 15px 5px;
  z-index: 1000;
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
    left: calc(50% - 14px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid ${(props) => props.theme.theme.header.background};
    @media (max-width: 650px) {
      left: calc(50% - 8px);
    }
  }
`;

export const Content = styled.div`
  max-height: 80px;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      border: 0;
      background: none;
      svg {
        width: 25px;
        height: 25px;
        color: ${(props) => props.theme.theme.color.primary};
      }
    }

    @media (max-width: 650px) {
      margin-left: 30px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  border-left: 1px solid ${(props) => props.theme.theme.trash};

  @media (max-width: 650px) {
    margin-left: 10px;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      max-width: 200px;
      white-space: nowrap;
      overflow: hidden !important;
      text-overflow: ellipsis;
      margin-top: 14px;
      margin-left: 10px;
      display: block;
      color: ${(props) => props.theme.theme.header.text};
    }

    @media (max-width: 650px) {
      margin-left: 0px;

      strong {
        display: none;
        width: 85px;
      }
    }
  }

  img {
    display: block;
    border-radius: 50%;
    background: ${(props) => props.theme.theme.header.text};
  }
`;
