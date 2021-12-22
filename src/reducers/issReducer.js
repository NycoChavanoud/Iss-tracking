import { GET_ISS_SUCCESS } from "../actions/actions";

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
    case GET_ISS_SUCCESS:
      return { ...state, iss: action.iss };
    default:
      return state;
  }
};

export default issReducer;
