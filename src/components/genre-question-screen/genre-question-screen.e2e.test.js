import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GenreQuestionScreen from "./genre-question-screen.jsx";

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      },
      {
        src: `path`,
        genre: `rock`,
      },
      {
        src: `path`,
        genre: `rock`,
      },
    ],
  },
};

describe(`GenreQuestionScreen`, () => {
  it(`When a user answers a question form is not sent 
    and the function is called with the necessary arguments`,
  () => {
    const {question} = mock;
    const onAnswer = jest.fn();
    const genreQuestion = mount(<GenreQuestionScreen
      onAnswer={onAnswer}
      question={question}
    />);

    const form = genreQuestion.find(`form`);
    const formSendPrevention = jest.fn();
    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
      target: {
        elements: [
          {tagName: `INPUT`, value: `answer-0`, checked: true},
          {tagName: `BUTTON`, value: `answer-1`, checked: true},
          {tagName: `INPUT`, value: `answer-1`, checked: false},
          {tagName: `INPUT`, value: `answer-2`, checked: true},
        ],
      },
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
    expect(onAnswer).toHaveBeenCalledWith([`answer-0`, `answer-2`]);
  });
});
