import React from "react";
import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

export const App = (props) => {
  const {gameTime, errorCount, startGame} = props;

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
    startGame={startGame}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  startGame: PropTypes.func.isRequired,
};
