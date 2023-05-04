import React from "react";
import Nav from "./Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

    return (
      <div>
        <section className="hero">
        <header>
          <div>
    <h1>Be Awesome Productions</h1>
    <h3>🛠️ 🧰 🚧 Under Construction:  Please excuse the mess! 🚧 🧰 🛠️</h3>
    </div>
    <Nav
      currentTab={currentTab}
      handleTabChange={handleTabChange}
    ></Nav>
    </header>
    {/* <div className="profie-photo">
      <img src={require("../images/visionary.jpg")} alt="Tyler overlooking NYC" />
    </div> */}
    </section>
  </div>
    )
}





export default Header;