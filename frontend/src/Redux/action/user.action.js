import {
  DeleteAPICALL,
  GetAPICALL,
  PatchAPICALL,
  PostAPICALL,
} from "../../Config/Functions/getFun";

import {
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
} from "../actiontypes/user.types";

export const registerUser = (payload) => (dispatch) => {
  PostAPICALL(`user/register`, payload)
    .then((r) => {
      return r;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetUserApi = (id) => (dispatch) => {
  dispatch({ type: GET_USER_LOADING });
  GetAPICALL(`user/${id}`)
    .then((r) => {
      dispatch({ type: GET_USER_SUCCESS, payload: r });
    })
    .catch(() => {
      dispatch({ type: GET_USER_ERROR });
    });
};

export const userEditAPI = (id, payload) => (dispatch) => {
  PatchAPICALL(`user/edituser/${id}`, payload)
    .then((r) => {
      dispatch(GetUserApi(id));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const DelteUserApi = (id) => (dispatch) => {
  DeleteAPICALL(`user/deleteuser/${id}`)
    .then((r) => {
      dispatch(GetUserApi());
    })
    .catch((err) => {
      console.log(err);
    });
};
