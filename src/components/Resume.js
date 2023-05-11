import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faSquareShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { faJediOrder } from "@fortawesome/free-brands-svg-icons";

function Resume() {
  return (
    <div id="resume" style={{ display: "none" }}>
      <section className="resDownload">
        <div>
          <h1>Welcome to the Resume of Tyler Gosley</h1>
          <a href={process.env.REACT_APP_RESUME_LINK} download>
            <FontAwesomeIcon icon={faDownload} className="icon" />
          </a>
          <p>Check out my list of Developer and Recruiting Proficiencies</p>
        </div>
      </section>

      <section className="three-columns">
        <div className="container">
          <div className="column">
            <h2>Front-End Tech </h2>
            <FontAwesomeIcon icon={faCode} className="icon" />
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>APIs</li>
              <li>BootStrap</li>
              <li>Materialize</li>
            </ul>
          </div>
          <div className="column">
            <h2>Back-End</h2>
            <FontAwesomeIcon icon={faSquareShareNodes} className="icon" />
            <ul>
              <li>Node.js</li>
              <li>Expres.js</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>Test Driven Development(TDD)</li>
              <li>Object-Relational Mapping(ORM)</li>
              <li>Model-View-Controller(MVC)</li>
            </ul>
          </div>
          <div className="column">
            <h2>Full Stack</h2>
            <FontAwesomeIcon icon={faMicrochip} className="icon" />
            <ul>
              <li>React</li>
              <li>MERN</li>
              <li>NoSQL</li>
              <li>Progressive Web Applications(PWA)</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="talentSection">
        <h1>Talent Acquisition</h1>
        <FontAwesomeIcon icon={faJediOrder} className="icon" />
        <p>
          Below are my skills for finding and hiring great candidates for
          technical roles.
        </p>
        <ul className="dot-list">
          <li>
            Sourcing candidates through various channels, such as job boards,
            LinkedIn, and networking events
          </li>
          <li>
            Conducting initial screenings and assessments of candidates to
            evaluate their technical skills and fit for the role
          </li>
          <li>
            Managing the interview process and coordinating with hiring managers
            and other stakeholders
          </li>
          <li>
            Negotiating offers and managing the candidate experience throughout
            the hiring process
          </li>
          <li>
            Staying up-to-date on industry trends and best practices in
            recruiting and talent acquisition
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
