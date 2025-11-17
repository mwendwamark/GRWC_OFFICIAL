import { useEffect, useState } from "react";
import "./SecondaryNavbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/Logo.webp";
import { RiMenu3Line } from "@remixicon/react";
import { RiCloseLine } from "@remixicon/react";
import { RiArrowDownSLine } from "@remixicon/react";
import { RiMusic2Fill } from "@remixicon/react";
import { RiTeamFill } from "@remixicon/react";
import { RiWomenFill } from "@remixicon/react";
import { RiUserHeartFill } from "@remixicon/react";
import { RiShakeHandsFill } from "@remixicon/react";
import { RiCameraFill } from "@remixicon/react";
import { RiHandHeartFill } from "@remixicon/react";
import { RiBook3Fill } from "@remixicon/react";
import { RiMapPinFill } from "@remixicon/react";

const SecondaryNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1001);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if navbar should have backdrop blur
      if (currentScrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Scrolling down & past threshold - hide navbar
        setVisible(false);
      } else {
        // Scrolling up - show navbar
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1001);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownEnter = (dropdownName) => {
    if (!isMobile) {
      setActiveDropdown(dropdownName);
    }
  };

  const handleDropdownLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const toggleMobileDropdown = (dropdownName) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    }
  };

  const ministriesLinks = [
    { name: "Choir", path: "/ministries/choir", icon: RiMusic2Fill },
    { name: "Men's", path: "/ministries/men", icon: RiTeamFill },
    { name: "Women's", path: "/ministries/women", icon: RiWomenFill },
    { name: "Youth", path: "/ministries/youth", icon: RiUserHeartFill },
    { name: "Youngster's", path: "/ministries/kyc", icon: RiShakeHandsFill },
    { name: "Media", path: "/ministries/media", icon: RiCameraFill },
    { name: "Ushers", path: "/ministries/usehring", icon: RiHandHeartFill },
    {
      name: "Sunday School",
      path: "/ministries/sunday_school",
      icon: RiBook3Fill,
    },
  ];

  const branchesLinks = [
    { name: "Downtown Branch", path: "/branches/downtown" },
    { name: "Westside Branch", path: "/branches/westside" },
    { name: "Northside Branch", path: "/branches/northside" },
    { name: "Eastside Branch", path: "/branches/eastside" },
  ];

  const renderMobileSubmenu = (type, links) => {
    if (!isMobile || activeDropdown !== type) return null;
    return (
      <ul className="secondary-navbar__submenu">
        {links.map((link, index) => (
          <li key={index} className="secondary-navbar__submenu-item">
            <NavLink
              to={link.path}
              className="secondary-navbar__submenu-link"
              onClick={closeMobileMenu}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <header className="secondary-header">
        <nav
          className={`secondary-navbar ${
            scrolled ? "secondary-navbar--scrolled" : ""
          } ${!visible ? "secondary-navbar--hidden" : ""}`}
        >
          <div className="secondary-navbar__container container">
            <NavLink
              aria-label="Go to Home page"
              to="/"
              className="secondary-navbar__logo"
            >
              <img src={Logo} alt="Logo" />
            </NavLink>

            <div className="secondary-navbar__right">
              <ul
                className={`secondary-navbar__menu ${
                  mobileMenuOpen ? "secondary-navbar__menu--active" : ""
                }`}
              >
                <li className="secondary-navbar__menu-item">
                  <NavLink
                    aria-label="Go to Home page"
                    to="/"
                    onClick={closeMobileMenu}
                    className="secondary-navbar__menu-link"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="secondary-navbar__menu-item">
                  <NavLink
                    aria-label="Go to About page"
                    to="/about"
                    onClick={closeMobileMenu}
                    className="secondary-navbar__menu-link"
                  >
                    About
                  </NavLink>
                </li>

                {/* Ministries Dropdown */}
                <li
                  className="secondary-navbar__menu-item secondary-navbar__menu-item--has-dropdown"
                  onMouseEnter={() => handleDropdownEnter("ministries")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className="secondary-navbar__menu-link secondary-navbar__menu-link--dropdown"
                    onClick={() => toggleMobileDropdown("ministries")}
                  >
                    Ministries
                    <RiArrowDownSLine
                      size={16}
                      className={`secondary-navbar__dropdown-icon ${
                        activeDropdown === "ministries"
                          ? "secondary-navbar__dropdown-icon--active"
                          : ""
                      }`}
                    />
                  </button>
                  {renderMobileSubmenu("ministries", ministriesLinks)}
                </li>

                <li className="secondary-navbar__menu-item">
                  <NavLink
                    aria-label="Go to Sermons page"
                    to="/sermons"
                    onClick={closeMobileMenu}
                    className="secondary-navbar__menu-link"
                  >
                    Sermons
                  </NavLink>
                </li>
                <li className="secondary-navbar__menu-item">
                  <NavLink
                    aria-label="Go to Events page"
                    to="/events"
                    onClick={closeMobileMenu}
                    className="secondary-navbar__menu-link"
                  >
                    Events
                  </NavLink>
                </li>

                {/* Branches Dropdown */}
                <li
                  className="secondary-navbar__menu-item secondary-navbar__menu-item--has-dropdown"
                  onMouseEnter={() => handleDropdownEnter("branches")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className="secondary-navbar__menu-link secondary-navbar__menu-link--dropdown"
                    onClick={() => toggleMobileDropdown("branches")}
                  >
                    Branches
                    <RiArrowDownSLine
                      size={16}
                      className={`secondary-navbar__dropdown-icon ${
                        activeDropdown === "branches"
                          ? "secondary-navbar__dropdown-icon--active"
                          : ""
                      }`}
                    />
                  </button>
                  {renderMobileSubmenu("branches", branchesLinks)}
                </li>

                <li className="secondary-navbar__menu-item">
                  <NavLink
                    aria-label="Go to Give page"
                    to="/give"
                    onClick={closeMobileMenu}
                    className="secondary-navbar__menu-link"
                  >
                    Give
                  </NavLink>
                </li>
                <li className="secondary-navbar__menu-item secondary-navbar__contact_btn">
                  <NavLink
                    aria-label="Go to Contact page"
                    to="/visit_us"
                    onClick={closeMobileMenu}
                    className="btn btn_purple"
                  >
                    Visit Us
                  </NavLink>
                </li>
              </ul>

              <button
                className="secondary-navbar__hamburger"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <RiCloseLine
                    size={24}
                    className="secondary-navbar__hamburger-icon"
                  />
                ) : (
                  <RiMenu3Line
                    size={24}
                    className="secondary-navbar__hamburger-icon"
                  />
                )}
              </button>
            </div>
          </div>

          {/* Desktop-only Ministries Dropdown Menu */}
          {!isMobile && (
            <>
              <div
                className={`secondary-navbar__dropdown secondary-navbar__ministries-dropdown ${
                  activeDropdown === "ministries"
                    ? "secondary-navbar__dropdown--active"
                    : ""
                }`}
                onMouseEnter={() => handleDropdownEnter("ministries")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="secondary-navbar__dropdown-container container">
                  <div className="secondary-navbar__dropdown-grid">
                    {ministriesLinks.map((link, index) => {
                      const IconComponent = link.icon;
                      return (
                        <NavLink
                          key={index}
                          to={link.path}
                          className="secondary-navbar__dropdown-item"
                          onClick={closeMobileMenu}
                        >
                          <div className="secondary-navbar__dropdown-item-icon">
                            <IconComponent
                              size={40}
                              className="ministry-icon"
                            />
                          </div>
                          <div className="secondary-navbar__dropdown-item-content">
                            <span className="secondary-navbar__dropdown-item-title">
                              {link.name}
                            </span>
                          </div>
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Desktop-only Branches Dropdown Menu */}
              <div
                className={`secondary-navbar__dropdown secondary-navbar__branches-dropdown ${
                  activeDropdown === "branches"
                    ? "secondary-navbar__dropdown--active"
                    : ""
                }`}
                onMouseEnter={() => handleDropdownEnter("branches")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="secondary-navbar__dropdown-container container">
                  <div className="secondary-navbar__dropdown-grid">
                    {branchesLinks.map((link, index) => (
                      <NavLink
                        key={index}
                        to={link.path}
                        className="secondary-navbar__dropdown-item"
                        onClick={closeMobileMenu}
                      >
                        <div className="secondary-navbar__dropdown-item-icon">
                          <RiMapPinFill size={40} className="branch-icon" />
                        </div>
                        <div className="secondary-navbar__dropdown-item-content">
                          <span className="secondary-navbar__dropdown-item-label">
                            BRANCH
                          </span>
                          <span className="secondary-navbar__dropdown-item-title">
                            {link.name}
                          </span>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default SecondaryNavbar;
