import { combineReducers } from "redux";

import basket from "./basket";
import language from "./language";
import user from "./user";

export default combineReducers({
  basket,
  language,
  user
});
