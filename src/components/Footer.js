import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGitHub } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedIn } from '@fortawesome/free-solid-svg-icons';
// import { faInstagram } from '@fortawesome/free-solid-svg-icons';
// import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className="footer">
      <h3>© A Work In Progress brought to you by Be Awesome Productions</h3>
      <p>
        <ul>
          <li className="githubLogo">
            <a href="https://github.com/TyGosley">GitHub</a>
          </li>
          <li className="linkedInLogo">
            <a href="https://www.linkedin.com/in/tyler-gosley/">LinkedIn</a>
          </li>
          <li className="instagramLogo">
            <a href="https://www.instagram.com/be_awesome_productions/">
              Instagram
            </a>
          </li>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
