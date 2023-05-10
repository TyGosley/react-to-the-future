import React from "react";

function About() {
  return ( 
    // Put input back in section tab after project style={{display:"none"}}
    <section id="about" className="text-center">
      <h2>About Me</h2>
      <img
        className="profile-photo"
        src={require("../images/visionary.jpg")}
        alt="Tyler overlooking NYC"
      />
      <img
        className="profile-photo"
        src={require("../images/COhikepic.jpg")}
        alt="Tyler overlooking NYC"
      />

      <p className="aboutMeParagraph">
        Sure, here's a draft for your "About Me" section: Hello there, my name
        is Tyler Gosley and I'm a Full Stack Web Developer and Tech Recruiter
        based in Southern California. Originally from Vermont, I graduated from
        Plymouth State University with a degree in Education. After graduation,
        I found my passion in the fitness industry and spent the last 10 years
        helping others achieve amazing results, better health, and more
        confidence. However, I've always been intrigued by the world of
        technology and decided to pursue my dream of becoming a Full Stack Web
        Developer. Outside of work, I love to stay active and explore new
        places. One of my favorite hobbies is thru-hiking, which has led me on
        some incredible adventures and provided me with some great stories to
        tell. But most importantly, I enjoy spending time with my friends and
        family. Thanks for taking the time to read about me. Feel free to browse
        through my portfolio and don't hesitate to reach out if you have any
        questions or would like to connect.
      </p>
    </section>
  );
}

export default About;
