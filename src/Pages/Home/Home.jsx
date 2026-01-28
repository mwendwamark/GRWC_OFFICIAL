import React from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>
          Gospel Revival Wave Church | Churches in Nairobi & Kasarani
        </title>
        <meta
          name="description"
          content="Welcome to Gospel Revival Wave Church, a vibrant community in Kasarani, Nairobi. Join us for powerful worship, transformative sermons, and meaningful fellowship. One of the best churches around Nairobi."
        />
        <meta
          name="keywords"
          content="Churches around Nairobi, Churches around Kasarani, Gospel Revival Wave Church, Church in Nairobi, Church in Kasarani, Worship in Nairobi, Pentecostal Churches Nairobi"
        />
        <meta
          property="og:title"
          content="Gospel Revival Wave Church | Churches in Nairobi & Kasarani"
        />
        <meta
          property="og:description"
          content="Join Gospel Revival Wave Church in Kasarani, Nairobi. A community of believers for powerful worship and transformative sermons."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Church",
              "name": "Gospel Revival Wave Church",
              "url": "https://grwc.vercel.app/",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kasarani",
                "addressRegion": "Nairobi",
                "addressCountry": "KE"
              },
              "description": "Welcome to Gospel Revival Wave Church. Join our community of believers for powerful worship, transformative sermons, and meaningful fellowship."
            }
          `}
        </script>
      </Helmet>
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
