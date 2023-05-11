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
                    <a href="https://github.com/TyGosley">
                        <li className="githubLogo">
                        {/* <FontAwesomeIcon icon={faGitHub} /> */}
                    </li>
                    </a>
                    <a href="https://www.linkedin.com/in/tyler-gosley/">
                    <li className="linkedInLogo">
                        {/* <FontAwesomeIcon icon={faLinkedIn} /> */}
                    </li>
                    </a>
                    <a href="https://www.instagram.com/be_awesome_productions/">
                    <li className="instagramLogo">
                        {/* <FontAwesomeIcon icon={faInstagram} /> */}
                    </li>
                    </a>
                </ul>
            </p>
        </footer>


    );
}

export default Footer;