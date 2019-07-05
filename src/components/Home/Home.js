import React, { Component } from 'react'
import Computer from "../Computer/Computer";
import SocialDrawer from "../SocialDrawer/SocialDrawer";
import { debounce } from 'debounce';
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, World!",
      page: "home"
    };
  }

  typeMessage = debounce((message) => {
    // erase old message
    this.setState({ message: "" });
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
  }, 750, true);

  typeMessageSocials = debounce((message) => {
    // erase old message
    this.setState({ message: "" });
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
    }, 10);
  }, 500, false);

  render() {
    return(
      <div className="Home">
        <div className="Home-Main">
          <div className="Home-name">
            <div className="Home-name-text">
              <h2 className="Home-name-text-h2">Tim Carew</h2>
            </div>
          </div>
          <div className="Home-Computer">
            <h2 onMouseEnter={() => this.typeMessage("cd ./about")} onClick={() => this.props.changePage("about")} className="Home-Computer-link Home-Computer-about">About Me</h2>
            <Computer message={this.state.message} />
            <h2 onMouseEnter={() => this.typeMessage("cd ./projects")} onClick={() => this.props.changePage("projects")} className="Home-Computer-link Home-Computer-projects">Projects</h2>
          </div>
          <div className="Home-links">
            <SocialDrawer typeMessage={this.typeMessageSocials} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;