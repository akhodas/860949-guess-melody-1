import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router';

import GameOverScreen from './game-over-screen.jsx';

describe(`GameOverScreen`, () => {
  it(`correctly rendered`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <GameOverScreen
              onRelaunchButtonClick={jest.fn()}
            />
          </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
