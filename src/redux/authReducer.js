import axios from "axios";
const CURRENT_AUTH = "CURRENT_AUTH";

let initialState = false;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_AUTH:
      return (state = action.isLog);
    default:
      return state;
  }
};

export function auth(dispatch, currentAuth) {
  axios
    .put("http://localhost:5000/api/v1/auth", currentAuth)
    .then((res) => {
      dispatch({ type: CURRENT_AUTH, isLog: res.data });
    })
    .catch((err) => console.log(err));
}

export default authReducer;
