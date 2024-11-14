// defining the actions
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const RESET = "RESET";

// adding to the count
export const addAction = () => ({ type: ADD });
// decreasing form the count
export const subtractAction = () => ({ type: SUBTRACT });
// resetting the count
export const resetAction = () => ({ type: RESET });
