import React, { Component } from 'react';
import Computer from "./components/computer/Computer";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }
  render() {
    return (
      <div className="App">
        <Computer message={this.state.message} />
      </div>
    );
  }
}

export default App;
