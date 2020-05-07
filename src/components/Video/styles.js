import styled from 'styled-components';

export const Container = styled.div`
  .player-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* Player ratio: 100 / (1280 / 720) */
    padding-top: 0;
    height: 0;
    overflow: hidden;
    background: ${(props) => props.theme.theme.box};
  }

  .react-player {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-width: 0px;
    flex: 1 1 0%;
  }
`;
