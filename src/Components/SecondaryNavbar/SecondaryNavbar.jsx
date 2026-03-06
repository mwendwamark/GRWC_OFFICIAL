import { useEffect, useState } from "react";
import "./SecondaryNavbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/Logo.webp";
import { RiMenu3Line, RiCloseLine, RiArrowDownSLine, RiMapPinFill } from "@remixicon/react";

const ministriesCategories = [
  {
    category: "Worship & Arts",
    links: [
      { name: "Music Ministry", path: "/ministries/choir" },
    ],
  },
  {
    category: "Men & Women",
    links: [
      { name: "Men of Value", path: "/ministries/men" },
      { name: "Revival Wave Queens", path: "/ministries/women" },
    ],
  },
  {
    category: "Next Generation",
    links: [
      { name: "Youth Fellowship", path: "/ministries/youth" },
      { name: "Youngsters (KYC)", path: "/ministries/kyc" },
      { name: "Sunday School Eagles", path: "/ministries/sunday_school" },
    ],
  },
  {
    category: "Outreach & Growth",
    links: [
      { name: "Evangelism", path: "/ministries/evangelism" },
      { name: "Discipleship", path: "/ministries/discipleship" },
      { name: "Intercession", path: "/ministries/intercession" },
    ],
  },
  {
    category: "Community & Support",
    links: [
      { name: "Welfare", path: "/ministries/welfare" },
      { name: "Home Cell Fellowships", path: "/ministries/homecell" },
      { name: "Hospitality", path: "/ministries/hospitality" },
      { name: "Greeters", path: "/ministries/greeters" },
    ],
  },
  {
    category: "Operations",
    links: [
      { name: "Ushering", path: "/ministries/ushering" },
      { name: "Security", path: "/ministries/security" },
      { name: "Protocol", path: "/ministries/protocol" },
      { name: "Cleaning & Beautification", path: "/ministries/cleaning" },
      { name: "Bookshop & Library", path: "/ministries/bookshop" },
    ],
  },
];

const branchesLinks = [
  { name: "Downtown Branch", path: "/branches/downtown" },
  { name: "Westside Branch", path: "/branches/westside" },
  { name: "Northside Branch", path: "/branches/northside" },
  { name: "Eastside Branch", path: "/branches/eastside" },
];

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
      if (currentScrollY > 100) setScrolled(true);
      else setScrolled(false);

      if (currentScrollY > lastScrollY && currentScrollY > 150) setVisible(false);
      else setVisible(true);

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1001);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };
  const handleDropdownEnter = (name) => {
    if (!isMobile) setActiveDropdown(name);
  };
  const handleDropdownLeave = () => {
    if (!isMobile) setActiveDropdown(null);
  };
  const toggleMobileDropdown = (name) => {
    if (isMobile) setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Flatten for mobile submenu
  const allMinistriesLinks = ministriesCategories.flatMap((c) => c.links);

  const renderMobileSubmenu = (type, links) => {
    if (!isMobile || activeDropdown !== type) return null;
    return (
      <ul className="secondary-navbar__submenu">
        {links.map((link, index) => (
          <li key={index} className="secondary-navbar__submenu-item">
            <NavLink to={link.path} className="secondary-navbar__submenu-link" onClick={closeMobileMenu}>
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
        <nav className={`secondary-navbar ${scrolled ? "secondary-navbar--scrolled" : ""} ${!visible ? "secondary-navbar--hidden" : ""}`}>
          <div className="secondary-navbar__container container">
            <NavLink aria-label="Go to Home page" to="/" className="secondary-navbar__logo">
              <img src={Logo} alt="Logo" />
            </NavLink>

            <div className="secondary-navbar__right">
              <ul className={`secondary-navbar__menu ${mobileMenuOpen ? "secondary-navbar__menu--active" : ""}`}>
                <li className="secondary-navbar__menu-item">
                  <NavLink aria-label="Go to Home page" to="/" onClick={closeMobileMenu} className="secondary-navbar__menu-link">
                    Home
                  </NavLink>
                </li>
                <li className="secondary-navbar__menu-item">
                  <NavLink aria-label="Go to About page" to="/about" onClick={closeMobileMenu} className="secondary-navbar__menu-link">
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
                      className={`secondary-navbar__dropdown-icon ${activeDropdown === "ministries" ? "secondary-navbar__dropdown-icon--active" : ""}`}
                    />
                  </button>
                  {renderMobileSubmenu("ministries", allMinistriesLinks)}
                </li>

                <li className="secondary-navbar__menu-item">
                  <NavLink aria-label="Go to Sermons page" to="/sermons" onClick={closeMobileMenu} className="secondary-navbar__menu-link">
                    Sermons
                  </NavLink>
                </li>
                <li className="secondary-navbar__menu-item">
                  <NavLink aria-label="Go to Events page" to="/events" onClick={closeMobileMenu} className="secondary-navbar__menu-link">
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
                      className={`secondary-navbar__dropdown-icon ${activeDropdown === "branches" ? "secondary-navbar__dropdown-icon--active" : ""}`}
                    />
                  </button>
                  {renderMobileSubmenu("branches", branchesLinks)}
                </li>

                <li className="secondary-navbar__menu-item">
                  <NavLink aria-label="Go to Give page" to="/give" onClick={closeMobileMenu} className="secondary-navbar__menu-link">
                    Give
                  </NavLink>
                </li>
                <li className="secondary-navbar__menu-item secondary-navbar__contact_btn">
                  <NavLink aria-label="Go to Contact page" to="/visit_us" onClick={closeMobileMenu} className="btn btn_purple">
                    Visit Us
                  </NavLink>
                </li>
              </ul>

              <button className="secondary-navbar__hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
                {mobileMenuOpen ? (
                  <RiCloseLine size={24} className="secondary-navbar__hamburger-icon" />
                ) : (
                  <RiMenu3Line size={24} className="secondary-navbar__hamburger-icon" />
                )}
              </button>
            </div>
          </div>

          {/* Desktop Dropdowns */}
          {!isMobile && (
            <>
              {/* Ministries Mega Menu */}
              <div
                className={`secondary-navbar__dropdown secondary-navbar__ministries-dropdown ${activeDropdown === "ministries" ? "secondary-navbar__dropdown--active" : ""}`}
                onMouseEnter={() => handleDropdownEnter("ministries")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="secondary-navbar__mega-inner container">
                  {ministriesCategories.map((group, i) => (
                    <div key={i} className="secondary-navbar__mega-col">
                      <span className="secondary-navbar__mega-heading">{group.category}</span>
                      <ul className="secondary-navbar__mega-list">
                        {group.links.map((link, j) => (
                          <li key={j}>
                            <NavLink to={link.path} className="secondary-navbar__mega-link" onClick={closeMobileMenu}>
                              {link.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Branches Dropdown */}
              <div
                className={`secondary-navbar__dropdown secondary-navbar__branches-dropdown ${activeDropdown === "branches" ? "secondary-navbar__dropdown--active" : ""}`}
                onMouseEnter={() => handleDropdownEnter("branches")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="secondary-navbar__dropdown-container container">
                  <div className="secondary-navbar__dropdown-grid">
                    {branchesLinks.map((link, index) => (
                      <NavLink key={index} to={link.path} className="secondary-navbar__dropdown-item" onClick={closeMobileMenu}>
                        <div className="secondary-navbar__dropdown-item-content">
                          <span className="secondary-navbar__dropdown-item-label">BRANCH</span>
                          <span className="secondary-navbar__dropdown-item-title">{link.name}</span>
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