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
