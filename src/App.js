import React, { Component } from 'react';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home"
    }
  }
  changePage = (page) => {
    this.setState({ page: page});
  }
  render() {
    return (
      <div className="App">
      {
        this.state.page === "home" ? 
          <Home changePage={this.changePage}/>
        : 
        this.state.page === "about" ? 
          <About changePage={this.changePage}/>
        : 
        this.state.page === "projects" ?
          <Projects changePage={this.changePage}/>
        : 
        false
        // apparently
      }
      </div>
    );
  }
}

export default App;