import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Welcome from "./Welcome/Welcome";
import About from "./About/About";
import Services from "./Services/Services";
import Contacts from "./Contacts/Contacts";
import InfiniteScroll from "./Scroll/InfiniteScroll";

const Home = () => {
  return (
    <>
      <div className="home_page_container">
        <Navbar />
        <Hero />
        <Welcome />
        <About />
        <Services />
        <Contacts />
        <InfiniteScroll />
      </div>
    </>
  );
};

export default Home;
