import React from 'react';
import ReactPlayer from 'react-player';

import PropTypes from 'prop-types';

import { Container } from './styles';

function ResponsivePlayer({ url, onProgress }) {
  return (
    <Container>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={url}
          width="100%"
          height="100%"
          controls
          onProgress={onProgress}
        />
      </div>
    </Container>
  );
}

ResponsivePlayer.propTypes = {
  url: PropTypes.string.isRequired,
  onProgress: PropTypes.func,
};

ResponsivePlayer.defaultProps = {
  onProgress: null,
};

export default ResponsivePlayer;
