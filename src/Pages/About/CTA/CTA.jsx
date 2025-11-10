import React from "react";
import { NavLink } from "react-router-dom";
import CTAImage1 from "../../../assets/Images/AboutImages/InChurch.webp";
import CTAImage2 from "../../../assets/Images/AboutImages/AboutHero.webp";
import "./CTA.css";
const CTA = () => {
  return (
    <div className="about_CTA_section section">
      <div className="about_CTA_images">
        <img
          src={CTAImage1}
          alt="cta section of gospel revival wave church"
          loading="lazy"
          width={400}
          height={400}
          style={{ objectFit: "cover" }}
        />
        <img
          src={CTAImage2}
          alt="cta section of gospel revival wave church"
          loading="lazy"
          width={400}
          height={400}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="about_CTA_container small_container">
        <div className="about_CTA_headers">
          <h1> Planning to visit Gospel Revival Wave Church</h1>
          <span>
            Check out our locations to see one would be the best for you
          </span>
        </div>

        <div className="about_CTA_button">
          <NavLink to="/branches" className="btn btn_purple">
            Our branches
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CTA;
