import SecondaryNavbar from "../../../Components/SecondaryNavbar/SecondaryNavbar";
import Hero from "./Hero/Hero";
import SubHero from "./SubHero/SubHero";
import Activities from "./Activities/Activities";
import FAQ from "./FAQS/FAQS";


const Mens = () => {
  return (
    <>
      <SecondaryNavbar />
      <div className="mens_ministry_page">
        <Hero />
        <SubHero />
        <Activities />
        <FAQ />
      </div>
    </>
  );
};

export default Mens;
