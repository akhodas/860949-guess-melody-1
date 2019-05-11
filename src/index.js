import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import settings from './mocks/setting';
import questions from './mocks/questions';

const init = (gameSettings, gameQuestions) => {

  ReactDOM.render(
      <App
        errorCount={gameSettings.errorCount}
        gameTime={gameSettings.gameTime}
        questions={gameQuestions}
      />,
      document.querySelector(`.main`)
  );
};

init(settings, questions);
