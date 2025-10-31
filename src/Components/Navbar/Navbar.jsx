import { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/Logo.webp";
import { RiMenu3Line } from "@remixicon/react";
import { RiCloseLine } from "@remixicon/react";
import { RiArrowDownSLine } from "@remixicon/react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1001);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    { name: "Choir", path: "/ministries/choir" },
    { name: "Men's", path: "/ministries/men" },
    { name: "Women's", path: "/ministries/women" },
    { name: "Youth", path: "/ministries/youth" },
    { name: "Youngster's", path: "/ministries/kyc" },
    { name: "Media", path: "/ministries/media" },
    { name: "Ushers", path: "/ministries/usehring" },
    { name: "Sunday School", path: "/ministries/sunday-school" },
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
      <ul className="navbar__submenu">
        {links.map((link, index) => (
          <li key={index} className="navbar__submenu-item">
            <NavLink
              to={link.path}
              className="navbar__submenu-link"
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
      <header className="header">
        <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
          <div className="navbar__container container">
            <NavLink
              aria-label="Go to Home page"
              to="/"
              className="navbar__logo"
            >
              <img src={Logo} alt="Logo" />
            </NavLink>

            <div className="navbar__right">
              <ul
                className={`navbar__menu ${
                  mobileMenuOpen ? "navbar__menu--active" : ""
                }`}
              >
                <li className="navbar__menu-item">
                  <NavLink
                    aria-label="Go to Home page"
                    to="/"
                    onClick={closeMobileMenu}
                    className="navbar__menu-link"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="navbar__menu-item">
                  <NavLink
                    aria-label="Go to About page"
                    to="/about"
                    onClick={closeMobileMenu}
                    className="navbar__menu-link"
                  >
                    About
                  </NavLink>
                </li>

                {/* Ministries Dropdown */}
                <li
                  className="navbar__menu-item navbar__menu-item--has-dropdown"
                  onMouseEnter={() => handleDropdownEnter("ministries")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className="navbar__menu-link navbar__menu-link--dropdown"
                    onClick={() => toggleMobileDropdown("ministries")}
                  >
                    Ministries
                    <RiArrowDownSLine
                      size={16}
                      className={`navbar__dropdown-icon ${
                        activeDropdown === "ministries"
                          ? "navbar__dropdown-icon--active"
                          : ""
                      }`}
                    />
                  </button>
                  {renderMobileSubmenu("ministries", ministriesLinks)}
                </li>

                <li className="navbar__menu-item">
                  <NavLink
                    aria-label="Go to Sermons page"
                    to="/sermons"
                    onClick={closeMobileMenu}
                    className="navbar__menu-link"
                  >
                    Sermons
                  </NavLink>
                </li>
                <li className="navbar__menu-item">
                  <NavLink
                    aria-label="Go to Events page"
                    to="/events"
                    onClick={closeMobileMenu}
                    className="navbar__menu-link"
                  >
                    Events
                  </NavLink>
                </li>

                {/* Branches Dropdown */}
                <li
                  className="navbar__menu-item navbar__menu-item--has-dropdown"
                  onMouseEnter={() => handleDropdownEnter("branches")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className="navbar__menu-link navbar__menu-link--dropdown"
                    onClick={() => toggleMobileDropdown("branches")}
                  >
                    Branches
                    <RiArrowDownSLine
                      size={16}
                      className={`navbar__dropdown-icon ${
                        activeDropdown === "branches"
                          ? "navbar__dropdown-icon--active"
                          : ""
                      }`}
                    />
                  </button>
                  {renderMobileSubmenu("branches", branchesLinks)}
                </li>

                <li className="navbar__menu-item">
                  <NavLink
                    aria-label="Go to Give page"
                    to="/give"
                    onClick={closeMobileMenu}
                    className="navbar__menu-link"
                  >
                    Give
                  </NavLink>
                </li>
                <li className="navbar__menu-item">
                  <NavLink
                    aria-label="Go to Contact page"
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="navbar__menu-lin btn btn_purple"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>

              <button
                className="navbar__hamburger"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <RiCloseLine size={24} className="navbar__hamburger-icon" />
                ) : (
                  <RiMenu3Line size={24} className="navbar__hamburger-icon" />
                )}
              </button>
            </div>
          </div>

          {/* Desktop-only Ministries Dropdown Menu */}
          {!isMobile && (
            <>
              <div
                className={`navbar__dropdown navbar__ministries-dropdown ${
                  activeDropdown === "ministries"
                    ? "navbar__dropdown--active"
                    : ""
                }`}
                onMouseEnter={() => handleDropdownEnter("ministries")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="navbar__dropdown-container container">
                  <div className="navbar__dropdown-grid">
                    {ministriesLinks.map((link, index) => (
                      <NavLink
                        key={index}
                        to={link.path}
                        className="navbar__dropdown-item"
                        onClick={closeMobileMenu}
                      >
                        <div className="navbar__dropdown-item-icon">
                          <div
                            className={`navbar__dropdown-placeholder-icon navbar__dropdown-placeholder-icon--${
                              index + 1
                            }`}
                          ></div>
                        </div>
                        <div className="navbar__dropdown-item-content">
                          <span className="navbar__dropdown-item-title">
                            {link.name}
                          </span>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop-only Branches Dropdown Menu */}
              <div
                className={`navbar__dropdown navbar__branches-dropdown ${
                  activeDropdown === "branches"
                    ? "navbar__dropdown--active"
                    : ""
                }`}
                onMouseEnter={() => handleDropdownEnter("branches")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="navbar__dropdown-container container">
                  <div className="navbar__dropdown-grid">
                    {branchesLinks.map((link, index) => (
                      <NavLink
                        key={index}
                        to={link.path}
                        className="navbar__dropdown-item"
                        onClick={closeMobileMenu}
                      >
                        <div className="navbar__dropdown-item-icon">
                          <div className="navbar__dropdown-placeholder-icon"></div>
                        </div>
                        <div className="navbar__dropdown-item-content">
                          <span className="navbar__dropdown-item-label">
                            BRANCH
                          </span>
                          <span className="navbar__dropdown-item-title">
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

export default Navbar;
