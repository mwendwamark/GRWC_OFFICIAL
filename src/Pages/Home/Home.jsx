import React from "react";
import Hero from "./Hero/Hero"
import Navbar from "../../Components/Navbar/Navbar";
import Welcome from "./Welcome/Welcome";

const Home = () => {
  return (
    <>
      <div className="home_page_container">
        <Navbar/>
        <Hero/>
        <Welcome/>
      </div>
    </>
  );
};

export default Home;
