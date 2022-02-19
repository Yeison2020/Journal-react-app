import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
// Here using combine reducer allow me to combine different reducers It's recommended to avoid to refactor later when adding others reducers.

// Adding this allow me to have the reducer connect and working with Redux dev tools.

const reducers = combineReducers({
  auth: authReducer,
});
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
