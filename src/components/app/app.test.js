import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

describe(`App`, () => {
  it(`correctly rendered`, () => {
    const tree = renderer
      .create(<App
        errorCount={0}
        gameTime={0}
        startGame={jest.fn()}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

