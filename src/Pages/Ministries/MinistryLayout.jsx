import React, { useState } from "react";
import { Helmet } from "react-helmet";
import SecondaryNavbar from "../../Components/SecondaryNavbar/SecondaryNavbar";
import { RiCloseLine } from "@remixicon/react";
import "./ministries-shared.css";

const MinistryLayout = ({ data }) => {
  const { meta, hero, subHero, activities, faq } = data;
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const HeroSection = () => (
    <div className="ministries_hero below_navbar">
      <div className="ministries_hero_container container">
        <div className="ministries_hero_contents">
          <hero.icon
            size={120}
            className={`ministries_hero_icon ${hero.className || ""}`}
          />
          <h1 className="hero_title_2">{hero.title}</h1>
          <a
            href={hero.faqLink}
            className="btn btn_black_outline"
            style={{ width: "fit-content" }}
          >
            FAQs
          </a>
        </div>

        <div className="ministries_hero_image">
          <img src={hero.image} alt={hero.imageAlt} width={500} />
        </div>
      </div>
    </div>
  );

  const SubHeroSection = () => (
    <div className={`ministries_subhero section ${subHero.className || ""}`}>
      <div className="ministries_subhero_container small_container">
        <strong className="title_top title_top_white">
          {subHero.titleTop}
        </strong>
        <h2 className="section_title ministries_subhero_title">
          {subHero.title}
        </h2>
      </div>
    </div>
  );

  const ActivitiesSection = () => (
    <div className={`section ${activities.className || ""}`}>
      <div className="ministries_activities_container container">
        <div className="ministries_activities_contents">
          <div className="ministries_activities_titles section_headers">
            <h2 className="section_title">{activities.title}</h2>
            {activities.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>
        <div className="ministries_activities_images">
          {activities.images.map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>
      </div>
    </div>
  );

  const FAQSection = () => (
    <div
      className="ministries_faq_section section"
      id={faq.id.replace("#", "")}
    >
      <div className="ministries_faq_container container">
        <div className="ministries_faq_wrapper">
          <div className="ministries_faq_header">
            <h2 className="section_title">Frequently Asked Questions</h2>
          </div>

          <div className="ministries_faq_list">
            {faq.questions.map((item, index) => (
              <div
                key={index}
                className={`ministries_faq_item ${
                  activeFaqIndex === index ? "ministries_faq_item--active" : ""
                }`}
              >
                <button
                  className="ministries_faq_question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeFaqIndex === index}
                >
                  <span className="ministries_faq_question_text">
                    {item.question}
                  </span>
                  <RiCloseLine
                    size={28}
                    className={`ministries_faq_icon ${
                      activeFaqIndex === index
                        ? "ministries_faq_icon--active"
                        : ""
                    }`}
                  />
                </button>

                <div
                  className={`ministries_faq_answer ${
                    activeFaqIndex === index
                      ? "ministries_faq_answer--active"
                      : ""
                  }`}
                >
                  <div className="ministries_faq_answer_content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>{hero.title} | Gospel Revival Wave Church</title>
        <meta
          name="description"
          content={`${subHero.title} - ${hero.title} at Gospel Revival Wave Church.`}
        />
        <meta
          property="og:title"
          content={`${hero.title} | Gospel Revival Wave Church`}
        />
        <meta property="og:description" content={subHero.title} />
        <meta property="og:type" content="website" />
      </Helmet>
      <SecondaryNavbar />
      <div className={meta.className}>
        <HeroSection />
        <SubHeroSection />
        <ActivitiesSection />
        <FAQSection />
      </div>
    </>
  );
};

export default MinistryLayout;
