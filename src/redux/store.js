import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import issReducer from "./reducers/issReducer";
import mySaga from "./sagas/sagas";

//devtools - remove after prod
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ issReducer });
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
  // applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mySaga);

export default store;
