import React from 'react';
import renderer from 'react-test-renderer';

import GenreQuestionScreen from './genre-question-screen.jsx';

describe(`GenreQuestionScreen`, () => {
  it(`correctly rendered`, () => {
    const tree = renderer
      .create(<GenreQuestionScreen
        question={{
          type: `genre`,
          genre: `rock`,
          answers: [
            {
              src: `path`,
              genre: `rock`,
            },
            {
              src: `path`,
              genre: `rock`,
            },
            {
              src: `path`,
              genre: `rock`,
            },
            {
              src: `path`,
              genre: `rock`,
            },
          ],
        }}
        userAnswer={[false, false, false, false]}
        activePlayer={-1}
        onAnswer={jest.fn()}
        onChange={jest.fn()}
        onPlayButtonClick={jest.fn()}
        renderAnswer={jest.fn()}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
