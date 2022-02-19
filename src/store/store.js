import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from "redux-thunk";
// Here using combine reducer allow me to combine different reducers It's recommended to avoid to refactor later when adding others reducers.

// Adding this allow me to have the reducer connect and working with Redux dev tools.

// I changed this to be able to apply actions asyn in the app using a componseEnhancers.
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
});
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
