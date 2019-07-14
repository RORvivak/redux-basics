import React, { Component } from  'react';
import Counter from './counter';



class App extends Component
{
 state = {counter: 0}

 
  render()
  {
    return(<Counter value = {this.state.counter}></Counter>)
  }

}

export default App;


