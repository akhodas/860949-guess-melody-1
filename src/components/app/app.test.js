import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

const mock = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: `test.mp3`,
          genre: `rock`,
        },
        {
          src: `test.mp3`,
          genre: `blues`,
        },
        {
          src: `test.mp3`,
          genre: `jazz`,
        },
        {
          src: `test.mp3`,
          genre: `rock`,
        },
      ],
    },
    {
      type: `artist`,
      song: {
        artist: `Jim Beam`,
        src: `path.mp3`,
      },
      answers: [
        {
          picture: `path.jpg`,
          artist: `John Snow`,
        },
        {
          picture: `path.jpg`,
          artist: `Jack Daniels`,
        },
        {
          picture: `path.jpg`,
          artist: `Jim Beam`,
        },
      ],
    }
  ],
};


describe(`App`, () => {
  it(`correctly renders first screen`, () => {
    const {questions} = mock;
    const tree = renderer.create(<App
      mistakes={0}
      maxMistakes={Infinity}
      gameTime={100}
      questions={questions}
      step={-1}
      onUserAnswer={jest.fn()}
      onWelcomeScreenClick={jest.fn()}
      resetGame={jest.fn()}
      renderScreen={jest.fn()}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders genre question screen`, () => {
    const {questions} = mock;
    const tree = renderer.create(<App
      mistakes={0}
      maxMistakes={Infinity}
      gameTime={100}
      questions={questions}
      step={1}
      onUserAnswer={jest.fn()}
      onWelcomeScreenClick={jest.fn()}
      resetGame={jest.fn()}
      renderScreen={jest.fn()}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`App correctly renders artist question screen`, () => {
    const {questions} = mock;
    const tree = renderer.create(<App
      mistakes={0}
      maxMistakes={Infinity}
      gameTime={100}
      questions={questions}
      step={1}
      onUserAnswer={jest.fn()}
      onWelcomeScreenClick={jest.fn()}
      resetGame={jest.fn()}
      renderScreen={jest.fn()}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
