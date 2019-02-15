export const USER = "USER";
export const USER_LOGOUT = "USER_LOGOUT";

/**
 * @param {String} message
 * @return {Object}
 */
export function userLogin(user) {
  return (dispatch, getState) => {
    dispatch({
      type: USER,
      user
    });
  };
}

/**
 * @return {Object}
 */
export function userLogout() {
  return (dispatch, getState) => {
    dispatch({
      type: USER_LOGOUT
    });
  };
}
