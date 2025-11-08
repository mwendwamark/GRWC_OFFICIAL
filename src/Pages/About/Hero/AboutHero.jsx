import aboutHeroImg from "../../../assets/Images/AboutImages/AboutHero.webp";
import "./AboutHero.css";
import { NavLink } from "react-router-dom";
import { RiArrowRightUpLongLine } from "@remixicon/react";
import { RiPlayCircleFill } from "@remixicon/react";

const AboutHero = () => {
  return (
    <section className="about_hero_section">
      <img
        src={aboutHeroImg}
        alt="Bishop James Irreri James Preaching In Gospel Revival Wave Church"
        className="about_hero_bg_img"
        loading="eager"
      />
      <div className="about_hero_overlay">
        <div className="about_hero_headers">
          <h1 className="hero_title about_hero_title">
            About Gospel Revival <br /> Wave Church
          </h1>
        </div>
        <div className="about_hero_invite_text">
          <div className="about_hero_buttons">
            <NavLink to="/about" className="btn btn_white">
              Our Team <RiArrowRightUpLongLine size={15} />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
