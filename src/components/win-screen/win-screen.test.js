import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router';

import WinScreen from './win-screen.jsx';

describe(`WinScreen`, () => {
  it(`correctly rendered`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <WinScreen
              onReplayButtonClick={jest.fn()}
            />
          </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
