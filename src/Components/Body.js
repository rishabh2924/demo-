// src/components/Body.js
import React from "react";
import "./Body.css";
import avatar from "../assets/avatar.svg";
import play from "../assets/play.svg";
import arrow from "../assets/arrow.svg";

function Body() {
  return (
    <section className="body-with-image">
      <div className="content">
        <div className="text">
          <h2>
            Unlock <span id="your">your</span> Online Growth Potential <span id="yes"><button>Yes</button></span>
          </h2>
          <div className="buttons">
            <button className="btn">Our Product</button>
            <button className="btn"><img src={play} alt="" /></button>
          </div>
        </div>
        <div className="image">
          <img src={avatar} alt="Sample" />
        </div>
      </div>
      
      <div className="container">
        <div className="inner-container">
      <div className="rectangular-box">
        <div className="section"><img src={arrow} alt="" /></div>
        <div className="section first">Drive your money to work smarter then others</div>
        <div className="section">A safe and secure investment needs fuided aproach with real time analytics and risk analysis , we can help yu to catch all at once</div>
      </div>
      </div>
      </div>
      
    </section>
  );
}

export default Body;
