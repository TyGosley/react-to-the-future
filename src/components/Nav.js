import React from "react";
// TODO: import react router dom

function Nav() {

    return (
        <nav className="until--text-center">
        <ul>
            <li className="nav-item">
                <button
                    // href="#about"
                    onClick={() => {
                        console.log(document.querySelector("#about"));
                        document.querySelector("#about").style="display:flex";
                        document.querySelector(".cardCarousel").style="display:none";
                        document.querySelector("#contact").style="display:none";
                        document.querySelector("#resume").style="display:none";
                    }}
                    
                >
                    About
                </button>
            </li>
            <li className="nav-item">
                <button
                    // href="#projects"
                    onClick={() => {
                        console.log(document.querySelector(".cardCarousel"));
                        document.querySelector(".cardCarousel").style="display:flex";
                        document.querySelector("#about").style="display:none";
                        document.querySelector("#contact").style="display:none";
                        document.querySelector("#resume").style="display:none";
                    }}
                >
                    Projects
                </button>
            </li>
            <li className="nav-item">
                <button
                    // href="#contact"
                    onClick={() => {
                        console.log(document.querySelector("#about"));
                        document.querySelector("#about").style="display:none";
                        document.querySelector(".cardCarousel").style="display:none";
                        document.querySelector("#contact").style="display:block";
                        document.querySelector("#resume").style="display:none";
                    }}
                >
                    Contact
                </button>
            </li>
            <li className="nav-item">
                <button
                    // href="#resume"
                    onClick={() => {
                        console.log(document.querySelector("#about"));
                        document.querySelector("#about").style="display:none";
                        document.querySelector(".cardCarousel").style="display:none";
                        document.querySelector("#contact").style="display:none";
                        document.querySelector("#resume").style="display:block";
                    }}
                >
                    Resume
                </button>
            </li>
        </ul>
    </nav>
    );
}



export default Nav;