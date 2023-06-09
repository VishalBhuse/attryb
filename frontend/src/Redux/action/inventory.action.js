import {
  DeleteAPICALL,
  GetAPICALL,
  PatchAPICALL,
  PostAPICALL,
} from "../../Config/Functions/getFun";
import {
  GET_INVENTORY_ERROR,
  GET_INVENTORY_LOADING,
  GET_INVENTORY_SUCCESS,
} from "../actiontypes/inventory.types";

export const inventoryADD = (payload) => (dispatch) => {
  PostAPICALL(`inventory`, payload)
    .then((r) => {
      dispatch(GetinventoryApi());
      return r;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetinventoryApi = () => (dispatch) => {
  dispatch({ type: GET_INVENTORY_LOADING });
  GetAPICALL(`inventory`)
    .then((r) => {
      dispatch({ type: GET_INVENTORY_SUCCESS, payload: r });
    })
    .catch((err) => {
      dispatch({ type: GET_INVENTORY_ERROR });
    });
};

export const GetSingleinventoryApi = (id) => (dispatch) => {
  GetAPICALL(`inventory/${id}`)
    .then((r) => {
      dispatch(GetinventoryApi());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const DelteinventoryApi = (id) => (dispatch) => {
  DeleteAPICALL(`inventory/${id}`)
    .then((r) => {
      dispatch(GetinventoryApi());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetinventorySearch = (location) => (dispatch) => {
  dispatch({ type: GET_INVENTORY_LOADING });
  GetAPICALL(`inventory/search${location}`)
    .then((r) => {
      dispatch({ type: GET_INVENTORY_SUCCESS, payload: r });
    })
    .catch((err) => {
      dispatch({ type: GET_INVENTORY_ERROR });
    });
};

export const inventoryEditAPI = (id, payload) => (dispatch) => {
  PatchAPICALL(`inventory/${id}`, payload)
    .then((r) => {
      dispatch(GetinventoryApi());
    })
    .catch((err) => {
      console.log(err);
    });
};