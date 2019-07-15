const redux = require("redux");
const createStore = redux.createStore;
const initialState = { counter: 0 }

 const rootreducer = (state = initialState, action) => {
     if(action.type === "ADD_COUNTER")
     {
        return ({...state, counter: state.counter +  action.value})
     }
 }

const store = createStore(rootreducer);
store.dispatch({type: "ADD_COUNTER", value: 5});

console.log(store.getState());