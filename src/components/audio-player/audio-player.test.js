import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player.jsx';

describe(`AudioPlayer`, () => {
  it(`correctly rendered`, () => {
    const tree = renderer
      .create(<AudioPlayer
        isPlaying = {false}
        isLoading={true}
        onPlayButtonClick = {jest.fn()}
        renderAudio={jest.fn()}
        src = {`path`}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
