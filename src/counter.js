import React, {Component} from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
    render(){
    return(
        <div align= "center">
            <div>Result is {this.props.ctr}</div>
            <div><input type="text" name="counter_text"/></div>
            <div><button onClick={this.props.incrementer}>Add</button></div>
        </div>
    )
    }
}
const mapStateToProps = (state) => {
 return(
     {
        ctr: state.counter
     }
 )
    }

 const mapMethodToProps = (dispatch) => {
     return(
         {
            incrementer: () =>  dispatch({type: "Increment"})
         }
     )
 }
export default connect(mapStateToProps, mapMethodToProps)(Counter)