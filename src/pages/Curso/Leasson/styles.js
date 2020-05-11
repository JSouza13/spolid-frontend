import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1366px;
  align-items: flex-start;
  flex: 1 1 0%;
  padding: 71px 30px;
  overflow: hidden;

  aside {
    width: 350px;
    margin-left: 30px;
    display: initial;
    background: ${(props) => props.theme.theme.box};
    border-radius: 5px;
    overflow: hidden;

    header {
      display: flex;
      align-items: center;
      padding: 30px;
      background-color: rgb(40, 39, 47);

      img {
        width: 50px;
        margin-right: 15px;
      }

      strong {
        color: ${(props) => props.theme.theme.text};
        font-size: 20px;
        line-height: 1.2;
        font-weight: bold;
      }
    }

    ul {
      position: relative;
      margin: 30px;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;

      li {
        font-size: 14px;
        font-weight: 600;
        display: flex;
        align-items: center;
        position: relative;
        z-index: 5;
        color: ${(props) => props.theme.theme.text};
        cursor: pointer;

        &:first-child::before {
          display: none;
        }

        &::before {
          display: none;
          bottom: 50%;
        }

        button {
          cursor: pointer;
          position: relative;
          width: 10px;
          height: 10px;
          margin-right: 30px;
          padding: 0px;
          flex-shrink: 0;
          z-index: 2;
          border-width: 0px;
          border-style: initial;
          border-color: initial;
          border-image: initial;
          background: rgb(68, 67, 75);
          border-radius: 50%;
          transition: all 0.2s ease 0s;
          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 250%;
            height: 250%;
            transform: translate(-50%, -50%);
          }

          &:hover {
            box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 0px 6px;
            background: #e02020;
          }
        }

        &::before,
        &::after {
          content: '';
          left: 4px;
          width: 2px;
          top: 60%;
          height: calc(100% + 30px);
          position: absolute;
          background: rgb(68, 67, 75);
        }

        &:hover {
          color: #e02020;
          button {
            box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 0px 6px;
            background: #e02020;
          }
        }
        &:last-of-type {
          &::before {
            top: auto;
            bottom: 50%;
          }
          &::after {
            display: none;
          }

          &::before,
          &::after {
            content: '';
            left: 4px;
            width: 2px;
            top: 60%;
            height: calc(100% + 30px);
            position: absolute;
            background: rgb(40, 39, 44);
          }
        }
      }

      li + li {
        margin-top: 20px;
      }
    }
  }
`;

export const Complete = styled.div`
  ${(props) =>
    !props.isComplete &&
    css`
      /* color: ${props.theme.theme.button.background}; */
      background-color:gray;
      color: darkgray;
    `}
  ${(props) =>
    props.isComplete &&
    css`
      /* color: ${props.theme.theme.button.background}; */
      background-color:springgreen;
      color: white;
    `}
`;

export const Player = styled.div`
  width: 100%;
  min-width: 0px;
  flex: 1 1 0%;
`;
