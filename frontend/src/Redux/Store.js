import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import authReducers from "./reducer/auth.reducer";
import inventoryReducerFun from "./reducer/inventory.reducer";
import userReducerFun from "./reducer/user.reducer";

const rootReducer = combineReducers({
  auth: authReducers,
  user: userReducerFun,
  inventory: inventoryReducerFun,
});

const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default Store;
