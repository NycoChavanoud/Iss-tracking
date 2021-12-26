import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./root-reducer";
import mySaga from "./sagas/sagas";

// config persist
const persistConfig = {
  key: "root",
  storage,
};

// the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// sagaMiddleware setup
const sagaMiddleware = createSagaMiddleware();

//my store
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);

sagaMiddleware.run(mySaga);

export { store, persistor };
