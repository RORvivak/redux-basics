import React from 'react';

const Counter = (props) => {
    return(
        <div align= "center">
            <div>Result is {props.value}</div>
            <div><input type="text" name="counter_text"/></div>
            <div><button>Add</button></div>
        </div>
    )
}

export default Counter;

