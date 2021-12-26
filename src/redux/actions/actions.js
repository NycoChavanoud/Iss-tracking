export const FETCH_ISS_DATA = "FETCH_ISS_DATA";

export const START_LOOP = "START_LOOP";
export const STOP_LOOP = "STOP_LOOP";

export const startLoopStatus = () => ({
  type: START_LOOP,
});
export const stopLoopStatus = () => ({
  type: STOP_LOOP,
});
