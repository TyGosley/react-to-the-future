import React from "react";

function Nav(props) {
    const { currentTab, handleTabChange } = props;

    return (
        <nav className="until--text-center">
        <ul>
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handleTabChange("About")}
                    // This is a conditional (ternary) operator that checks to see if the currentTab is equal to the name of the tab we're currently rendering. If it is, we set the current class name to 'nav-link-active', otherwise we set it to 'nav-link'
                    className={currentTab === "About" ? "nav-link active" : "nav-link"}
                >
                    About
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#projects"
                    onClick={() => handleTabChange("Projects")}
                    // Check to see if the current tab is `Projects`, and if it is, we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentTab === "Projects" ? "nav-link active" : "nav-link"}
                >
                    Projects
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => handleTabChange("Contact")}
                    // Check to see if the current tab is `Contact`, and if it is, we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentTab === "Contact" ? "nav-link active" : "nav-link"}
                >
                    Contact
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#resume"
                    onClick={() => handleTabChange("Resume")}
                    // Check to see if the current tab is `Resume`, and if it is, we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentTab === "Resume" ? "nav-link active" : "nav-link"}
                >
                    Resume
                </a>
            </li>
        </ul>
    </nav>
    );
}



export default Nav;