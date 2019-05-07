import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {WelcomeScreen} from './welcome-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Click on startGameBattom correctly work`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<WelcomeScreen
    time={0}
    errorCount={0}
    startGame={clickHandler}
  />);
  const startButton = app.find(`button`);
  startButton.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
