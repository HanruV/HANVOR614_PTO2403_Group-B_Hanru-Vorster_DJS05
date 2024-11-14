// defining the actions - here we add constants to the actions because it will be easier to use than to use strings in the rest
// of the code base
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const RESET = "RESET";

// Action Creators
// adding to the count
export const addAction = () => ({ type: ADD });
// decreasing form the count
export const subtractAction = () => ({ type: SUBTRACT });
// resetting the count
export const resetAction = () => ({ type: RESET });
