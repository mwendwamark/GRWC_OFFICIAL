import React from "react";
import AboutHero from "./Hero/AboutHero";
import Established from "./Established/Established";
import Story from "./Story/Story";
import Stats from "./Stats/Stats";
import Beliefs from "./Beliefs/Beliefs";
import Navbar from "../../Components/Navbar/Navbar";
import Team from "./Team/Team";
import CTA from "./CTA/CTA";

const About = () => {
  return (
    <div>
      <title>About Us | Gospel Revival Wave Church</title>
      <meta
        name="description"
        content="Learn about Gospel Revival Wave Church - our history, beliefs, mission, and the team behind our ministry. Discover how we're transforming lives through faith."
      />
      <meta
        property="og:title"
        content="About Us | Gospel Revival Wave Church"
      />
      <meta
        property="og:description"
        content="Learn about Gospel Revival Wave Church - our history, beliefs, mission, and the team behind our ministry."
      />
      <meta property="og:type" content="website" />
      <Navbar />
      <AboutHero />
      <Established />
      <Story />
      <Stats />
      <Beliefs />
      <Team />
      <CTA />
    </div>
  );
};

export default About;
