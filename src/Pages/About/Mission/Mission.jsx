import React, { useState } from "react";
import "./Mission.css";

const Mission = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section className="about_mission_vision_section">
      <div className="small_container">
        <div className="section_headers">
          <span className="title_top title_top_purple">OUR PURPOSE</span>
          <h2 className="section_title">
            The Mission &amp; Vision of
            <br />
            Gospel Revival Wave Church
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="about_mission_vision_tabs">
          <button
            onClick={() => setActiveTab("mission")}
            className={`about_mission_vision_tab ${
              activeTab === "mission" ? "about_mission_vision_tab_active" : ""
            }`}
          >
            Mission
          </button>

          <button
            onClick={() => setActiveTab("vision")}
            className={`about_mission_vision_tab ${
              activeTab === "vision" ? "about_mission_vision_tab_active" : ""
            }`}
          >
            Vision
          </button>
        </div>

        {/* Content Area */}
        <div className="about_mission_vision_content width_80">
          {activeTab === "mission" ? (
            <p>
              The Mission of Gospel Revival Wave Church is{" "}
              <strong>
                Spreading Revival Fire through preaching JESUS CHRIST the Desire
                of All Nations
              </strong>{" "}
              (Haggai 2:7).
            </p>
          ) : (
            <>
              <p>
                Our Vision is to see a mighty Revival Wave sweep across the
                nations, as the Lord revealed to Bishop Jesse Ireri James in
                1998 while in The Netherlands: a stone dropped into the sea,
                causing waves of Revival to reach the ends of the earth. God
                said He would use us as that stone to stir up and spread Revival
                to the nations.
              </p>

              <div className="about_mission_vision_mandate">
                <p className="about_mission_vision_mandate_title">
                  This vision is fulfilled through our Two-Fold Mandate:
                </p>

                <div className="about_mission_vision_mandate_item">
                  <strong>1. Healing Kasarani</strong>
                  <p>
                    We are the salt Elisha used to heal the waters of Jericho (2
                    Kings 2:19-22). We are committed to saturating Kasarani with
                    the Gospel of our Lord and Saviour JESUS CHRIST and seeing
                    Mega Churches established.
                  </p>
                </div>

                <div className="about_mission_vision_mandate_item">
                  <strong>
                    2. Stirring and Spreading the Revival Fire to the Nations
                  </strong>
                  <p>
                    We believe God to do many great and effective missions,
                    crusades, conferences, seminars, and training both locally
                    and internationally. We will establish a Revival Training
                    Institute to raise REVIVAL CHAMPIONS (Revivalists,
                    Consecrated Leaders, Intercessors, Soul Winners,
                    Evangelists, Missionaries, and Revival financiers). We will
                    plant more branches across Kenya and do extensive community
                    work to touch people spiritually, physically, and socially.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Mission;
