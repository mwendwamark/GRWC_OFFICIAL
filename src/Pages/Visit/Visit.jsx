import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Expectation from "./Expectation/Expectation";
import Locations from "./Locations/Locations";

const Visit = () => {
  return (
    <div className="visit_page">
      <title>Visit Us | Gospel Revival Wave Church</title>
      <meta
        name="description"
        content="Plan your visit to Gospel Revival Wave Church. Find our locations, service times, and learn what to expect when you join us for worship."
      />
      <meta
        property="og:title"
        content="Visit Us | Gospel Revival Wave Church"
      />
      <meta
        property="og:description"
        content="Plan your visit to Gospel Revival Wave Church. Find our locations and service times."
      />
      <meta property="og:type" content="website" />
      <Navbar />
      <Hero />
      <Expectation />
      <Locations />
    </div>
  );
};

export default Visit;
