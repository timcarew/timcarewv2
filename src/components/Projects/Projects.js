import React, { Component } from 'react'

class Projects extends Component {
  render() {
    return(
      <div className="Projects">
        <h2>Hello from Projects</h2>
        <button onClick={() => this.props.changePage("home")}>Go back</button>
      </div>
    );
  }
}

export default Projects;