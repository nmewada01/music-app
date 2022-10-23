import * as data from "./actionType";

const init = {
  isAuth: false,
  token: null,
  isAuthLoading: false,
  isAuthError: false,
};

const reducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case data.USER_LOGIN_REQUEST: {
      return {
        ...state,
        isAuthLoading: true,
      };
    }
    case data.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthLoading: false,
        isAuth: true,
        token: payload,
      };
    }
    case data.USER_LOGIN_FAILURE: {
      return {
        ...state,
        isAuthLoading: false,
        isAuth: false,
        token: null,
        isAuthError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
