# REDUX

This is my short notes on getting started with REDUX without any javascript framework.

## CORE CONCEPTS

* Store -  An object that holds the application state.
* Action - An object that describes what happens.
* Reducer -  Ties the Store and Action.

## THEE MAIN PRINCIPLES

* State of an application should be stored in a single object.
* Only way to change state is to dispatch an action
* Only reducer can update the state.

## IMPLEMENTATION

```javascript

const redux = require('redux');

// Actions

const BUY_CAKE = "Buy a cake";

const buyCake = () => {
    return {
        type: BUY_CAKE,
        info:'Buy cake Action'
    }
}


// Reducer
const initialState = {
    numOfCakes: 20
}

const reducer = (state = initialState, action) => {
    switch  (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}


// Store
const store = redux.createStore(reducer);
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
console.log('Current State', store.getState());
unsubscribe();

````
