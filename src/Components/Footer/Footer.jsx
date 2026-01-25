import React from "react";
import "./Footer.css";
import logo from "../../../public/Logo.webp";
import { NavLink } from "react-router-dom";
import {
  RiPhoneLine,
  RiMailLine,
  RiYoutubeLine,
  RiTiktokLine,
  RiInstagramLine,
  RiFacebookBoxLine,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="footer_container container">
        <div className="footer_header">
          <img
            src={logo}
            alt="Gospel Revival Wave Church Logo"
            height={100}
            width={100}
          />
          <NavLink to="/visit_us" className="btn btn_purple">
            Visit Us
          </NavLink>
        </div>

        <div className="footer_center_links_container">
          <div className="footer_content_links">
            <strong className="footer_link_title">Pages</strong>
            <ul className="footer_links">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              <li>
                <NavLink to="/sermons">Sermons</NavLink>
              </li>
              <li>
                <NavLink to="/visit_us">Visit Us</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer_content_links">
            <strong className="footer_link_title">Ministries</strong>
            <ul className="footer_links">
              <li>
                <NavLink to="/ministries/men">Men</NavLink>
              </li>
              <li>
                <NavLink to="/ministries/women">Women</NavLink>
              </li>
              <li>
                <NavLink to="/ministries/sunday_school">Sunday School</NavLink>
              </li>
              <li>
                <NavLink to="/ministries/kyc">Youngsters</NavLink>
              </li>
              <li>
                <NavLink to="/ministries/choir">Choir</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer_content_links">
            <strong className="footer_link_title">Branches</strong>
            <ul className="footer_links">
              <li>
                <NavLink to="/branches/kasarani">Kasarani (HQ)</NavLink>
              </li>
              <li>
                <NavLink to="/branches/icipe">Icipe</NavLink>
              </li>
              <li>
                <NavLink to="/branches/buruburu">Buruburu</NavLink>
              </li>
              <li>
                <NavLink to="/branches/timboroa">Timboroa</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer_content_links">
            <strong className="footer_link_title">Media</strong>
            <ul className="footer_links">
              <li>
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/music">Music</NavLink>
              </li>
              <li>
                <NavLink to="/articles">Articles</NavLink>
              </li>
              <li>
                <NavLink to="/podcast">Podcast</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer_content_links">
            <strong className="footer_link_title">Contact Us</strong>
            <ul className="footer_links">
              <li className="footer_contact_info">
                <RiPhoneLine className="footer_social_icon" />
                <a href="tel:+254726863953">+254 726 863 953</a>
              </li>

              <li className="footer_contact_info">
                <RiMailLine className="footer_social_icon" />
                <a href="mailto:gospelrevivalwavechurch@yahoo.com">
                  grwc@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer_socials">
          <div className="footer_socials_container">
            <RiFacebookBoxLine className="footer_social_icon" />
            <RiInstagramLine className="footer_social_icon" />
            <RiTiktokLine className="footer_social_icon" />
            <RiYoutubeLine className="footer_social_icon" />
          </div>
          <div className="footer_copyright">
            <span>
              {" "}
              © {new Date().getFullYear()} Gospel Revival Wave Church
            </span>
          </div>
        </div>

        <div className="footer_made_by">
          <a href="https://nthei.vercel.app" target="_blank">
            Made by <span>Mark Mwendwa</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
