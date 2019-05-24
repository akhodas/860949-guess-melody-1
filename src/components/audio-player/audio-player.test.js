import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player.jsx';

describe(`AudioPlayer`, () => {
  it(`correctly rendered`, () => {
    const tree = renderer
      .create(<AudioPlayer
        isPlaying = {false}
        onPlayButtonClick = {jest.fn()}
        src = {`path`}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
