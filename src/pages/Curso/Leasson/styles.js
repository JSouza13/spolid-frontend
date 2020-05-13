import styled, { css, keyframes } from 'styled-components';

const appearOpac = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1 1 0%;
  padding: 71px 30px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    place-content: center;
    padding: 25px 20px;
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

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  animation: ${appearOpac} 0.2s;
`;

export const LessonInfo = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  color: #fff;

  @media (max-width: 1080px) {
    margin-right: 20px;
  }

  @media (max-width: 1330px) {
    strong,
    span {
      display: block;
    }
  }

  strong {
    font-size: 20px;
    color: #e02020;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 17px;
    }

    @media (max-width: 1080px) {
      font-size: 19px;
    }
  }

  span {
    margin: 10px 0px 0px;
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme.theme.textTitle.subTitle};

    @media (max-width: 768px) {
      font-size: 17px;
    }

    @media (max-width: 1080px) {
      font-size: 15px;
    }

    @media (max-width: 1330px) {
      padding: 0px;
      margin: 6px 0px 0px;
    }
  }
`;

export const LessonOptions = styled.div`
  display: flex;
  align-items: center;
  align-self: baseline;
  padding: 0.35rem 0.65rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.theme.theme.textTitle.subTitle};
  background: ${(props) => props.theme.theme.box};

  @media (max-width: 768px) {
    display: none;
  }

  p {
    margin-left: 0.5rem;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const Sidebar = styled.aside`
  margin-left: 30px;
  border-radius: 5px;
  width: 350px;
  display: initial;
  background: ${(props) => props.theme.theme.box};
  overflow: hidden;

  ${(props) =>
    !props.visible &&
    css`
      display: none;
    `}

  header {
    display: flex;
    align-items: center;
    padding: 30px;
    border-radius: 5px;
    background: ${(props) => props.theme.theme.box};
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
    padding-inline-end: 20px;

    li + li {
      margin-top: 20px;
    }
  }

  @media (max-width: 768px) {
    display: initial;
    width: 100%;
    margin: 20px 0px 0px;
  }
`;

export const Lesson = styled.li`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: baseline;
  position: relative;
  z-index: 5;
  color: ${(props) => props.theme.theme.text};
  cursor: pointer;

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
  } /*Button*/

  &:first-child::before {
    display: none;
  }

  &:hover {
    color: #e02020;
    button {
      box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 0px 6px;
      background: #e02020;
    }
  }

  ::before {
    top: auto;
    bottom: 50%;
  }

  &::before,
  &::after {
    content: '';
    left: 4px;
    width: 2px;
    top: 40%;
    height: calc(100% + 30px);
    position: absolute;
    background: rgb(68, 67, 75);
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
      top: 40%;
      height: calc(100% + 30px);
      position: absolute;
      background: transparent;
    }
  }

  ${(props) =>
    props.watched &&
    css`
      color: #04d361;
    `}
`;
