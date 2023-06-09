import {
  GET_INVENTORY_ERROR,
  GET_INVENTORY_LOADING,
  GET_INVENTORY_SUCCESS,
} from "../actiontypes/inventory.types";

const initdata = {
  loading: false,
  error: false,
  inventory: [],
};

const inventoryReducerFun = (state = initdata, { type, payload }) => {
  switch (type) {
    case GET_INVENTORY_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case GET_INVENTORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        inventory: payload,
      };
    }

    case GET_INVENTORY_ERROR: {
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

export default inventoryReducerFun;
