import React from "react";
import Img from "../../../../assets/Images/AboutImages/BishopPreaching.webp";
import "./Activities.css";
import "../../ministries-shared.css"

const Activities = () => {
  return (
    <div className="section men_activities">
      <div className="ministries_activities_container container">
        <div className="ministries_activities_contents">
          <div className="ministries_activities_titles section_headers">
            <h2 className="section_title">What We Do</h2>
            <p>
              We create spaces where men can proactively use the gifts,
              relationships, and opportunities they have to make disciples for
              God’s glory. Through events, groups, and retreats, we equip men to
              be faithful in the places and seasons God has placed them, both
              now and in the future.
            </p>

            <p>
              Men’s Ministry at Gospel Revival connects, equips, and mobilizes
              men for the work of ministry and the glory of Jesus
            </p>
          </div>
        </div>
        <div className="ministries_activities_images">
          <img src={Img} alt="Gospel" />
          <img src={Img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Activities;
