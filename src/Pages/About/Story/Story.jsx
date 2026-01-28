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
              Gospel Revival Wave Church began with a divine mandate to bring
              the light of the Gospel to Kasarani and beyond. What started as a
              small gathering of faithful believers has been rooted in prayer,
              the Word, and a passion for souls. From our humble beginnings, we
              have seen God's hand move mightily, establishing a foundation of
              faith that continues to stand strong today.
            </p>
          </div>

          <div className="about_story_item">
            <h3 className="sub_section_title">How we've grown </h3>
            <p>
              Over the years, we have witnessed remarkable growth, not just in
              numbers but in spiritual depth and community impact. God has
              expanded our territory, allowing us to launch vibrant ministries
              for men, women, youth, and children. We have seen lives
              transformed, families restored, and a community knit together by
              the love of Christ. Our growth is a testament to God's
              faithfulness and the dedication of our members.
            </p>
          </div>
          <div className="about_story_item">
            <h3 className="sub_section_title">Where we're going </h3>
            <p>
              As we look to the future, our vision remains clear: to be a beacon
              of hope and a center for revival in Nairobi. We are committed to
              expanding our outreach, equipping the next generation of leaders,
              and deepening our impact in the community. We believe that the
              best is yet to come as we continue to walk in obedience to the
              Great Commission, expecting greater waves of God's glory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
