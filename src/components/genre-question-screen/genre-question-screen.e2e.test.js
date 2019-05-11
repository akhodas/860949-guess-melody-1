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
  it(`When user answers genre question form is not sent`, () => {
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
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });


  it(`When a user answers a question, the function is called with the necessary arguments`, () => {
    const {question} = mock;
    const onAnswer = jest.fn();
    const genreQuestion = mount(<GenreQuestionScreen
      onAnswer={onAnswer}
      question={question}
    />);

    const checkbox = genreQuestion.find(`#answer-1`);
    checkbox.simulate(`change`);

    const form = genreQuestion.find(`form`);
    const formSendPrevention = jest.fn();
    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onAnswer).toHaveBeenCalledWith([`answer-1`]);
  });
});
