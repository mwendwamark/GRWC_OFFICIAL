import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Expectation from "./Expectation/Expectation";
import Locations from "./Locations/Locations";

const Visit = () => {
  return (
    <div className="visit_page">
      <Navbar />
      <Hero />
      <Expectation />
      <Locations />
    </div>
  );
};

export default Visit;
