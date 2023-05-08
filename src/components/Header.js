import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <div>
      <section>
        <header className="headerBar">
          <div>
            <h1>Be Awesome Productions</h1>
          </div>
          <Nav></Nav>
        </header>
      </section>
      <section className="hero">
        {/* <div> */}
          <h1>Welcome to the Portfolio of Tyler Gosley</h1>
          <p>
            Greetings, esteemed guests! Welcome to my React Portfolio, where
            I've assembled my latest and greatest web development creations for
            your viewing pleasure. Now, full disclosure: I'm still learning the
            ropes of this coding gig, but I promise to bring my A-game and eager
            attitude to every project. Think of me like a superhero in training,
            eager to leap tall coding challenges in a single bound and harness
            the power of React like a seasoned pro. So buckle up, because this
            portfolio is about to take you on a wild ride that's more exciting
            than Batman's utility belt and more impressive than Iron Man's suit.
            And if you feel like leaving a comment, don't hold back! I'm always
            looking for feedback and ways to improve my skills faster than The
            Flash can run a marathon.
          </p>
        {/* </div> */}
      </section>
    </div>
  );
}

export default Header;
