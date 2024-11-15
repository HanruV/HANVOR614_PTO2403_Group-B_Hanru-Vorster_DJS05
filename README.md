# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

## How to run the code:

- in the script.js you can call any dispatch on the store to change the state:
  - store.dispatch({ type: ADD });
  - store.dispatch({ type: ADD });
  - store.dispatch({ type: SUBTRACT });
  - store.dispatch({ type: RESET });

## A brief overview of the approach

- state.js
  - holds the initial state of the app in an object ex: { count: 0 }.
- actions.js
  - defines the types of actions that can be performed on the state through a reducer
    - ADD
    - SUBTRACT
    - RESET
- reducer.js
  - reducer function that detemrines how the state is changed based on the actions given
  - it will take the current state and action as parameters, then return a new state based on the action dispatched
- store.js - initialized with the reducer and should log changes to the console whenever an action is dispatched
  - from scenarions we need these 3 actions
    - getState() - to get the current state
    - dispatch(action) - update the state by giving an action to the reducer
    - subscribe(listener) - registers listeners that are called whenever a state change happens
- scripts.js
  - handles the initial setup by importing:
    - store, actions, and state management functions
    - dispatching actions (ADD, SUBTRACT, RESET)
    - logging the state using getState() to verify the changes after each action is dispatched

### How it works

1. Initialise state
   - initial state logs { count: 0 }
2. Dispatching actions
   - ADD, SUBTRACT, RESET
3. State updates
4. logging to the console

## Challenges faced and how I overcame them

| Challenge                                        | Solution                                                                       |
| ------------------------------------------------ | ------------------------------------------------------------------------------ |
| reducer not working (not invoking the functions) | had to define all my actions as constants, to use them in the reducer function |
| implementation of the subscribe events           | used GPT to explain to me how to track changes and store them in an array      |
| dispatching an initial state                     | used GPT to explain to me how this is implemented in the store                 |
