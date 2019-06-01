import {createSelector} from "reselect";
import Namespace from "../namespaces";

const NAMESPACE = Namespace.DATA;


export const getQuestions = (state) => {
  return state[NAMESPACE].questions;
};

export const getGenreQuestions = createSelector(
    getQuestions,
    (questions) => questions.filter((it) => it.type === `genre`)
);


const randomFilter = (_state) => {
  return Math.random() > 0.5;
};

export const getRandomArtistQuestions = createSelector(
    getQuestions,
    randomFilter,
    (resultOne, resultTwo) => {
      return resultOne.filter((it) => resultTwo && it.type === `artist`);
    }
);
