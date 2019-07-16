const redux = require("redux")
const createStore = redux.createStore
const intitialstate = { counter: 0 }

const rootreducer = (state = intitialstate, action) => {
    if(action.type === "ADD_INCREM")
    {
        return(
            {...state,
            counter: state.counter + action.value}
        )
    }
}


const store = createStore(rootreducer)
store.subscribe(()=>{
    console.log("subscribe", store.getState())
}
)
console.log(store.getState())
store.dispatch({type: "ADD_INCREM", value: 5})
console.log(store.getState())
