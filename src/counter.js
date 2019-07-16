import React, {Component} from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
    render(){
    return(
        <div align= "center">
            <div>Result is {this.props.ctr}</div>
            <div><input type="text" name="counter_text"/></div>
            <div><button>Add</button></div>
        </div>
    )
    }
}
const mapPropsToState = (state) => {
 return(
     {
        ctr: state.counter
     }
 )
}
export default connect(mapPropsToState)(Counter);

