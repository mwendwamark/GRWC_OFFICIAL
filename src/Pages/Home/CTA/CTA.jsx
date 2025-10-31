import React from "react";
import "./CTA.css";
import img from "../../../assets/Images/HomeImages/Bishop1.webp";
import { RiDoubleQuotesR } from "@remixicon/react";

const CTA = () => {
  return (
    <section className="welcome_message_section section">
      <div className="welcome_message_container container">
        <div className="welcome_message_card">
          <div className="welcome_visual_column">
            <div className="bishop_image_wrapper">
              <RiDoubleQuotesR className="large_quote_icon" size={120} />

              <img
                src={img}
                alt="Bishop welcoming you"
                className="bishop_image"
              />

              <div className="image_accent_overlay"></div>
            </div>
          </div>

          <div className="welcome_text_column">
            <div className="message_headers">
              <strong className="title_top title_top_purple">
                A Message from Our Bishop
              </strong>
              <h2 className="section_title welcome_title">
                You Are All Welcome
              </h2>
            </div>

            <div className="bishop_message_body">
              <p className="main_quote_text">
                "Welcome to Gospel Revival Wave Church, where everyone is
                valuable. Our doors are open, our hearts are ready, and our
                community is eager to walk alongside you in your spiritual
                journey."
              </p>

              <p className="message_description">
                It brings me great joy to welcome you to our church family.
                Whether you're joining us for the first time or have been part
                of our community for years, please know that you belong here. At
                Gospel Revival Wave Church, we believe that every person carries
                immeasurable worth and purpose.
              </p>

              <p className="message_description">
                Here, you'll find a place of genuine love, unwavering faith, and
                transformative worship. We're not just a congregation—we're a
                <b> family united in Christ's love</b>
              </p>
            </div>

            <div className="message_signature_block">
              <div className="signature_line"></div>
              <p className="signature_name">Bishop Jesse Ireri James</p>
              <p className="signature_title">
                Bishop, Gospel Revival Wave Church
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
