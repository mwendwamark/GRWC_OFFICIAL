import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Expectation from "./Expectation/Expectation";

const Visit = () => {
  return (
    <div className="visit_page">
      <Navbar />
      <Hero />
      <Expectation />
    </div>
  );
};

export default Visit;
