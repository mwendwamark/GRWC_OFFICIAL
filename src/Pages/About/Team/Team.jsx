import React from "react";
import "./Team.css";
import { AboutLeaders } from "../../../assets/Data/Leaders/AboutLeaders";
import { RiArrowRightLongLine } from "@remixicon/react";

const Team = () => {
  return (
    <div className="about_team_section section">
      <div className="about_team_container container">
        <div className="about_team_headers section_headers">
          <strong className="title_top title_top_faint">Our team</strong>
          <h2 className="section_title">Meet our Leaders</h2>
        </div>

        <div className="team_grid">
          {AboutLeaders.map((leader, index) => (
            <div key={index} className="team_member">
              <div className="team_member_image_wrapper">
                <img
                  src={leader.leaderImage}
                  alt={leader.leaderName}
                  className="team_member_image"
                  loading="lazy"
                />
              </div>
              <div className="team_member_info">
                <h3 className="team_member_name">{leader.leaderName}</h3>
                <p className="team_member_role">{leader.role}</p>
                <a
                  href={`mailto:${leader.email}`}
                  className="team_member_email"
                >
                  EMAIL <RiArrowRightLongLine size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
