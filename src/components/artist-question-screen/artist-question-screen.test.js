import React from 'react';
import renderer from 'react-test-renderer';

import ArtistQuestionScreen from './artist-question-screen.jsx';

describe(`ArtistQuestionScreen`, () => {
  it(`correctly rendered`, () => {
    const tree = renderer
      .create(<ArtistQuestionScreen
        question={{
          type: `artist`,
          song: {
            artist: `artist1`,
            src: `path`,
          },
          answers: [
            {
              picture: `picture0`,
              artist: `artist0`,
            },
            {
              picture: `picture1`,
              artist: `artist1`,
            },
            {
              picture: `picture2`,
              artist: `artist2`,
            },
          ],
        }}
        onAnswer={jest.fn()}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
