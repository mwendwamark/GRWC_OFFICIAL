import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";
import { RiBox3Line } from "@remixicon/react";
import Img from "../../../../assets/Images/HomeImages/SundaySchool3.webp";

const Hero = () => {
  return (
    <div className="ministry_hero below_navbar">
      <div className="mens_ministry_hero_container container">
        <div className="mens_hero_contents">
          <RiBox3Line size={120} className="mens_hero_icon" widths={1}/>
          <h1 className="hero_title_2">Sunday School <br /> Ministry</h1>
          <a href="#mens_faqs" className="btn btn_black_outline" style={{width:"fit-content"}}>FAQs</a>
        </div>

        <div className="mens_ministry_image">
          <img src={Img} alt="Revival wave men" width={500} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
