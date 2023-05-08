// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <main>
          <About />
          <Projects />
          <Contact />
          <Resume />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
