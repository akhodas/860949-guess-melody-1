import React from 'react';
import renderer from 'react-test-renderer';

import AuthorizationScreen from './authorization-screen.jsx';

describe(`AuthorizationScreen`, () => {
  it(`correctly rendered`, () => {
    const tree = renderer
      .create(<AuthorizationScreen
        name={`name`}
        password={`password`}
        logIn={jest.fn()}
        onChange={jest.fn()}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
