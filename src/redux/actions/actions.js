export const GET_ISS_FETCH = "GET_ISS_FETCH";
export const GET_ISS_SUCCESS = "GET_ISS_SUCCESS";

export const START_LOOP = "START_LOOP";
export const STOP_LOOP = "STOP_LOOP";

export const getIssFetch = () => ({
  type: GET_ISS_FETCH,
});

export const startLoopStatus = () => ({
  type: START_LOOP,
});
export const stopLoopStatus = () => ({
  type: STOP_LOOP,
});
