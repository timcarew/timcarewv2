import React, { Component } from 'react'
import resume from "../../resume.pdf";
import "./SocialDrawer.css";

class SocialDrawer extends Component {
  render() {
    let browser = "chrome";
    return(
      <div className="SocialDrawer">
        <a onMouseEnter={() => this.props.typeMessage("mail -s \"Nice Site!\" mail@timcarew.com")} href="mailto:mail@timcarew.com" className="SocialDrawer-link">Email</a>
        <a onMouseEnter={() => this.props.typeMessage("open ./resume.pdf")} href={resume} className="SocialDrawer-link" target="_blank" rel="noopener noreferrer">Resume</a>
        <a onMouseEnter={() => this.props.typeMessage(`${browser} https://timcarew.github.io`)} href="https://github.com/timcarew" target="_blank" rel="noopener noreferrer" className="SocialDrawer-link">GitHub</a>
        <a href="/" className="SocialDrawer-link SocialDrawer-link-static">@</a>
      </div>
    );
  }
}

export default SocialDrawer;