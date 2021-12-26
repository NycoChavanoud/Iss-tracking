import { call, put, take, fork, cancel } from "redux-saga/effects";
import { GET_ISS_SUCCESS, START_LOOP, STOP_LOOP } from "../actions/actions";

function issFetch() {
  return fetch("http://api.open-notify.org/iss-now.json").then((res) =>
    res.json().catch((err) => console.error("error : ", err))
  );
}
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* workGetIssFetch() {
  while (true) {
    const iss = yield call(issFetch);
    yield put({ type: GET_ISS_SUCCESS, iss });
    console.log("inside function");
    yield delay(1000);
  }
}

function* mySaga() {
  while (yield take(START_LOOP)) {
    const issLoop = yield fork(workGetIssFetch);
    yield take(STOP_LOOP);
    yield cancel(issLoop);
  }
}

export default mySaga;
