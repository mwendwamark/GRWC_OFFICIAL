import React from "react";
import "./Beliefs.css";

const Beliefs = () => {
  return (
    <div className="about_page_beliefs_section section">
      <div className="beliefs_container container">
        <div className="about_beliefs_headers section_headers">
          <strong className="title_top title_top_faint">WHAT WE BELIEVE</strong>
          <h2 className="section_title">Our Foundational Beliefs</h2>
        </div>

        {/* Our Convictions Section */}
        <div className="beliefs_contents">
          <div className="beliefs_title_wrapper">
            <h2 className="sub_section_title">Our Convictions</h2>
          </div>

          <div className="beliefs_lists_wrapper">
            <ul className="beliefs_list">
              <li>We are an Evangelical, Pentecostal and Charismatic Church</li>
              <li>We believe in the full authority of Scripture and the power of the Holy Spirit today</li>
              <li>Called to preach JESUS CHRIST the Desire of All Nations (Haggai 2:7)</li>
              <li>Committed to spreading Revival Fire to the nations</li>
            </ul>

            <ul className="beliefs_list">
              <li>Sent to heal Kasarani as the salt Elisha used to heal Jericho (2 Kings 2:19-22)</li>
              <li>We are “GO GETTERS” – we take great challenges through faith in God who strengthens us</li>
              <li>Pure religion is to care for orphans, widows and the needy (James 1:27)</li>
              <li>We have spiritual authority to heal and transform communities</li>
            </ul>
          </div>
        </div>

        {/* Affirmation of Faith Section */}
        <div className="beliefs_contents">
          <div className="beliefs_title_wrapper">
            <h2 className="sub_section_title">Affirmation of Faith</h2>
          </div>

          <div className="beliefs_lists_wrapper">
            <ul className="beliefs_list">
              <li>
                “There has never been the slightest doubt in my mind that the God who started this great work in you would keep at it and bring it to a flourishing finish…” (Philippians 1:6 MSG)
              </li>
              <li>
                “Not by might nor by power, but by My Spirit,” says the Lord of hosts (Zechariah 4:6)
              </li>
              <li>
                We commit our works to the Lord, and our thoughts will be established (Proverbs 16:3)
              </li>
            </ul>

            <ul className="beliefs_list">
              <li>Surely God is in this place</li>
              <li>We believe God has given us a voice and spiritual authority in Kasarani to shape its spiritual, social and physical development</li>
              <li>We are called to raise Revival Champions and be the springboard of Revival in Kenya and the nations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;