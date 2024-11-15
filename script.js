import { store } from "./store.js";
import { addAction, subtractAction, resetAction } from "./actions.js";

store.dispatch(addAction());
store.dispatch(addAction());
store.dispatch(subtractAction());
store.dispatch(resetAction());
