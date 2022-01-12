import { createStore, applyMiddleware, compose } from "redux";
import { shoppingReducer } from "../reducers/shoppingReducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  shoppingReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
