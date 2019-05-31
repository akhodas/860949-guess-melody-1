import {compose} from "recompose";
import {createStore, applyMiddleware} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

import App from './components/app/app.jsx';
import settings from './mocks/setting';
import {reducer, Operation} from './reducer';
import withScreenSwitch from './hocs/with-screen-switch/with-screen-switch';


const AppWrapped = withScreenSwitch(App);

const init = (gameSettings) => {

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );
  /* eslint-enable */

  store.dispatch(Operation.loadQuestions());

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
