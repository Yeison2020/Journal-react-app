import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
// Here using combine reducer allow me to combine different reducers It's recommended to avoid to refactor later when adding others reducers.

const reducers = combineReducers({
  auth: authReducer,
});
export const store = createStore(reducers);
