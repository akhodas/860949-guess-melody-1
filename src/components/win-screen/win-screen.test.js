import React from 'react';
import renderer from 'react-test-renderer';

import WinScreen from './win-screen.jsx';

describe(`WinScreen`, () => {
  it(`correctly rendered`, () => {
    const tree = renderer
      .create(<WinScreen
        onRelaunchButtonClick={jest.fn()}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
