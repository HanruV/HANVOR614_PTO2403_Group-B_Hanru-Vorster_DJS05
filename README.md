# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

## How to run the code:

## A brief overview of the approach

### Structure

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

## Challenges faced and how I overcame them

| Challenge | Solution |
| --------- | -------- |
|           |          |
|           |          |
|           |          |
|           |          |
|           |          |
