import React from 'react';
import renderer from 'react-test-renderer';
import {WelcomeScreen} from './welcome-screen.jsx';

describe(`WelcomeScreen`, () => {
  it(`correctly rendered`, () => {
    const tree = renderer
      .create(<WelcomeScreen
        errorCount={0}
        time={0}
        startGame={jest.fn()}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
