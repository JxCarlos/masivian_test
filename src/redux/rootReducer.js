import { combineReducers } from "redux";

import commicsReducer from "./comics/reducer";

const rootReducer = combineReducers({
  commicsReducer
});

export default rootReducer;