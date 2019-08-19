// import counterReducer from "./counter";
import fetchReducer from "./fetch";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  //   counter: counterReducer,
  fetch: fetchReducer
});
export default rootReducer;
