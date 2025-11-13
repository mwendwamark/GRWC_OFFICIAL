import React from "react";
import "./Hero.css"
import HomeHeroImg from "../../../assets/Images/HomeImages/BishopPreaching.webp";
const Hero = () => {
  return (
    <section className="visit_hero_section">
      <img
        src={HomeHeroImg}
        alt="Bishop James Irreri James Preaching In Gospel Revival Wave Church"
        className="visit_home_bg_img"
        loading="eager"
      />

      <div className="visit_hero_overlay">
        <div className="visit_hero_headers">
          <h1 className="hero_title visit_hero_title">Join us this Sunday</h1>
        </div>

        <div className="visit_us_btns">
          <a className="btn btn_white" href="#locations">Our Branches</a>
          <a className="btn btn_white_outline" href="#expectations">What to Expect</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
