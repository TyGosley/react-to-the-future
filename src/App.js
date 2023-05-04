import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Projects from "./components/Projects";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <div>
  <Header/>
  <Nav/>
  <main>
    <section id="about" className="text-center">
      <h2>About Me</h2>
      <img className="profile-photo" src={require("./images/visionary.jpg")} alt="Photo of Tyler overlooking NYC" />
      <p>
        My name is Tyler Gosley. I am an aspiring computer programmer who
        wants to specialize in building and designing awesome websites,
        applications, and everything in between. I am also an aspiring
        Computer Programming Employment Concierge who wants to help those in
        the industry find the perfect fit.
      </p>
    </section>
   
    <h2 className="text-center">My Projects</h2>
    <Projects/>

    {/* skills section */}
    <section id="skills" className="text-center">
      <h2>My Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>MySQL</li>
      </ul>
    </section>
    {/* education section */}
    <section className="text-center" id="education">
      <h2>My Education</h2>
      <ul>
        <li>Bachelor's Degree in Education, Plymouth State University</li>
        <li>
          Full Stack Web Development Certificate, University of California, Los Angeles (pending)
        </li>
      </ul>
    </section>
    <section id="contact" className="text-center">
      <h2>Contact Me</h2>
      <ul>
        <li>Phone: 802-673-6107</li>
        <li><a href="mailto:tygosley@gmail.com">Email</a></li>
        <li>
          <a href="https://www.linkedin.com/in/tyler-gosley/">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.instagram.com/be_awesome_productions/">Instagram</a>
        </li>
        <li><a href="https://github.com/TyGosley">Github</a></li>
      </ul>
    </section>
  </main>
  <footer>
    © A Work In Progress brought to you by Be Awesome Productions
  </footer>
</div>

    </div>
  );
}

export default App;
