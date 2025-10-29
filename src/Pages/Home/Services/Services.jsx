import React from "react";
import "./Services.css";
import { RiTimer2Line } from "@remixicon/react";
import { RiAlarmLine } from "@remixicon/react";
const Services = () => {
  return (
    <section className="home_services_section section">
      <div className="home_services_container container">
        <div className="home_services_headers">
          <div className="section_headers">
            <strong className="title_top title_top_purple">services</strong>
            <h2 className="section_title">
              Join us every Sunday in our services
            </h2>
          </div>
        </div>

        <div className="home_services_contents grid_container">
          <div className="home_services_main">
            <h3 className="sub_section_title">Main services</h3>
            <div className="home_services_first">
              <h4 className="">
                First Service <i>(English Service)</i>
              </h4>
              <div className="service_time">
                <RiAlarmLine /> <p>8:00 AM ~ 10:30 AM</p>
              </div>
              <p>
                Join our powerful English Service Every Sunday. All are welcome.
              </p>
            </div>
            <div className="home_services_second">
              <h4 className="">
                Second Service <i>(Swahili Service)</i>
              </h4>
              <div className="service_time">
                <RiAlarmLine /> <p>11:00 AM ~ 01:00 AM</p>
              </div>
              <p>
                Experience our vibrant Swahili Service and connect with the
                community.
              </p>
            </div>
          </div>

          <div className="home_services_other">
            <h3 className="sub_section_title">Other Services</h3>
            <div className="home_services_youth">
              <h4>Youth Service</h4>
              <div className="service_time">
                <RiAlarmLine /> <p>8:00 AM ~ 10:30 AM</p>
              </div>
              <p>
                Join our powerful English Service Every Sunday. All are welcome.
              </p>
            </div>
            <div className="home_services_youngsters">
              <h4>Kasarani Youngsters service</h4>
              <div className="service_time">
                <RiAlarmLine /> <p>9:00 AM ~ 11:30 AM</p>
              </div>
              <p>
                Join our powerful English Service Every Sunday. All are welcome.
              </p>
            </div>

            <div className="home_services_kids">
              <h4>Sunday School Service</h4>
              <div className="service_time">
                <RiAlarmLine /> <p>11:30 AM ~ 1:00 AM</p>
              </div>
              <p>
                Join our powerful English Service Every Sunday. All are welcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
