import React from "react";
import "./Beliefs.css";

const Beliefs = () => {
  return (
    <div className="about_page_beliefs_section section">
      <div className="beliefs_container small_container">
        <div className="about_beliefs_headers section_headers">
          <strong className="title_top title_top_faint">What we believe</strong>
          <h2 className="section_title">Our Foundational Beliefs</h2>
        </div>

        <div className="beliefs_contents">
          <h2 className="sub_section_title">Our Convictions</h2>
          <ul>
            <li>Ruled by God's Word</li>
            <li>Christ-Centered in Focus</li>
            <li>Empowered by the Holy Spirit</li>
            <li>Reliant on Prayer</li>
          </ul>

          <ul>
            <li>Committed to Covenant Community</li>
            <li>Gospel-Saturated in Discipleship</li>
            <li>Devoted to Equipping the Saints</li>
            <li>Relentless in Mission</li>
          </ul>
        </div>

        <div className="beliefs_contents">
          <h2 className="sub_section_title">Affirmation of Faith</h2>
          <ul>
            <li>The Bible is the Word of God, fully inspired and without error in the original manuscripts.</li>
            <li>There is one true, good, and living God who eternally exists in three persons—the Father, Son, and Holy Spirit.</li>
            <li>God created men and women in His image and created all things for His glory.</li>
            <li>All have sinned and rebelled against God.</li>
            <li>Jesus came to earth, lived a perfect life, and died an atoning death—conquering sin, Satan, and death by His resurrection.</li>
          </ul>

          <ul>
            <li>God alone is the Author of Salvation.</li>
            <li>The Holy Spirit gives gifts to those who are in Christ.</li>
            <li>The church consists of all who have trusted Jesus for their eternal salvation.</li>
            <li>Heaven and hell are real places.</li>
            <li>Jesus Christ will one day return to establish His kingdom.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;