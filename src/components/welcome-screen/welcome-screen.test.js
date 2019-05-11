import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

describe(`WelcomeScreen`, () => {
  it(`correctly rendered`, () => {
    const tree = renderer
      .create(<WelcomeScreen
        errorCount={0}
        gameTime={0}
        onClick={jest.fn()}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
