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


// store
const store = redux.createStore(reducer);
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
console.log('Current State', store.getState());
unsubscribe();




