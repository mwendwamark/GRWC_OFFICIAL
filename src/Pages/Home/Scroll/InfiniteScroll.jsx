import React from "react";
import "./InfiniteScroll.css";
import img1 from "../../../assets/Images/GRWC/GRWC1.webp";
import img2 from "../../../assets/Images/GRWC/GRWC2.webp";
import img3 from "../../../assets/Images/GRWC/GRWC3.webp";
import img4 from "../../../assets/Images/GRWC/GRWC4.webp";
import img5 from "../../../assets/Images/GRWC/GRWC5.webp";
import img6 from "../../../assets/Images/GRWC/GRWC6.webp";
import img7 from "../../../assets/Images/GRWC/GRWC7.webp";
import img8 from "../../../assets/Images/GRWC/GRWC8.webp";

const InfiniteScroll = () => {
  // Sample images - replace with your actual image paths
  // Pattern: landscape, portrait, landscape, portrait...
  const images = [
    {
      src: img1,
      alt: "Community 1",
      orientation: "landscape",
    },
    {
      src: img2,
      alt: "Community 2",
      orientation: "portrait",
    },
    {
      src: img3,
      alt: "Community 3",
      orientation: "landscape",
    },
    {
      src: img4,
      alt: "Community 4",
      orientation: "portrait",
    },
    {
      src: img5,
      alt: "Community 5",
      orientation: "landscape",
    },
    {
      src: img6,
      alt: "Community 6",
      orientation: "portrait",
    },
    {
      src: img7,
      alt: "Community 7",
      orientation: "landscape",
    },
    {
      src: img8,
      alt: "Community 8",
      orientation: "portrait",
    },
  ];

  return (
    <section className="infinite_scroll_section section">
      <div className="infinite_scroll_container">
        <div className="infinite_scroll_headers section_headers">
          <strong className="title_top title_top_purple">Our Community</strong>
          <h2 className="section_title">
            Moments That Define Our Journey Together
          </h2>
        </div>

        <div className="infinite_scroll_wrapper">
          <div className="infinite_scroll_track">
            {/* First set of images */}
            {images.map((image, index) => (
              <div
                key={`original-${index}`}
                className={`infinite_scroll_item ${image.orientation}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {images.map((image, index) => (
              <div
                key={`duplicate-${index}`}
                className={`infinite_scroll_item ${image.orientation}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteScroll;
