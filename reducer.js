import { addAction, subtractAction, resetAction } from "./actions.js";
import { initialState } from "./state.js";

export const counterReducer = function (state = initialState, action) {
  switch (action.type) {
    // checks the add addAction and executes this code in return
    case ADD:
      return { ...state, count: state.count + 1 };

    case SUBTRACT:
      return { ...state, count: state.count - 1 };

    case RESER:
      return { ...state, count: (state.count = 0) };

    default:
      return state;
  }
};

// testing
console.log(counterReducer(initialState, { ADD }));
console.log(counterReducer({ count: 2 }, { SUBTRACT }));
console.log(counterReducer({ count: 1 }, { RESER }));
