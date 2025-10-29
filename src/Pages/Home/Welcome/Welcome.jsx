import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="home_welcome_section section container">
      <div className="home_welcome_container grid_container">
        <div className="home_welcome_headers section_headers width_80">
          <strong className="title_top title_top_faint"> welcome</strong>
          <h2 className="section_title home_welcome_title">
            Welcome to <span> Gospel Revival Wave Church</span> where everyone
            is valuable
          </h2>
        </div>

        <div className="home_welcome_contents width_80">
          <p>
            Are you new to faith? Have you been following Jesus for a while? Or
            are you somewhere in between? Come learn about Jesus alongside us!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
