import React from "react";
import "./Events.css";
import { NavLink } from "react-router-dom";
import { getImageUrl } from "../../Utils/apiConfig";
import { Helmet } from "react-helmet";
import { RiCalendar2Line, RiAlarmFill, RiTimeLine } from "@remixicon/react";
import img from "../../assets/Images/AboutImages/BishopPreaching.webp";
import SecondaryNavbar from "../../Components/SecondaryNavbar/SecondaryNavbar";
const Events = ({ events }) => {
  const eventsArray = Array.isArray(events) ? events : [];

  // Helper function to format date range
  const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    // Calculate the difference in days, including start and end days
    const diffInMs = end ? end.getTime() - start.getTime() : 0;
    const daysDiff = Math.ceil(diffInMs / (1000 * 60 * 60 * 24)) + 1;

    // Check if it's a single-day event or if end date is null/before start date
    if (!end || start.toDateString() === end.toDateString() || daysDiff <= 1) {
      return {
        type: "single",
        day: new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
          start
        ),
        date: start.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        time: new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }).format(start),
      };
    }

    // Multi-day event
    return {
      type: "multi",
      duration: daysDiff,
      startDay: new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
        start
      ),
      startDate: start.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      endDay: new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
        end
      ),
      endDate: end.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      startTime: new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(start),
    };
  };

  return (
    <>
      <SecondaryNavbar />
      <Helmet>
        <title>Community Events & Gatherings</title>
      </Helmet>

      <div className="events_page_section below_navbar">
        {/* <EventsHero/> */}
        <div className="events_page_container container">
          <div className="events_page_hero grid_container">
            <div className="events_page_titles section_headers">
              <h1 className="events_page_section_title hero_title">
                Our inspiring church events
              </h1>
              <p className="events_page_subtitle_text width_80">
                No matter your stage of life, there’s always a next step for
                growing your faith and finding community. Whether big or small,
                we want to help you get involved!
              </p>

              <a
                href="#events_page_grid_section"
                className="btn btn_black_outline"
              >
                {" "}
                view events
              </a>
            </div>

            <div className="events_page_hero_img">
              <img src={img} alt="" />
            </div>
          </div>

          <div
            className="events_page_grid_section"
            id="events_page_grid_section"
          >
            <div className="events_page_grid_titles section_headers">
              <strong className="title_top title_top_purple">events</strong>
              <h2 className="section_title">Upcoming events</h2>
            </div>
            <div className="events_page_grid">
              {eventsArray.length === 0 ? (
                <p className="events_page_no_events">
                  No upcoming events at this time. Check back soon!
                </p>
              ) : (
                eventsArray.map((item) => {
                  // Ensure safe access to event attributes
                  const event = item.attributes || item;
                  const id = item.id || item.documentId;

                  if (!id || !event.eventTitle || !event.eventDate) return null;

                  const imageUrl = event.eventCoverImage?.url
                    ? getImageUrl(event.eventCoverImage.url)
                    : "https://placehold.co/600x400/F7F7F7/333333?text=Event+Image";

                  const dateInfo = formatDateRange(
                    event.eventDate,
                    event.eventEndDate
                  );

                  const renderSummary = () => {
                    let summaryText =
                      "Join us for an inspiring and fun-filled time. Click for more details...";

                    if (Array.isArray(event.eventSummary)) {
                      // Try to extract text from the first paragraph
                      const firstParagraph = event.eventSummary.find(
                        (p) => p.type === "paragraph" && p.children.length > 0
                      );
                      if (firstParagraph) {
                        summaryText =
                          firstParagraph.children
                            .map((child) => child.text)
                            .join(" ")
                            .substring(0, 100) + "..."; // Truncate summary for card
                      }
                    } else if (
                      typeof event.eventSummary === "string" &&
                      event.eventSummary.length > 0
                    ) {
                      summaryText =
                        event.eventSummary.substring(0, 100) + "...";
                    }

                    return summaryText;
                  };

                  return (
                    <NavLink
                      key={id}
                      to={`/church-events/${event.documentId}`}
                      className="events_page_card_link"
                    >
                      <div className="eventspage_card">
                        {/* Image container handles the relative positioning for the badge overlay */}
                        <div className="events_page_image_container">
                          <img
                            src={imageUrl}
                            alt={event.eventTitle}
                            className="events_page_cover_image"
                            width={600}
                            height={400}
                            loading="lazy"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://placehold.co/600x400/333333/F7F7F7?text=Image+Missing";
                            }}
                          />
                          {/* Duration Badge Overlay - only for multi-day events */}
                          {dateInfo.type === "multi" && (
                            <div className="events_page_duration_badge">
                              <RiTimeLine size={20} />
                              <span>{dateInfo.duration} Days</span>
                            </div>
                          )}
                        </div>

                        {/* Card Information - Uniform Hierarchy */}
                        <div className="events_page_info">
                          <h2 className="events_page_title">
                            {event.eventTitle}
                          </h2>

                          {/* Date and Time Metadata Section */}
                          {dateInfo.type === "single" ? (
                            <div className="events_page_meta_section">
                              <div className="events_page_date_time">
                                <RiCalendar2Line size={20} />
                                <span className="events_page_day">
                                  {dateInfo.day}, {dateInfo.date}
                                </span>
                              </div>
                              <div className="events_page_date_time">
                                <RiAlarmFill size={20} />
                                <span>{dateInfo.time}</span>
                              </div>
                            </div>
                          ) : (
                            <div className="events_page_meta_section events_page_meta_multiday">
                              <div className="events_page_date_range">
                                <RiCalendar2Line size={14} />
                                <div className="events_page_date_range_content">
                                  {/* Start Date */}
                                  <span className="events_page_date_value">
                                    {dateInfo.startDay}, {dateInfo.startDate}
                                  </span>
                                  <span className="events_page_date_range_divider">
                                    —
                                  </span>
                                  {/* End Date */}
                                  <span className="events_page_date_value">
                                    {dateInfo.endDay}, {dateInfo.endDate}
                                  </span>
                                </div>
                              </div>
                              <div className="events_page_date_time">
                                <RiAlarmFill size={14} />
                                <span>Starts at {dateInfo.startTime}</span>
                              </div>
                            </div>
                          )}

                          <p className="events_page_summary">
                            {renderSummary()}
                          </p>
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

export default Events;
