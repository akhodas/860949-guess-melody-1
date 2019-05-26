import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app.jsx';
import settings from './mocks/setting';
import questions from './mocks/questions';
import {reducer} from './reducer';

const init = (gameSettings, gameQuestions) => {
  const store = createStore(reducer);

  ReactDOM.render(
      <Provider store={store}>
        <App
          maxMistakes={gameSettings.errorCount}
          gameTime={gameSettings.gameTime}
          questions={gameQuestions}
        />
      </Provider>,
      document.querySelector(`.main`)
  );
};

init(settings, questions);
