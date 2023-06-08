import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import authReducers from "./reducer/auth.reducer";
import userReducerFun from "./reducer/user.reducer";

const rootReducer = combineReducers({
  auth: authReducers,
  user: userReducerFun,
});

const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default Store;
