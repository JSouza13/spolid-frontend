import styled from 'styled-components';

import themes from '~/styles/themes/light';

export const Container = styled.div`
  background: #fff;
  padding: 0 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;

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
  color: #fff;
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
    color: #fff;
  }

  button {
    background: none;
    border: 0;
    position: relative;
    color: #fff;
    font-size: 13px;
  }
`;

export const OptionProfileList = styled.div`
  position: absolute;
  width: 100px;
  left: calc(100% - 105px);
  top: calc(100% + 10px);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  padding: 15px 5px;
  z-index: 1000;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 14px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.8);

    @media (max-width: 650px) {
      left: calc(50% - 8px);
    }
  }
`;

export const Content = styled.div`
  height: 64px;
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      border-right: 1px solid #eee;
      width: 100%;
      height: auto;
      display: block;
    }

    a {
      font-weight: bold;
      color: ${themes.color.primary};
    }
  }

  aside {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      display: inline-block;
      width: 90px;
      white-space: nowrap;
      overflow: hidden !important;
      text-overflow: ellipsis;
      margin-top: 14px;
    }
    @media (max-width: 650px) {
      margin-left: 30px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  border-left: 1px solid #eee;

  @media (max-width: 650px) {
    margin-left: 10px;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      margin-left: 10px;
      display: block;
      color: #333;
    }

    @media (max-width: 650px) {
      margin-left: 0px;
    }
  }

  img {
    display: block;
    border-radius: 50%;
  }
`;
