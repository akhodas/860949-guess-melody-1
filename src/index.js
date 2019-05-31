import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app.jsx';
import settings from './mocks/setting';
import {reducer, ActionCreator} from './reducer';
import withScreenSwitch from './hocs/with-screen-switch/with-screen-switch';


const AppWrapped = withScreenSwitch(App);

const init = (gameSettings) => {

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */

  store.dispatch(ActionCreator.loadQuestions());

  ReactDOM.render(
      <Provider store={store}>
        <AppWrapped
          maxMistakes={gameSettings.errorCount}
          gameTime={gameSettings.gameTime}
        />
      </Provider>,
      document.querySelector(`.main`)
  );
};

init(settings);
