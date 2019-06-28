import React, { Component } from 'react'
import "./SocialDrawer.css";

class SocialDrawer extends Component {
  render() {
    return(
      <div className="SocialDrawer">
        <h6 className="SocialDrawer-link">GitHub</h6>
        <h6 className="SocialDrawer-link">Email</h6>
        <h6 className="SocialDrawer-link">Resume</h6>
      </div>
    );
  }
}

export default SocialDrawer;