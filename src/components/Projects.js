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
        <div className="slides">
          <div id="slide-1">
            <a href="#" target="_blank" onclick="window.open('','_blank');return false;"><img src={require("../images/starkindustires-ss.png")} alt="Slide 1" /></a>
          </div>
          <div id="slide-2">
            <a href="#" target="_blank" onclick="window.open('','_blank');return false;"><img src="./assets/images/city-weather-monitor-ss.png" alt="Slide 2" /></a>
          </div>
          <div id="slide-3">
            <a href="#" target="_blank" onclick="window.open('','_blank');return false;"><img src="./assets/images/nerdy-byte-beat-ss.png" alt="Slide 3" /></a>
          </div>
          <div id="slide-4">
            <a href="#" target="_blank" onclick="window.open('','_blank');return false;"><img src="./assets/images/team-assembled-profile-gen.png" alt="Slide 4" /></a>
          </div>
          <div id="slide-5">
            <a href="#" target="_blank" onclick="window.open('','_blank');return false;"><img src="image-5.jpg" alt="Slide 5" /></a>
          </div>
          <div id="slide-6">
            <a href="#" target="_blank" onclick="window.open('','_blank');return false;"><img src="image-6.jpg" alt="Slide 6" /></a>
          </div>
          <div id="slide-7">
            <a href="#" target="_blank" onclick="window.open('','_blank');return false;"><img src="image-7.jpg" alt="Slide 7" /></a>
          </div>
          <div id="slide-8">
            <a href="#" target="_blank" onclick="window.open('','_blank');return false;"><img src="image-8.jpg" alt="Slide 8" /></a>
          </div>
          <div id="slide-9">
            <a href="#" target="_blank" onclick="window.open('','_blank');return false;"><img src="image-9.jpg" alt="Slide 9" /></a>
          </div>
          <div id="slide-10">
            <a href="#" target="_blank" onclick="window.open('','_blank');return false;"><img src="image-10.jpg" alt="Slide 10" /></a>
          </div>
          <div id="slide-11">
            <a href="#" target="_blank" onclick="window.open('','_blank');return false;"><img src="image-11.jpg" alt="Slide 11" /></a>
          </div>
        </div></div></section>
    )
}

export default Projects;