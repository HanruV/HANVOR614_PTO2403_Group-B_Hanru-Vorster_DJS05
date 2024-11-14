import { addAction, subtractAction, resetAction } from "./actions.js";
import { initialState } from "./state.js";

export const counterReducer = function (state = initialState, action) {
  switch (action.type) {
    // checks the add addAction and executes this code in return
    case addAction:
      return { ...state, count: state.count + 1 };

    case subtractAction:
      return { ...state, count: state.count - 1 };

    case resetAction:
      return { ...state, count: (state.count = 0) };

    default:
      return state;
  }
};
