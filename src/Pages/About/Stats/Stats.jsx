import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <div className="section stats_section">
      <div className="small_container stats_container">
        <div className="stat_item">
            <h1 className="hero_title">2000 +</h1>
            <p>Members</p>
        </div>
        <div className="stat_item">
            <h1 className="hero_title">12 +</h1>
            <p>Branches</p>
        </div>
        <div className="stat_item">
            <h1 className="hero_title">30 +</h1>
            <p>Years of Ministry</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
