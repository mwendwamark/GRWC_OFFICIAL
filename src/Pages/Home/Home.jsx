import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Welcome from "./Welcome/Welcome";
import About from "./About/About";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <div className="home_page_container">
        <Navbar />
        <Hero />
        <Welcome />
        <About />
        <Services />
      </div>
    </>
  );
};

export default Home;
