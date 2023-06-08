import { del, getLocalData, saveData } from "../../UTIL/index";

import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actiontypes/auth.types";

const initState = {
  isAuth: getLocalData("token") ? true : false,
  token: getLocalData("token") || "",
  isLoading: false,
  isError: false,
};

const authReducers = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      saveData("token", payload);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        token: "",
      };
    }
    case LOGOUT: {
      del("token");
      del("auth");
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducers;
