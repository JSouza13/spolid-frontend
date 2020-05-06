import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.theme.header.background};
  padding: 5px 20px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2);
  top: 0;
  position: sticky;
  z-index: 3;
  color: ${(props) => props.theme.theme.header.text};

  @media (max-width: 650px) {
    padding: 0 15px;
  }
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
  margin: 5px 0px 5px;
  padding: 0px 5px;

  img {
    display: block;
    border-radius: 50%;
    border: 2px solid ${lighten(0.2, '#e02020')};
    background: ${(props) => props.theme.theme.header.text};
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
  top: calc(100% + 10px);
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
    left: calc(50% - 5px);
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
  max-height: 140px;
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
      margin: 10px 0;
    }
  }

  aside {
    display: flex;
    align-items: center;
    height: 100%;

    button {
      margin-top: 10px;
      padding: 0px 5px;
      border: 0;
      background: none;
      svg {
        width: 25px;
        height: 25px;
        color: #e02020;
      }
    }

    @media (max-width: 650px) {
      margin-left: 30px;
    }
  }
`;

export const Profile = styled.div`
  padding: 0 5px;
  display: flex;
  margin-left: 20px;
  border-left: 1px groove ${(props) => props.theme.theme.separator};

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
      margin-top: 34px;
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
`;
