import * as types from "./actionType";

const init = {
  musicRecords: [],
  isAppLoading: false,
  isAppError: false,
};

const reducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_MUSIC_RECORD_REQUEST: {
      return {
        ...state,
        isAppLoading: true,
        isAppError: false,
      };
    }
    case types.GET_MUSIC_RECORD_SUCCESS: {
      return {
        ...state,
        musicRecords: payload,
        isAppLoading: false,
        isAppError: false,
      };
    }
    case types.GET_MUSIC_RECORD_FAILURE: {
      return {
        ...state,
        isAppLoading: false,
        isAppError: true,
      };
    }
    default: {
      return state;
    }
  }
};
export { reducer };
