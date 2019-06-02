import React from 'react';
import renderer from 'react-test-renderer';

import AuthorizationScreen from './authorization-screen.jsx';

describe(`AuthorizationScreen`, () => {
  it(`correctly rendered`, () => {
    const tree = renderer
      .create(<AuthorizationScreen/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
