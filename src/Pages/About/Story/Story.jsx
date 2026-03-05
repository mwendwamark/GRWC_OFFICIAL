import React from "react";
import "./Story.css";

const Story = () => {
  return (
    <div className="about_story_section section">
      <div className="about_story_container small_container">
        <div className="about_story_headers section_headers">
          <strong className="title_top title_top_faint">our story</strong>
          <h2 className="section_title">
            The Story of Gospel Revival Wave Church
          </h2>
        </div>
        <div className="about_story_items">
          <div className="about_story_item">
            <h3 className="sub_section_title">How it started </h3>
            <p>
              In 1990 we held crusades in Kwangula and Muirigo Estates after an
              invitation from the late Sammy Aoko. Five years later, on 29th
              October 1995, Bishop Jesse Ireri James and Pastor Rose M. Ireri
              launched the church (then called Jesus Glory Sanctuary) in a
              rented shop at Kwangula Estate with over 50 people. Twelve
              committed as members the same day. That weekend, while praying and
              fasting in Karura Forest, the Lord spoke clearly: Kasarani was
              pleasant but “miscarrying” many projects and dreams. God sent us
              as the salt to heal the land (2 Kings 2:19-22). We began with
              nothing but faith, experience from two large fellowships, and a
              clear mandate to preach JESUS CHRIST the Desire of All Nations.
            </p>
          </div>

          <div className="about_story_item">
            <h3 className="sub_section_title">How we've grown </h3>
            <p>
              By 1998 we leased land near Haco Industry and built our first
              church building. While Bishop was away in The Netherlands on
              scholarship, the Lord gave him the Revival Wave vision that
              birthed our global mandate. We returned stronger, doubled in size,
              and registered as Gospel Revival Wave Church. In 2002 we bought
              this land, built a permanent sanctuary and moved in. Despite major
              land challenges in 2003 (including a government announcement to
              demolish everything), prayer and God’s intervention carried us
              through. In 2014 we began constructing our five-storey Cathedral.
              Today we have raised strong ministries, planted 30 branches across
              Kenya, and become a respected voice in Kasarani through the
              interdenominational fellowship we founded in 1996.
            </p>
          </div>
          <div className="about_story_item">
            <h3 className="sub_section_title">Where we're going </h3>
            <p>
              We are fully committed to our two-fold mandate:{" "}
              <b>
                {" "}
                <i>
                  {" "}
                  Healing Kasarani
                </i>
              </b>{" "}
              – Saturating the area with the Gospel and seeing mega churches
              established.{" "}
              <b>
                {" "}
                <i>
                  {" "}
                    Stirring and Spreading the Revival Fire to the Nations
                </i>
              </b>{" "}
              – Holding powerful missions, conferences, planting more churches,
              and raising Revival Champions through a planned Revival Training
              Institute. We will also expand community work, touch lives
              spiritually and physically, and continue as a church that takes
              great challenges and goes for them (Philippians 1:6; Zechariah
              4:6-9).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
