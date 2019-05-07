import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app.jsx";

const init = () => {
  const settings = {
    gameTime: 10,
    errorCount: 5,
    startGame: (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-console
      console.log(`CLICK on 'Start'`);
    },
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        startGame={settings.startGame}
      />,
      document.querySelector(`.main`)
  );
};

init();
