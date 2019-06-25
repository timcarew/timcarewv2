import React, { Component } from 'react';
import "./Computer.css";

class Computer extends Component {
  render() {
    return (
      <div className="Computer">
        <div className="Computer-display">
          <div className="Computer-display-screen">
            <h5 className="Computer-message Computer-message-user">visitor@timcarew.com</h5>
            <h5 className="Computer-message Computer-message-user-tildaetc">~ $</h5>
            <h5 className="Computer-message">{this.props.message}</h5>
            <h5 className="Computer-cursor">_</h5>
          </div>
        </div> 
      </div>
    );
  }
}

export default Computer;