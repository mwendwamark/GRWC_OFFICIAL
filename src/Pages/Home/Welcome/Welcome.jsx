import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="home_welcome_section section container">
      <div className="home_welcome_container">
        <div className="home_welcome_headers section_headers">
          <strong className="title_top title_top_faint"> welcome</strong>
          <h2 className="section_title home_welcome_title">
            Welcome to <span> Gospel Revival Wave Church</span> where everyone
            is valuable
          </h2>
        </div>

        <div className="home_welcome_contents">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
            repudiandae, pariatur quidem et ratione corrupti excepturi adipisci
            rem officia aliquid. Modi quam eum ex maiores nobis perferendis odit
            voluptatem consequatur!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
