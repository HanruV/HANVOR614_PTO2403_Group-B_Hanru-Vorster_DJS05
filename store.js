import { counterReducer } from "./reducer.js";

function createStore(reducer) {
  // initialise the state and an array to hold listens for changes
  let state;
  const listeners = [];

  const getState = () => state;

  // function to subscribe a listener (callback) to be called when the state changes
  const subscribe = (listener) => {
    listeners.push(listener);
    // return a function to unsubscribe (remove) the listener
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };
  // function to dispatch an action to change the state using the reducer
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  // this will ensure that the state is set to the initial value defined in the reducer
  dispatch({ type: "__INIT__" });

  // return an object with methods to access the state, subscribe to changes, and dispatch actions
  return { getState, subscribe, dispatch };
}

// create a store using the `counterReducer` to handle the state
export const store = createStore(counterReducer);

// test the store
console.log("Initial State:", store.getState()); // { count: 0 }

// subscribe to the store to log the state whenever it updates
store.subscribe(() => {
  console.log("State Updated:", store.getState());
});
