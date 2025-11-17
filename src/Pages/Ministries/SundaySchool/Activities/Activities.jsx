import React from "react";
import Img from "../../../../assets/Images/HomeImages/SundaySchool3.webp";
import "./Activities.css";

const Activities = () => {
  return (
    <div className="section men_activities">
      <div className="men_activities_container container">
        <div className="men_activities_contents">
          <div className="men_activities_titles section_headers">
            <h2 className="section_title">What is Sunday School Ministry?</h2>
            <p>
              Sunday School Ministry at Gospel Revial Wave Church partners with
              parents to teach kids to know and love God with their hearts,
              souls, minds, and strength. God has gifted parents to be the
              primary spiritual leaders of their households, and we honor that
              by shaping all offerings around our seven core values: safety,
              parent trust, leadership development, gospel-centered learning,
              small groups, church integration, and parent discipleship.
            </p>

            <p>
              Through our Sunday School programs, we hope to demonstrate and teach
              kids about the importance of studying the Bible and spending time
              in community with other kids who follow Jesus.
            </p>
          </div>
        </div>
        <div className="men_activities_images">
          <img src={Img} alt="Gospel revival wave kids" />
          <img src={Img} alt="Gospel revival wave Kids" />
        </div>
      </div>
    </div>
  );
};

export default Activities;
