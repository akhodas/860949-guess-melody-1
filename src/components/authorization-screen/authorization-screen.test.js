import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router';

import AuthorizationScreen from './authorization-screen.jsx';

describe(`AuthorizationScreen`, () => {
  it(`correctly rendered`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <AuthorizationScreen
              name={`name`}
              password={`password`}
              logIn={jest.fn()}
              onChange={jest.fn()}
            />
          </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
