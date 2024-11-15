import { store } from "./store.js";
import { ADD, SUBTRACT, RESET } from "./actions.js";

store.dispatch({ type: ADD });
store.dispatch({ type: ADD });
store.dispatch({ type: SUBTRACT });
store.dispatch({ type: RESET });
