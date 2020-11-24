import React, { Component } from "react";
//import "../../styles/layouts/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {

  render() {

    return (
      <header className="header">
            <div className="title_social">
              <a
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/kasztaluki"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/lukaszgrabowskipg"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                aria-label="E-mail"
                href="mailto:lukasz.grabowski.pg@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
      </header>
    );
  }
}

export default Header;