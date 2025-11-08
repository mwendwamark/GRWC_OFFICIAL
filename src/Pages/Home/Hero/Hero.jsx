
import React from "react";
import HomeHeroImg from "../../../assets/Images/HomeImages/BishopPreaching.webp";
import "./Hero.css";
import { NavLink } from "react-router-dom";
import { RiArrowRightUpLongLine } from "@remixicon/react";
import { RiPlayCircleFill } from "@remixicon/react";

const Hero = () => {
  return (
    <section className="home_hero_section">
      <img
        src={HomeHeroImg}
        alt="Bishop James Irreri James Preaching In Gospel Revival Wave Church"
        className="home_hero_bg_img"
        loading="eager"
      />
      <div className="home_hero_overlay">
        <div className="home_hero_headers">
          <h1 className="hero_title home_hero_title">
            Gospel Revival <br /> Wave Church
          </h1>
          <p className="home_hero_subtitle">
            Preaching Jesus Christ the Desire of All Nations
          </p>
        </div>
        <div className="home_hero_invite_text">
          <p>
            Be part of a growing community dedicated to building faith, hope,
            and love. 'And let us consider how to stir up one another to love
            and good works, not neglecting to meet together.' – Hebrews
            10:24-25
          </p>

          <div className="home_hero_buttons">
            <NavLink to="/about" className="btn btn_purple">
              Visit Us <RiArrowRightUpLongLine size={15}/>
            </NavLink>

            <NavLink to="/sermons" className="btn btn_outline">
              Watch Sermons <RiPlayCircleFill size={15}/>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;