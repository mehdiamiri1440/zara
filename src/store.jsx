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
let basketObject =
  JSON.parse(localStorage.basket) && JSON.parse(localStorage.basket).length
    ? JSON.parse(localStorage.basket)
    : [];
let user = localStorage.user ? JSON.parse(localStorage.user) : {};
// console.log("in store:", basketObject);
const initialState = {
  basketCount: basketObject.length,
  basket: basketObject,
  user: user
};
console.log("it is the user information in redux reducer", user);
const reducer = (state = initialState, action) => {
  console.log("in reducer:", user);
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
    case "USER":
      return Object.assign({}, state, {
        user: JSON.parse(action.user)
      });
    default:
      return state;
  }
};
console.log(
  "after assign the user to uiser state that has fuckerd me up",
  user
);

const store = createStore(reducer);
export default store;
