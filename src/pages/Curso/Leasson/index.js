import React, { useState } from 'react';

import ResponsivePlayer from '~/components/Video';

import { Container, Complete } from './styles';

function Leasson() {
  const [watchComplete, setWatchComplete] = useState(false);

  function handleWatchComplete({ played }) {
    if (played >= 0.9 && !watchComplete) {
      setWatchComplete(true);
    }
  }
  return (
    <Container>
      <ResponsivePlayer
        url="https://www.youtube.com/watch?v=DJJ1LezyCYU"
        onProgress={handleWatchComplete}
      />
      <Complete isComplete={watchComplete}> Aula concluida</Complete>
    </Container>
  );
}

export default Leasson;
