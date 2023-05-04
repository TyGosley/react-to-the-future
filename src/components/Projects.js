import React from "react";

function Projects() {
  return (
    <section className="cardCarousel">
      <div className="slider">
        <a href="#slide-1">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-3">3</a>
        <a href="#slide-4">4</a>
        <a href="#slide-5">5</a>
        <a href="#slide-6">6</a>
        <a href="#slide-7">7</a>
        <a href="#slide-8">8</a>
        <a href="#slide-9">9</a>
        <a href="#slide-10">10</a>
        <a href="#slide-11">11</a>
        <a href="#slide-12">12</a>
        {/* <a href="#slide-13">13</a>
        <a href="#slide-14">14</a> */}
        <div className="slides">
          <div id="slide-1">
            <a
              href="https://metal-mindz.herokuapp.com/"
              target="_blank"
              onclick="window.open('','_blank');return false;"
            >
              <img
                src={require("../images/metal-mindz-BeAwe-ss.png")}
                alt="Slide 1"
              />
            </a>
          </div>
          <div id="slide-2">
            <a
              href="https://michaelx626.github.io/Film-Filter/index.html"
              target="_blank"
              onclick="window.open('','_blank');return false;"
            >
              <img src={require("../images/Film Filter.png")} alt="Slide 2" />
            </a>
          </div>
          <div id="slide-3">
            <a
              href="https://tygosley.github.io/city-weather-monitor/"
              target="_blank"
              onclick="window.open('','_blank');return false;"
            >
              <img
                src={require("../images/city-weather-monitor-ss.png")}
                alt="Slide 3"
              />
            </a>
          </div>
          <div id="slide-4">
            <a
              href="https://github.com/TyGosley/workforce-tracker"
              target="_blank"
              onclick="window.open('','_blank');return false;"
            >
              <img
                src={require("../images/workforce-tracker-ss.png")}
                alt="Slide 4"
              />
            </a>
          </div>
          <div id="slide-5">
            <a
              href="https://afternoon-springs-13154.herokuapp.com/"
              target="_blank"
              onclick="window.open('','_blank');return false;"
            >
              <img
                src={require("../images/digitial-pencil-pusher.png")}
                alt="Slide 5"
              />
            </a>
          </div>
          <div id="slide-6">
            <a
              href="https://github.com/TyGosley/team-profile-generator"
              target="_blank"
              onclick="window.open('','_blank');return false;"
            >
              <img
                src={require("../images/team-assembled-profile-gen.png")}
                alt="Slide 6"
              />
            </a>
          </div>
          <div id="slide-7">
            <a
              href="https://tygosley.github.io/code-quiz/"
              target="_blank"
              onclick="window.open('','_blank');return false;"
            >
              <img
                src={require("../images/code-quiz-screenshot.png")}
                alt="Slide 7"
              />
            </a>
          </div>
          <div id="slide-8">
            <a
              href="https://tygosley.github.io/password-generator-js/"
              target="_blank"
              onclick="window.open('','_blank');return false;"
            >
              <img
                src={require("../images/password-generator-ss.png")}
                alt="Slide 8"
              />
            </a>
          </div>
          <div id="slide-9">
            <a
              href="https://peaceful-citadel-63619.herokuapp.com/"
              target="_blank"
              onclick="window.open('','_blank');return false;"
            >
              <img src={require("../images/TTron.png")} alt="Slide 9" />
            </a>
          </div>
          <div id="slide-10">
            <a
              href="https://tygosley.github.io/stark-internship/"
              target="_blank"
              onclick="window.open('','_blank');return false;"
            >
              <img
                src={require("../images/starkindustires-ss.png")}
                alt="Slide 10"
              />
            </a>
          </div>
          <div id="slide-11">
            <a
              href="https://obscure-fortress-82547.herokuapp.com/"
              target="_blank"
              onclick="window.open('','_blank');return false;"
            >
              <img
                src={require("../images/nerdy-byte-beat-ss.png")}
                alt="Slide 11"
              />
            </a>
          </div>
          <div id="slide-12">
            <a
              href="https://github.com/TyGosley/friends-with-API-tions"
              target="_blank"
              onclick="window.open('','_blank');return false;"
            >
              <img src={require("../images/fwAPI.png")} alt="Slide 12" />
            </a>
          </div>
          {/* <div id="slide-13">
          <a href="#" target="_blank" onclick="window.open('','_blank');return false;"><img src={require("../images")} alt="Slide 1" /></a>
          </div>
          <div id="slide-14">
          <a href="#" target="_blank" onclick="window.open('','_blank');return false;"><img src={require("../images")} alt="Slide 1" /></a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
