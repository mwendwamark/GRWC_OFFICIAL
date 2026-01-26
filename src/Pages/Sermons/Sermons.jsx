import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getFullApiUrl, getImageUrl } from "../../Utils/apiConfig";
import img from "../../assets/Images/HomeImages/BishopPreaching.webp";
import "./Sermons.css";
import { RiResetLeftLine } from "@remixicon/react";
import SecondaryNavbar from "../../Components/SecondaryNavbar/SecondaryNavbar";

const Sermons = () => {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("sermons");

  // Filter states
  const [selectedSeries, setSelectedSeries] = useState("");
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedPreacher, setSelectedPreacher] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Available filter options
  const [filterOptions, setFilterOptions] = useState({
    series: [],
    books: [],
    preachers: [],
    formats: [],
    years: [],
  });

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          getFullApiUrl("api/sermons?populate=*&sort=datePreached:desc"),
        );

        if (!response.ok) {
          throw new Error("Failed to fetch sermons");
        }

        const data = await response.json();
        setSermons(data.data || []);

        // Extract filter options from sermons data
        if (data.data && data.data.length > 0) {
          const series = [
            ...new Set(
              data.data.map((sermon) => sermon.series).filter(Boolean),
            ),
          ];
          const books = [
            ...new Set(
              data.data
                .map((sermon) => {
                  const match =
                    sermon.bibleReference?.match(/^(\d*\s*[A-Za-z]+)/);
                  return match ? match[0].trim() : null;
                })
                .filter(Boolean),
            ),
          ];
          const preachers = [
            ...new Set(
              data.data.map((sermon) => sermon.preacher).filter(Boolean),
            ),
          ];
          const formats = [
            ...new Set(
              data.data.map((sermon) => sermon.format).filter(Boolean),
            ),
          ];
          const years = [
            ...new Set(
              data.data
                .map((sermon) => new Date(sermon.datePreached).getFullYear())
                .filter(Boolean),
            ),
          ].sort((a, b) => b - a);

          setFilterOptions({
            series,
            books,
            preachers,
            formats,
            years,
          });
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching sermons:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSermons();
  }, []);

  // Format the date nicely
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleDateString("en-US", { month: "2-digit" });
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const year = date.toLocaleDateString("en-US", { year: "2-digit" });
    return `${month}.${day}.${year}`;
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedSeries("");
    setSelectedBook("");
    setSelectedPreacher("");
    setSelectedFormat("");
    setSelectedYear("");
  };

  // Check if any filters are active
  const hasActiveFilters = () => {
    return (
      searchTerm ||
      selectedSeries ||
      selectedBook ||
      selectedPreacher ||
      selectedFormat ||
      selectedYear
    );
  };

  // Filter sermons based on search and filter criteria
  const filteredSermons = sermons.filter((sermon) => {
    const searchMatch = sermon.sermonTitle
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const seriesMatch = selectedSeries
      ? sermon.series === selectedSeries
      : true;
    const bookMatch = selectedBook
      ? sermon.bibleReference?.includes(selectedBook)
      : true;
    const preacherMatch = selectedPreacher
      ? sermon.preacher === selectedPreacher
      : true;
    const formatMatch = selectedFormat
      ? sermon.format === selectedFormat
      : true;
    const yearMatch = selectedYear
      ? new Date(sermon.datePreached).getFullYear() === parseInt(selectedYear)
      : true;

    return (
      searchMatch &&
      seriesMatch &&
      bookMatch &&
      preacherMatch &&
      formatMatch &&
      yearMatch
    );
  });

  if (loading) {
    return (
      <div className="sermons_page_loading_container">
        <div className="sermons_page_loading_spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div className="sermons_page_error_container">Error: {error}</div>;
  }

  return (
    <>
      <title>Sermons | Gospel Revival Wave Church</title>
      <meta
        name="description"
        content="Explore powerful sermons from Gospel Revival Wave Church. Watch, listen, and be transformed by messages that inspire, challenge, and strengthen your faith."
      />
      <meta
        property="og:title"
        content="Sermons | Gospel Revival Wave Church"
      />
      <meta
        property="og:description"
        content="Explore powerful sermons from Gospel Revival Wave Church. Watch, listen, and be transformed."
      />
      <meta property="og:type" content="website" />
      <SecondaryNavbar />
      <div className="sermons_page_container  below_navbar">
        <div className="sermons_page_wrapper container">
          {/* Hero Section */}
          <div className="sermons_page_hero grid_container">
            <div className="sermons_page_hero_content section_headers">
              <h1 className="hero_title">
                Sermons by Gospel Revival Wave Church
              </h1>
              <p className="sermons_page_hero_text width_80">
                Dive into powerful messages that inspire, challenge, and
                transform lives. Explore our collection of sermons and series.
              </p>
              <a href="#sermons_page_content" className="btn btn_black_outline">
                View Sermons
              </a>
            </div>

            <div className="sermons_page_hero_img">
              <img src={img} alt="Gospel Revival Wave Church Sermons" />
            </div>
          </div>

          {/* Main Content */}
          <div className="sermons_page_content" id="sermons_page_content">
            {/* Tabs */}
            <div className="sermons_page_tabs">
              <button
                className={`sermons_page_tab ${
                  activeTab === "sermons" ? "sermons_page_tab_active" : ""
                }`}
                onClick={() => setActiveTab("sermons")}
              >
                SERMONS
              </button>
              <button
                className={`sermons_page_tab ${
                  activeTab === "series" ? "sermons_page_tab_active" : ""
                }`}
                onClick={() => setActiveTab("series")}
              >
                SERMON SERIES
              </button>
            </div>

            {/* Filters Section */}
            <div className="sermons_page_filters">
              <div className="sermons_page_search_wrapper">
                <input
                  type="text"
                  placeholder="SEARCH"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="sermons_page_search_input"
                />
              </div>

              <div className="sermons_page_filter_dropdowns">
                <select
                  value={selectedSeries}
                  onChange={(e) => setSelectedSeries(e.target.value)}
                  className="sermons_page_filter_select"
                >
                  <option value="">SERIES</option>
                  {filterOptions.series.map((series, index) => (
                    <option key={index} value={series}>
                      {series}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedBook}
                  onChange={(e) => setSelectedBook(e.target.value)}
                  className="sermons_page_filter_select"
                >
                  <option value="">BOOK</option>
                  {filterOptions.books.map((book, index) => (
                    <option key={index} value={book}>
                      {book}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedPreacher}
                  onChange={(e) => setSelectedPreacher(e.target.value)}
                  className="sermons_page_filter_select"
                >
                  <option value="">PREACHER</option>
                  {filterOptions.preachers.map((preacher, index) => (
                    <option key={index} value={preacher}>
                      {preacher}
                    </option>
                  ))}
                </select>

                {/* <select
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="sermons_page_filter_select"
                >
                  <option value="">FORMAT</option>
                  {filterOptions.formats.map((format, index) => (
                    <option key={index} value={format}>
                      {format}
                    </option>
                  ))}
                </select> */}

                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="sermons_page_filter_select"
                >
                  <option value="">YEAR</option>
                  {filterOptions.years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Info */}
            <div className="sermons_page_results_info">
              <span className="sermons_page_results_text">
                Showing <strong>{filteredSermons.length}</strong> out of{" "}
                <strong>{sermons.length}</strong>
              </span>
              {hasActiveFilters() && (
                <button
                  onClick={resetFilters}
                  className="sermons_page_reset_button"
                >
                  <RiResetLeftLine />
                  Reset Filters
                </button>
              )}
            </div>

            {/* Sermons Grid */}
            <div className="sermons_page_grid">
              {filteredSermons.length === 0 ? (
                <p className="sermons_page_no_results">
                  No sermons found. Try adjusting your filters.
                </p>
              ) : (
                filteredSermons.map((sermon) => {
                  let imageUrl = null;
                  if (sermon.sermonCoverImage?.url) {
                    imageUrl = getImageUrl(sermon.sermonCoverImage.url);
                  }

                  const videoType =
                    sermon.sermonVideo && sermon.sermonVideo.length > 0
                      ? "VIDEO"
                      : null;

                  return (
                    <NavLink
                      to={`/sermons/${sermon.documentId}`}
                      key={sermon.documentId}
                      className="sermons_page_card"
                    >
                      <div className="sermons_page_card_image">
                        {imageUrl ? (
                          <img src={imageUrl} alt={sermon.sermonTitle} />
                        ) : (
                          <div className="sermons_page_placeholder_image"></div>
                        )}
                        {videoType && (
                          <div className="sermons_page_video_badge">
                            {videoType}
                          </div>
                        )}
                      </div>

                      <div className="sermons_page_card_content">
                        <div className="sermons_page_card_meta">
                          <span className="sermons_page_card_date">
                            {sermon.datePreached &&
                              formatDate(sermon.datePreached)}
                          </span>
                          {sermon.series && (
                            <>
                              <span className="sermons_page_card_divider">
                                |
                              </span>
                              <span className="sermons_page_card_series">
                                {sermon.series.toUpperCase()}
                              </span>
                            </>
                          )}
                        </div>

                        <h3 className="sermons_page_card_title">
                          {sermon.sermonTitle}
                        </h3>

                        <div className="sermons_page_card_footer">
                          <span className="sermons_page_card_watch">
                            WATCH
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M6 12L10 8L6 4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </NavLink>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sermons;
