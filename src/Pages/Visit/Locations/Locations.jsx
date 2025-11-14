import React from "react";
import "./Locations.css";
import { RiMapPinLine, RiTimeLine, RiMailLine } from "@remixicon/react";
import { NavLink } from "react-router-dom";

const Locations = () => {
  const locations = [
    {
      id: 1,
      location: "Icipe",
      county: "Nairobi",
      serviceTime: "09:00 AM ~ 11:00 AM",
      email: "icipe@grwc.org",
      longitude: 12.23,
      latitude: -12.23,
      image:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&q=80",
    },
    {
      id: 2,
      location: "Downtown",
      county: "Nairobi",
      serviceTime: "10:00 AM ~ 12:00 PM",
      email: "downtown@grwc.org",
      longitude: 12.24,
      latitude: -12.24,
      image:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&q=80",
    },
    {
      id: 3,
      location: "Westlands",
      county: "Nairobi",
      serviceTime: "09:30 AM ~ 11:30 AM",
      email: "westlands@grwc.org",
      longitude: 12.25,
      latitude: -12.25,
      image:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&q=80",
    },
    {
      id: 4,
      location: "Kasarani",
      county: "Nairobi",
      serviceTime: "08:00 AM ~ 10:00 AM",
      email: "kasarani@grwc.org",
      longitude: 12.26,
      latitude: -12.26,
      image:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&q=80",
    },
    {
      id: 5,
      location: "Kikuyu",
      county: "Kiambu",
      serviceTime: "09:00 AM ~ 11:00 AM",
      email: "kikuyu@grwc.org",
      longitude: 12.27,
      latitude: -12.27,
      image:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&q=80",
    },
    {
      id: 6,
      location: "Karen",
      county: "Nairobi",
      serviceTime: "10:00 AM ~ 12:00 PM",
      email: "karen@grwc.org",
      longitude: 12.28,
      latitude: -12.28,
      image:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&q=80",
    },
    {
      id: 7,
      location: "Thika",
      county: "Kiambu",
      serviceTime: "09:00 AM ~ 11:00 AM",
      email: "thika@grwc.org",
      longitude: 12.29,
      latitude: -12.29,
      image:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&q=80",
    },
    {
      id: 8,
      location: "Ruiru",
      county: "Kiambu",
      serviceTime: "08:30 AM ~ 10:30 AM",
      email: "ruiru@grwc.org",
      longitude: 12.3,
      latitude: -12.3,
      image:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&q=80",
    },
    {
      id: 9,
      location: "Ngong",
      county: "Kajiado",
      serviceTime: "09:00 AM ~ 11:00 AM",
      email: "ngong@grwc.org",
      longitude: 12.31,
      latitude: -12.31,
      image:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&q=80",
    },
    {
      id: 10,
      location: "Rongai",
      county: "Kajiado",
      serviceTime: "10:00 AM ~ 12:00 PM",
      email: "rongai@grwc.org",
      longitude: 12.32,
      latitude: -12.32,
      image:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&q=80",
    },

    {
      id: 2,
      location: "Downtown",
      county: "Nairobi",
      serviceTime: "10:00 AM ~ 12:00 PM",
      email: "downtown@grwc.org",
      longitude: 12.24,
      latitude: -12.24,
      image:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&q=80",
    },
    {
      id: 3,
      location: "Westlands",
      county: "Nairobi",
      serviceTime: "09:30 AM ~ 11:30 AM",
      email: "westlands@grwc.org",
      longitude: 12.25,
      latitude: -12.25,
      image:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&q=80",
    },
  ];

  return (
    <div className="locations_section section" id="locations">
      <div className="locations_container container">
        <div className="location_headers section_headers">
          <strong className="title_top title_top_faint">
            join us this sunday
          </strong>
          <h2 className="section_title">One church twelve locations</h2>
          <div className="location_title_description">
            <p>
              Gospel Revival Wave Church is one church with twelve congregations
              meeting across our city. No matter where you go, you'll find a
              church that's excited to meet you, connect with you, and worship
              alongside you.
            </p>
          </div>
        </div>

        <div className="locations_contents">
          {locations.map((location) => (
            <div key={location.id} className="location_card">
              <div className="location_card_image">
                <img
                  src={location.image}
                  alt={`${location.location} - Gospel Revival Wave Church`}
                  loading="lazy"
                  width={400}
                />
              </div>

              <div className="location_card_content">
                <div className="location_card_header">
                  <div className="location_card_titles">
                    <h3 className="location_name">
                      {location.location} Branch
                    </h3>
                    <span className="location_county">
                      {location.county} County
                    </span>
                  </div>{" "}
                  <div className="branch_email">
                    <RiMailLine size={20} className="location_icon" />
                    <a
                      href={`mailto:${location.email}`}
                      className="location_email"
                    >
                      {location.email}
                    </a>
                  </div>
                </div>

                <div className="location_card_details">
                  <div className="location_detail">
                    <RiTimeLine size={20} className="location_icon" />
                    <span>{location.serviceTime}</span>
                  </div>
                </div>

                <div className="location_card_actions">
                  <NavLink
                    to={`/branches/${location.location.toLowerCase()}`}
                    className="btn btn_black"
                  >
                    Learn More
                  </NavLink>
                  <a
                    href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn_purple_outline"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
