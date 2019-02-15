import { ADD_BASKET_COUNT, DELETE_BASKET_COUNT } from "./../actions/basket";
import store from "../store";
let basketObject;
if (
  localStorage.basket &&
  JSON.parse(localStorage.basket) &&
  JSON.parse(localStorage.basket).length
)
  basketObject = JSON.parse(localStorage.basket);
else basketObject = [];
// let user = localStorage.user ? JSON.parse(localStorage.user) : {};
// console.log("in store:", basketObject);
const initialState = {
  basketCount: 0,
  basket: []
  // user: user
};
// console.log("it is the user information in redux reducer", user);
export default function(state = initialState, action) {
  console.log(
    "in reducer:",
    state.basketCount,
    state.basket.length,
    state.basket,
    state,
    action
  );
  switch (action.type) {
    case DELETE_BASKET_COUNT:
      return {
        ...state,
        basketCount: action.index,
        basket: state.basket
      };
    case ADD_BASKET_COUNT:
      return {
        ...state,
        basketCount: action.index,
        basket: state.basket
      };
    // return Object.assign({}, state, {
    //   basketCount: state.basketCount + 1,
    //   basket: state.basket
    // });
    // case "USER":
    //   return Object.assign({}, state, {
    //     user: JSON.parse(action.user)
    //   });
    default:
      return state;
  }
}
// console.log(
//   "after assign the user to uiser state that has fuckerd me up",
//   user
// );
