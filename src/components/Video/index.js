import React from 'react';
import ReactPlayer from 'react-player';

import PropTypes from 'prop-types';

import { Container } from './styles';

function ResponsivePlayer({ url, onProgress, seek }) {
  return (
    <Container>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={url}
          width="100%"
          height="100%"
          progressInterval={500}
          controls
          onProgress={onProgress}
          config={{
            youtube: {
              playerVars: {
                showinfo: 0,
                start: seek,
                modestbranding: 1,
                rel: 0,
                controls: 2,
                iv_load_policy: 3,
              },
            },
          }}
        />
      </div>
    </Container>
  );
}

ResponsivePlayer.propTypes = {
  url: PropTypes.string.isRequired,
  onProgress: PropTypes.func,
  seek: PropTypes.number,
};

ResponsivePlayer.defaultProps = {
  onProgress: null,
  seek: null,
};

export default ResponsivePlayer;
