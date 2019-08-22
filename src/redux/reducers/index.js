import searchReducer from "./search";
import fetchReducer from "./fetch";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  search: searchReducer,
  fetch: fetchReducer
});
export default rootReducer;
