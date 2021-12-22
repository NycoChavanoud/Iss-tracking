import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import issReducer from "./redux/reducers/issReducer";
import mySaga from "./redux/sagas/sagas";
//devtools
import { composeWithDevTools } from "redux-devtools-extension";

//setup redux - redux-saga
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ issReducer });
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
  // applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
