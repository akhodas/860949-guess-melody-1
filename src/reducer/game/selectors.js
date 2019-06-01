import Namespace from "../namespaces";

const NAMESPACE = Namespace.GAME;


export const getStep = (state) => {
  return state[NAMESPACE].step;
};

export const getMistakes = (state) => {
  return state[NAMESPACE].mistakes;
};
