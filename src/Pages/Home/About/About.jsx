import React from "react";
import "./About.css";
import Img from "../../../assets/Images/AboutImages/AboutHero.webp";
import { NavLink } from "react-router-dom";
import { RiArrowRightLongLine } from "@remixicon/react";

const About = () => {
  return (
    <section className="home_about_section container section">
      <div className="home_about_container grid_container">
        <div className="home_about_image">
          <img src={Img} alt="Bishop Preaching" />
        </div>
        <div className="home_about_contents">
          <div className="home_about_headers section_headers">
            <strong className="title_top title_top_faint">about</strong>
            <h2 className="section_title">Get to know us </h2>
          </div>
          <div className="home_about_description ">
            <div className="home_about_brief width_80">
              <p>
                Gospel Revival Wave Church (GRWC) is an
                Evangelical/Pentecostal/Charismatic Church with its Headquarters
                at Kasarani Estate in the outskirts of Nairobi City, Kenya –
                East Africa. Founded on 29th October 1995 by Bishop Jesse Ireri
                James and his wife Reverend Rose M. Ireri. We are a vibrant
                family of faith celebrating 30 years of victory and God’s
                faithfulness.
              </p>

              <NavLink
                to="/about"
                aria-label="Learn more about Gospel Revival Wave Church"
                className="btn btn_black"
              >
                Learn more
                <RiArrowRightLongLine size={15} />
              </NavLink>
            </div>
            <div className="home_mission_vision">
              <div className="home_mission">
                <h3 className="sub_section_title">Our Mission</h3>
                <p>
                  To see a mighty Revival Wave sweep across the nations, with
                  Kasarani healed and transformed as the springboard of revival.
                </p>
              </div>

              <div className="home_vision">
                <h3 className="sub_section_title">Our Vision</h3>
                <p>
                  Preaching JESUS CHRIST the Desire of All Nations and spreading
                  Revival Fire to the ends of the earth through the Global
                  Revival Wave Movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
