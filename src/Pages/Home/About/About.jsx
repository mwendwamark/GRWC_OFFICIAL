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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                odio optio nihil nisi neque esse laboriosam voluptatem unde
                officiis modi facere cupiditate consequatur distinctio magnam,
                at ducimus autem veritatis voluptatibus. Quas, fugit cum!
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero quae, sapiente sequi fugit nisi sint obcaecati. Iusto
                  repudiandae rerum esse ad nam minima consectetur.
                </p>
              </div>

              <div className="home_vision">
                <h3 className="sub_section_title">Our Vision</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora, vel? Quam veritatis et minima nemo eaque voluptas
                  tempore sequi, corporis dolorem commodi quibusdam repudiandae.
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
