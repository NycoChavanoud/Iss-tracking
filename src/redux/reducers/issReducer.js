import { FETCH_ISS_DATA } from "../actions/actions";

const issReducer = (
  state = {
    iss: {
      message: "",
      timestamp: "",
      iss_position: { latitude: "", longitude: "" },
    },
  },
  action
) => {
  switch (action.type) {
    case FETCH_ISS_DATA:
      return { ...state, iss: action.iss };
    default:
      return state;
  }
};

export default issReducer;
