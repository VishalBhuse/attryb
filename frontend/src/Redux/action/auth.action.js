import { PostAPICALL } from "../../Config/Functions/getFun";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actiontypes/auth.types";

export const authlogin = (params) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return PostAPICALL(`user/login`, params)
    .then((r) => {
      localStorage.setItem("auth", JSON.stringify(r));
      dispatch({ type: LOGIN_SUCCESS, payload: r.token });
      return LOGIN_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE, payload: err });
      return LOGIN_FAILURE;
    });
};
