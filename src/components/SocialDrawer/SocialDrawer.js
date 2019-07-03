import React, { Component } from 'react'
import resume from "../../resume.pdf";
import "./SocialDrawer.css";

class SocialDrawer extends Component {
  render() {
    return(
      <div className="SocialDrawer">
        <a href="mailto:mail@timcarew.com" className="SocialDrawer-link">Email</a>
        <a href={resume} className="SocialDrawer-link" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="https://github.com/timcarew" target="_blank" rel="noopener noreferrer" className="SocialDrawer-link" id="SocialDrawer-link-dynamic"><span>@</span></a>
      </div>
    );
  }
}

export default SocialDrawer;