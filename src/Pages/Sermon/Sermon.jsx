import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import "./Sermon.css";
import { Helmet } from "react-helmet";
import { getFullApiUrl, getImageUrl } from "../../Utils/apiConfig";
import ShareSermon from "./ShareSermon";
import "react-toastify/dist/ReactToastify.css";
import { RiUser2Line } from "@remixicon/react";
import { RiBookOpenLine } from "@remixicon/react";
import { RiCalendar2Line } from "@remixicon/react";
import { RiArrowLeftLine } from "@remixicon/react";
import { RiDownloadLine } from "@remixicon/react";
import SecondaryNavbar from "../../Components/SecondaryNavbar/SecondaryNavbar";

const renderContent = (content) => {
  if (!content || !Array.isArray(content)) return null;

  return content.map((block, index) => {
    switch (block.type) {
      case "list":
        const ListTag = block.format === "ordered" ? "ol" : "ul";
        return (
          <ListTag key={index} className="sermon_detail_content_list">
            {block.children.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.children &&
                  item.children.map((text, textIndex) => (
                    <span
                      key={textIndex}
                      className={text.bold ? "sermon_detail_bold_text" : ""}
                      style={text.bold ? { fontWeight: 700 } : {}}
                    >
                      {text.text}
                    </span>
                  ))}
              </li>
            ))}
          </ListTag>
        );

      case "paragraph":
        return (
          <p key={index} className="sermon_detail_content_paragraph">
            {block.children &&
              block.children.map((text, textIndex) => (
                <span
                  key={textIndex}
                  className={text.bold ? "sermon_detail_bold_text" : ""}
                  style={text.bold ? { fontWeight: 700 } : {}}
                >
                  {text.text}
                </span>
              ))}
          </p>
        );

      default:
        return null;
    }
  });
};

const Sermon = () => {
  const { id } = useParams();
  const [sermon, setSermon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);

    const fetchSermon = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          getFullApiUrl(`api/sermons/${id}?populate=*`)
        );

        if (!response.ok) {
          throw new Error("Failed to fetch sermon details");
        }

        const sermonData = await response.json();
        setSermon(sermonData.data);
        console.log("Fetched sermon data:", sermonData.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching sermon details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchSermon();
    }
  }, [id]);

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!videoUrl) return;

    try {
      setIsDownloading(true);

      const response = await fetch(videoUrl);

      if (!response.ok) {
        throw new Error("Failed to download the sermon");
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.href = blobUrl;

      const filename = videoUrl.split("/").pop() || `sermon-${id}.mp4`;
      downloadLink.download = filename;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Error downloading sermon:", err);
      alert(
        "There was an error downloading the sermon. Please try again later."
      );
    } finally {
      setIsDownloading(false);
    }
  };

  if (loading)
    return (
      <div className="sermon_detail_loading_container">
        <div className="sermon_detail_loading_spinner"></div>
      </div>
    );

  if (error)
    return <div className="sermon_detail_error_container">Error: {error}</div>;

  if (!sermon)
    return (
      <div className="sermon_detail_not_found_container">Sermon not found</div>
    );

  let imageUrl = null;
  if (sermon.sermonCoverImage?.url) {
    imageUrl = getImageUrl(sermon.sermonCoverImage.url);
  }

  let preacherImageUrl = null;
  if (sermon.preacherImage?.url) {
    preacherImageUrl = getImageUrl(sermon.preacherImage.url);
  }

  let videoUrl = null;
  if (
    sermon.sermonVideo &&
    sermon.sermonVideo.length > 0 &&
    sermon.sermonVideo[0]?.url
  ) {
    videoUrl = getImageUrl(sermon.sermonVideo[0].url);
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleDateString("en-US", { month: "2-digit" });
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const year = date.toLocaleDateString("en-US", { year: "2-digit" });
    return `${month}.${day}.${year}`;
  };

  const sermonDate = new Date(sermon.datePreached);
  const formattedDate = formatDate(sermon.datePreached);

  return (
    <>
      <SecondaryNavbar />
      <Helmet>
        <title>{sermon.sermonTitle} | Gospel Revival Wave Church</title>
        <meta
          name="description"
          content={sermon.sermonSummary || `Sermon: ${sermon.sermonTitle}`}
        />
        <meta property="og:title" content={sermon.sermonTitle} />
        <meta
          property="og:description"
          content={sermon.sermonSummary || `Listen to ${sermon.sermonTitle}`}
        />
        {imageUrl && <meta property="og:image" content={imageUrl} />}
      </Helmet>

      <div className="sermon_detail_page below_navbar">
        <div className="sermon_detail_wrapper container">
          {/* Back Button */}
          <NavLink to="/sermons" className="sermon_detail_back_button">
            <RiArrowLeftLine size={20} />
            <span>Back to Series</span>
          </NavLink>

          {/* Hero Section */}
          <div className="sermon_detail_hero">
            {/* Left Side - Sermon Info */}
            <div className="sermon_detail_hero_content">
              <div className="sermon_detail_meta">
                <span className="sermon_detail_date">{formattedDate}</span>
                {sermon.series && (
                  <>
                    <span className="sermon_detail_divider">|</span>
                    <span className="sermon_detail_series">
                      {sermon.series.toUpperCase()}
                    </span>
                  </>
                )}
              </div>

              <h1 className="sermon_detail_title">{sermon.sermonTitle}</h1>
            </div>

            {/* Right Side - Video Player */}
            <div className="sermon_detail_video_container">
              {videoUrl ? (
                <video
                  className="sermon_detail_video"
                  controls
                  poster={imageUrl}
                  controlsList="nodownload"
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="sermon_detail_no_video">
                  {imageUrl ? (
                    <img src={imageUrl} alt={sermon.sermonTitle} />
                  ) : (
                    <div className="sermon_detail_placeholder">
                      <span>No video available</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Broadcast Label */}
          <div className="sermon_detail_broadcast">
            <span>BROADCAST</span>
            {sermon.preacher && (
              <span className="sermon_detail_preacher_name">
                {sermon.preacher}
              </span>
            )}
          </div>

          {/* Main Content */}
          <div className="sermon_detail_content">
            {/* Sermon Details Sidebar */}
            <div className="sermon_detail_sidebar">
              <div className="sermon_detail_sidebar_card">
                <h2 className="sermon_detail_sidebar_heading">
                  Sermon Details
                </h2>

                {/* Preacher Info */}
                {sermon.preacher && (
                  <div className="sermon_detail_info_section">
                    <h3 className="sermon_detail_info_label">Preacher</h3>
                    <div className="sermon_detail_preacher_info">
                      {preacherImageUrl ? (
                        <img
                          src={preacherImageUrl}
                          alt={sermon.preacher}
                          className="sermon_detail_preacher_image"
                        />
                      ) : (
                        <div className="sermon_detail_preacher_placeholder">
                          <RiUser2Line size={20} />
                        </div>
                      )}
                      <span className="sermon_detail_preacher_text">
                        {sermon.preacher}
                      </span>
                    </div>
                  </div>
                )}

                {/* Date Preached */}
                <div className="sermon_detail_info_section">
                  <h3 className="sermon_detail_info_label">Date Preached</h3>
                  <div className="sermon_detail_info_row">
                    <RiCalendar2Line size={18} />
                    <span>
                      {new Intl.DateTimeFormat("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }).format(sermonDate)}
                    </span>
                  </div>
                </div>

                {/* Bible Reference */}
                {sermon.bibleReference && (
                  <div className="sermon_detail_info_section">
                    <h3 className="sermon_detail_info_label">
                      Bible Reference
                    </h3>
                    <div className="sermon_detail_info_row">
                      <RiBookOpenLine size={18} />
                      <span>{sermon.bibleReference}</span>
                    </div>
                  </div>
                )}

                {/* Sermon Summary */}
                {sermon.sermonSummary && (
                  <div className="sermon_detail_info_section">
                    <h3 className="sermon_detail_info_label">Summary</h3>
                    <p className="sermon_detail_summary">
                      {sermon.sermonSummary}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                {videoUrl && (
                  <div className="sermon_detail_actions">
                    <button
                      onClick={handleDownload}
                      disabled={isDownloading}
                      // className="sermon_detail_action_button sermon_detail_download_button"
                      className="btn btn_black"
                    >
                      <RiDownloadLine size={16} />
                      <span>
                        {isDownloading ? "Downloading..." : "Download"}
                      </span>
                    </button>
                    <ShareSermon
                      sermon={sermon}
                      currentUrl={currentUrl}
                      showAsButton={true}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="sermon_detail_main_content">
              {sermon.sermonNotes && sermon.sermonNotes.length > 0 && (
                <>
                  <h2 className="sermon_detail_content_heading">
                    Sermon Notes
                  </h2>
                  <div className="sermon_detail_notes">
                    {renderContent(sermon.sermonNotes)}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sermon;
