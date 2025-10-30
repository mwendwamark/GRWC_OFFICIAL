import React from "react";
import "./InfiniteScroll.css";

const InfiniteScroll = () => {
  // Sample images - replace with your actual image paths
  // Pattern: landscape, portrait, landscape, portrait...
  const images = [
    {
      src: "https://images.unsplash.com/photo-1526746323784-6bc814d79273?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
      alt: "Community 1",
      orientation: "landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1653133672754-82025e7e9074?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
      alt: "Community 2",
      orientation: "portrait",
    },
    {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
      alt: "Community 3",
      orientation: "landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
      alt: "Community 4",
      orientation: "portrait",
    },
    {
      src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
      alt: "Community 5",
      orientation: "landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
      alt: "Community 6",
      orientation: "portrait",
    },
    {
      src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
      alt: "Community 7",
      orientation: "landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
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
