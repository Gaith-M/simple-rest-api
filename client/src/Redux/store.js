import { createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";
import root_reducer from "./reducers/root_reducer";

export const store = createStore(
  root_reducer,
  compose(
    applyMiddleware(Thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
