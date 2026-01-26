import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Welcome from "./Welcome/Welcome";
import About from "./About/About";
import Services from "./Services/Services";
import Contacts from "./Contacts/Contacts";
import InfiniteScroll from "./Scroll/InfiniteScroll";
import CTA from "./CTA/CTA";

const Home = () => {
  return (
    <>
      <title>
        Gospel Revival Wave Church | Faith, Community & Transformation
      </title>
      <meta
        name="description"
        content="Welcome to Gospel Revival Wave Church. Join our community of believers for powerful worship, transformative sermons, and meaningful fellowship. Experience God's love with us."
      />
      <meta
        property="og:title"
        content="Gospel Revival Wave Church | Faith, Community & Transformation"
      />
      <meta
        property="og:description"
        content="Join our community of believers for powerful worship, transformative sermons, and meaningful fellowship."
      />
      <meta property="og:type" content="website" />
      <div className="home_page_container">
        <Navbar />
        <Hero />
        <Welcome />
        <About />
        <Services />
        <Contacts />
        <InfiniteScroll />
        <CTA />
      </div>
    </>
  );
};

export default Home;
