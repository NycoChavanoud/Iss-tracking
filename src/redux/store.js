import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
//import { persistStore, persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage";
import rootReducer from "./root-reducer";
import mySaga from "./sagas/sagas";

//logger for redux (to use add : (applyMiddleware(sagaMiddleware, logger)) - remove after prod
import logger from "redux-logger";

//devtools - remove after prod
import { composeWithDevTools } from "redux-devtools-extension";

// config persist
// const persistConfig = {
//   key: "root",
//   storage,
// };

// it's the persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// sagaMiddleware setup
const sagaMiddleware = createSagaMiddleware();

//my store
const store = createStore(
  // persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
  // applyMiddleware(sagaMiddleware)
);

// const persistor = persistStore(store);

sagaMiddleware.run(mySaga);

export { store };
//export { store, persistor };
