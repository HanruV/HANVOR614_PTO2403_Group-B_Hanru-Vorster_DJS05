import { ADD, SUBTRACT, RESET } from "./actions.js";
import { initialState } from "./state.js";

// here the reducer can use the constant actions to return new objects with logic
export const counterReducer = function (state = initialState, action) {
  switch (action.type) {
    // checks the add addAction and executes this code in return
    case ADD:
      return { ...state, count: state.count + 1 };

    case SUBTRACT:
      return { ...state, count: state.count - 1 };

    case RESET:
      return { ...state, count: (state.count = 0) };

    default:
      return state;
  }
};
