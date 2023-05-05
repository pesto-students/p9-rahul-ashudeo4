import { legacy_createStore as createStore } from "redux";
let initialState = true;

export function reducer(currentState = initialState, action) {
  switch (action.type) {
    case "TOGGLE":
      initialState = !initialState;
      return initialState;
    default:
      return initialState;
  }
}

const store = createStore(reducer);

export default store;
