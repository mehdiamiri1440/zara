import { SHOW_ALERT, HIDE_ALERT } from "./../actions/basket";

const initialState = {
  message: "This is the test message !!!",
  visibility: false
};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        message: action.message,
        visibility: true
      };
    case HIDE_ALERT:
      return {
        ...state,
        //message: "",
        visibility: false
      };
    default:
      return state;
  }
}
