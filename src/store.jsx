// import { createStore } from "redux";
// import rootReducer from "./reducers";

// let middleware;
// let initialState = {};

// // if (process && process.env && process.env.NODE_ENV === "production") {
// //   middleware = applyMiddleware(thunk, promise);
// // } else {
// //   middleware = applyMiddleware(thunk, promise, logger);
// // }

// export default createStore(rootReducer, initialState);
import { createStore } from "redux";
var basketObject =
  JSON.parse(localStorage.basket) && JSON.parse(localStorage.basket).length
    ? JSON.parse(localStorage.basket)
    : [];
console.log("in store:", basketObject);
const initialState = {
  basketCount: basketObject.length,
  basket: basketObject
};
const reducer = (state = initialState, action) => {
  console.log("in reducer:", basketObject.length);
  switch (action.type) {
    case "DELETE_BASKET_COUNT":
      return Object.assign({}, state, {
        basketCount: state.basketCount - 1,
        basket: state.basket
      });
    case "ADD_BASKET_COUNT":
      return Object.assign({}, state, {
        basketCount: state.basketCount + 1,
        basket: state.basket
      });
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
