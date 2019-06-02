const initialState = {
  isAuthorizationRequired: false,
  id: undefined,
  email: undefined,
  name: undefined,
};


const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  ADD_USER_DATA: `ADD_USER_DATA`,
  LOG_IN: `LOG_IN`,
};


const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  addUserData: (status) => {
    return {
      type: ActionType.ADD_USER_DATA,
      payload: status,
    };
  },
  logIn: (status) => {
    return {
      type: ActionType.LOG_IN,
      payload: status,
    };
  },
};

const Operation = {
  addUserData: () => (dispatch, _getState, api) => {
    return api.get(`/login`)
        .then((response) => {
          return dispatch(ActionCreator.addUserData(response.data));
        })
        .catch(() => {
          // eslint-disable-next-line no-console
          console.log(`Ошибка авторизации. Повторите позже!`);
        });
  },
  logIn: (data) => (dispatch, _getState, api) => {
    return api.post(`/login`, data)
        .then((response) => {
          dispatch(ActionCreator.logIn(response.data));
        })
        .catch(alert);
  },

};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      });

    case ActionType.ADD_USER_DATA:
      return Object.assign({}, state, action.payload);

    case ActionType.LOG_IN:
      return Object.assign({}, state, {
        isAuthorizationRequired: false,
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
      });

  }

  return state;
};


export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
