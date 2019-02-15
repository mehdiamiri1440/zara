import { USER, USER_LOGOUT } from "./../actions/user";
let user = localStorage.user ? JSON.parse(localStorage.user) : {};
const initialState = {
  user: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case USER:
      return { ...state, user: action.user };
    case USER_LOGOUT:
      return { ...state, user: {} };
    default:
      return state;
  }
}
