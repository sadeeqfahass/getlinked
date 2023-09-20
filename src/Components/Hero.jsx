import React from "react";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="nav">
          <div className="left">
            <h3 className="logo-text">
              get<span>linked</span>
            </h3>
          </div>
          <div className="right">
            <ul>
              <NavLink to="/">Timeline</NavLink>
              <NavLink to="/">Overview</NavLink>
              <NavLink to="/">FAQs</NavLink>
              <NavLink to="/">Contact</NavLink>
            </ul>
            <NavLink className="btn">Register</NavLink>
          </div>
        </div>
        <hr />
        <section className="header">
          <img className="flare" src="Purple-Lens-Flare.png" alt="" />
          <p className="igniting">
            Igniting a Revolution in <span>&nbsp; HR Innovation</span>
          </p>
          <div className="container">
            <div className="right">
              <img className="star-white" src="star.png" alt="" />
              <img className="star-grey first" src="star.png" alt="" />
              <img className="star-grey second" src="star.png" alt="" />
              <h1 className="main-heading">
                <span>getlinked Tech</span>
                <br />
                <span className="images-con">
                  Hackathon <span>1.0</span>
                  <img src="chain.png" alt="" />
                  <img src="bang.png" alt="" />
                </span>
                <img className="creative" src="Creative.png" alt="" />
              </h1>
              <p className="sub-heading">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <NavLink className="btn">Register</NavLink>
              <div className="timer">
                <h1>
                  00<span className="subscript">H</span>
                </h1>
                <h1>
                  00<span className="subscript">M</span>
                </h1>
                <h1>
                  00<span className="subscript">S</span>
                </h1>
              </div>
            </div>
            <div className="left">
              <img className="man" src="man.png" alt="" />
              <img className="bubble" src="bubble.png" alt="" />
              <img className="metrix" src="metrix1.png" alt="" />
              <img className="flare" src="Purple-Lens-Flare.png" alt="" />
            </div>
          </div>
        </section>
      </section>
      <hr />
    </>
  );
}

export default Hero;
