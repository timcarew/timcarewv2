import React, { Component } from 'react';
import Computer from "./components/Computer/Computer";
import SocialDrawer from "./components/SocialDrawer/SocialDrawer";
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
        <div className="App-name">
          <div className="App-name-text">
            <h2 className="App-name-text-h2">Tim Carew</h2>
          </div>
        </div>
        <Computer message={this.state.message} />
        <div className="App-links">
          <SocialDrawer />
        </div>
      </div>
    );
  }
}

export default App;
