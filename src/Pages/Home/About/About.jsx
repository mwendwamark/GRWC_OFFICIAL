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
                Gospel Revival Wave Church is a spirit-filled ministry located
                in the heart of Kasarani, Nairobi. We are dedicated to spreading
                the Gospel of Jesus Christ and empowering believers to live
                victorious lives. Whether you are looking for a church in
                Nairobi or a supportive community in Kasarani, you are welcome
                here.
              </p>

              <NavLink
                to="/about"
                aria-label="Go to about page"
                className="btn btn_black"
              >
                {" "}
                read more <RiArrowRightLongLine size={15} />
              </NavLink>
            </div>
            <div className="home_mission_vision">
              <div className="home_mission">
                <h3 className="sub_section_title">Our Mission</h3>
                <p>
                  To reach the unreached in Nairobi and beyond with the
                  life-changing message of the Gospel, discipling them to become
                  mature followers of Christ who impact their world.
                </p>
              </div>

              <div className="home_vision">
                <h3 className="sub_section_title">Our Vision</h3>
                <p>
                  To be a beacon of hope and revival in Kasarani, raising a
                  generation of believers who walk in the power of the Holy
                  Spirit and demonstrate God's love to the nations.
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
