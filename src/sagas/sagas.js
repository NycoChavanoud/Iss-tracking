import { call, put, takeEvery } from "redux-saga/effects";
import { GET_ISS_FETCH, GET_ISS_SUCCESS } from "../actions/actions";

function issFetch() {
  return fetch("http://api.open-notify.org/iss-now.json").then((res) =>
    res.json()
  );
}

function* workGetIssFetch() {
  const iss = yield call(issFetch);
  yield put({ type: GET_ISS_SUCCESS, iss });
}

function* mySaga() {
  yield takeEvery(GET_ISS_FETCH, workGetIssFetch);
}

export default mySaga;
