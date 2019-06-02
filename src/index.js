import {compose} from "recompose";
import {createStore, applyMiddleware} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

import App from './components/app/app.jsx';
import {createAPI} from './api';
import settings from './mocks/setting';
import reducer from './reducer/index';
import {Operation as Data} from './reducer/data/data';
import {Operation as User} from './reducer/user/user';
import withScreenSwitch from './hocs/with-screen-switch/with-screen-switch';


const AppWrapped = withScreenSwitch(App);

const init = (gameSettings) => {
  const api = createAPI((...args) => store.dispatch(...args));


  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(
      applyMiddleware(thunk.withExtraArgument(api))
  );
  const store = createStore(reducer, enhancer);

  store.dispatch(Data.loadQuestions());
  store.dispatch(User.addUserData());

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
