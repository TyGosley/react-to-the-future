import React from "react";

function About() {
    return (
        <section id="about" className="text-center" style={{display:"none"}}>
            <h2>About Me</h2>
            <img className="profile-photo" src={require("../images/visionary.jpg")} alt="Photo of Tyler overlooking NYC" />
            <p>
                My name is Tyler Gosley. I am an aspiring computer programmer who
                wants to specialize in building and designing awesome websites,
                applications, and everything in between. I am also an aspiring
                Computer Programming Employment Concierge who wants to help those in
                the industry find their dream job.
                {/* TODO: Add more detail */}
            </p>
        </section>
    );
}

export default About;