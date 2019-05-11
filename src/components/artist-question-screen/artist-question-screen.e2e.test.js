import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ArtistQuestionScreen from "./artist-question-screen.jsx";

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: `artist1`,
      src: `path`,
    },
    answers: [
      {
        picture: `picture0`,
        artist: `artist0`,
      },
      {
        picture: `picture1`,
        artist: `artist1`,
      },
      {
        picture: `picture2`,
        artist: `artist2`,
      },
    ],
  },
};

describe(`ArtistQuestionScreen`, () => {
  it(`When a user answers a question, the function is called with the necessary arguments`, () => {
    const {question} = mock;
    const onAnswer = jest.fn();
    const artistQuestion = mount(<ArtistQuestionScreen
      onAnswer={onAnswer}
      question={question}
    />);

    const form = artistQuestion.find(`form`);
    const formSendPrevention = jest.fn();
    form.simulate(`change`, {
      preventDefault: formSendPrevention,
      target: {value: `artist-1`},
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(onAnswer).toHaveBeenCalledWith([`artist-1`]);
  });
});
