import React, { useEffect, useRef, useState } from "react";
import "./Expectation.css";
import Img1 from "../../../assets/Images/GRWC/GRWC4.webp";
import Img2 from "../../../assets/Images/HomeImages/BishopPreaching.webp";
import Img3 from "../../../assets/Images/HomeImages/Choir.webp";
import Img4 from "../../../assets/Images/HomeImages/BishopPreaching.webp";
import Img5 from "../../../assets/Images/HomeImages/SundaySchool3.webp";
import { NavLink } from "react-router-dom";

const Expectation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Only activate intersection observer on desktop
    if (!isDesktop) return;

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [isDesktop]);

  const expectations = [
    {
      label: "you belong here",
      title: "A Warm Welcome",
      description:
        "When you step into our church, we hope you feel at home. We may all come from different backgrounds or life stages, but Sundays are a safe space to arrive as you are and be welcomed in like family.",
      image: Img1,
    },
    {
      label: "Word from God",
      title: "A Sermon",
      description:
        "Our worship services revolve around Jesus. The Son of God came to share good news with His people 2,000 years ago, and He's still speaking today through His Word! Each week, you'll hear someone preach on a passage from the Bible that's meant to change us from the inside out.",
      image: Img2,
      button: { text: "Our sermons", link: "/sermons" },
    },
    {
      label: "praise and worship",
      title: "A Time of Worship",
      description:
        "When God's Word is preached, the only proper response is worship. Every day, we worship God through our actions, time, and resources. But on Sundays, we get to worship Him with one another through song. Our Worship Teams lead in worship each week, praising God for what He's done and asking Him to do more within us.",
      image: Img3,
    },
    {
      label: "Interact",
      title: "A Place to Connect With Others",
      description:
        "You were made to be known by others. When Jesus calls His disciples to follow Him, He gives the gift of community. Sundays are more than a weekly message; they're an opportunity to meet and begin to grow in community with those around you. You'll find opportunities on Sundays to take your next steps in getting involved with our church!",
      image: Img4,
    },
    {
      label: "all ages",
      title: "A Place For Families",
      description:
        "The church is a place for all ages and life stages. Whether young or old, your spiritual formation matters to us. Every Sunday, we have safe spaces for kids and students to experience Jesus and community together.",
      image: Img5,
      buttons: [
        { text: "Sunday School", link: "/ministries/kids" },
        {
          text: "New Believers",
          link: "/ministries/new_believers",
          outline: true,
        },
      ],
    },
  ];

  return (
    <div className="expectation_section section" id="expectations">
      <div className="expectation_container container">
        <div className="section_headers expectation_main_header">
          <h1 className="section_title">What to expect on Sundays</h1>
        </div>

        <div className="expectation_wrapper">
          <div className="expectation_contents_wrapper">
            {expectations.map((item, index) => (
              <div
                key={index}
                className="expectation_item"
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
              >
                <div className="expectation_contents">
                  <div className="section_headers">
                    <span className="title_top title_top_faint">
                      {item.label}
                    </span>
                    <h2 className="section_title">{item.title}</h2>
                  </div>

                  <div className="expectation_description">
                    <p>{item.description}</p>

                    {item.button && (
                      <NavLink
                        className="btn btn_black"
                        to={item.button.link}
                        style={{ width: "fit-content" }}
                      >
                        {item.button.text}
                      </NavLink>
                    )}

                    {item.buttons && (
                      <div className="expectation_btns">
                        {item.buttons.map((btn, btnIndex) => (
                          <NavLink
                            key={btnIndex}
                            className={`btn ${
                              btn.outline ? "btn_black_outline" : "btn_black"
                            }`}
                            to={btn.link}
                          >
                            {btn.text}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Show images inline on mobile/tablet – content above image */}
                {!isDesktop && (
                  <div className="expectation_img_inline">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sticky images only on desktop */}
          {isDesktop && (
            <div className="expectation_images_sticky">
              {expectations.map((item, index) => (
                <div
                  key={index}
                  className={`expectation_img ${
                    activeIndex === index ? "expectation_img--active" : ""
                  }`}
                >
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Expectation;
