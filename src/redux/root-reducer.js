import { combineReducers } from "redux";
import issReducer from "./reducers/issReducer";

const rootReducer = combineReducers({ issReducer });

export default rootReducer;
