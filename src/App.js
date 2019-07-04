import React, { Component } from 'react';
import Computer from "./components/Computer/Computer";
import SocialDrawer from "./components/SocialDrawer/SocialDrawer";
import { debounce } from 'debounce';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, World!",
      page: "home"
    };
  }

  changePage = (page) => {
    this.setState({ page: page});
  }

  typeMessage = debounce((message) => {
    // erase old message
    this.setState({ message: ""});
    // type new one
    let interval = setInterval(() => {
      // get first character
      let characterToAdd = message.slice(0, 1);
      // pop first character
      message = message.substr(1, message.length);
      if (message) {
        let messageToType = this.state.message + characterToAdd;
        this.setState({ message: messageToType });
      }
      else {
        let messageToType = this.state.message + characterToAdd;
        this.setState({ message: messageToType });
        clearInterval(interval);
      }
    }, 25);
  }, 1000, true);

  render() {
    return (
      <div className="App">
      {
        this.state.page === "home" ? 
        // render homepage
        <div className="App-Main">
          <div className="App-name">
            <div className="App-name-text">
              <h2 className="App-name-text-h2">Tim Carew</h2>
            </div>
          </div>
          <div className="App-Computer">
            <h2 onMouseEnter={() => this.typeMessage("cd ./about")} onClick={() => this.changePage("about")} className="App-Computer-link App-Computer-about">About Me</h2>
            <Computer message={this.state.message} />
            <h2 onMouseEnter={() => this.typeMessage("cd ./projects")} onClick={() => this.changePage("projects")} className="App-Computer-link App-Computer-projects">Projects</h2>
          </div>
          <div className="App-links">
            <SocialDrawer typeMessage={this.typeMessage}/>
          </div>
        </div>
        
        : this.state.page === "about" ? 
        // render about page
        <h2>Welcome To About</h2>

        : this.state.page === "projects" ?
        // render projects page
        <h2>Welcome To Projects</h2>

        : false
      }
      </div>
    );
  }
}

export default App;
