import React, { Component } from 'react'

class About extends Component {
  render() {
    return(
      <div className="About">
        <h2>Hello from About!</h2>
        <button onClick={() => this.props.changePage("home")}>Go Back</button>
      </div>
    );
  }
}

export default About;