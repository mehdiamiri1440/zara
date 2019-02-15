export const DELETE_BASKET_COUNT = "DELETE_BASKET_COUNT";
export const ADD_BASKET_COUNT = "ADD_BASKET_COUNT";

/**
 * @param {String} message
 * @return {Object}
 */
export function addBasketCount(index) {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_BASKET_COUNT,
      index: index
    });
  };
}

/**
 * @return {Object}
 */
export function deleteBasketCount(index) {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_BASKET_COUNT,
      index: index
    });
  };
}
