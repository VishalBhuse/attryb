import {
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
} from "../actiontypes/user.types";

const initdata = {
  loading: false,
  error: false,
  user: [],
};

const userReducerFun = (state = initdata, { type, payload }) => {
  switch (type) {
    case GET_USER_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case GET_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        user: payload,
      };
    }

    case GET_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducerFun;
