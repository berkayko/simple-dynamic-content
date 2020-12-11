import React, { Component } from 'react';
import './App.css';
import UserInput from './Controller/UserInput'
import UserOutput from './Controller/UserOutput'

class App extends Component {
  state={
       textStream:"Enter Username",
       txtArray:[]
  }
  txtChangedHandler = ( event ) => {
    let txt =this.state.textStream;
    txt=event.target.value;
    let txtArr=txt.split(' ')
    this.setState({textStream:txt,txtArray:txtArr});
  };

  render() {
    var elements=[];
    this.state.txtArray.forEach(element => {
      elements.push( <UserOutput text={element}></UserOutput>)
    });
    return (
      <div className="App">
        <ol>
          <UserInput text={this.state.textStream}  changed={(event) => this.txtChangedHandler(event)} ></UserInput>
          <UserOutput text={this.state.textStream}></UserOutput>
          {elements}
        </ol>
      </div>
    );
  }
}

export default App;
