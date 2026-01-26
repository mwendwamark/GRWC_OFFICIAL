import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./Event.css";
import { Helmet } from "react-helmet";
import { getFullApiUrl, getImageUrl } from "../../Utils/apiConfig";
import { RiCalendar2Line } from "@remixicon/react";
import { RiMapPin2Fill } from "@remixicon/react";
import { RiUser2Line } from "@remixicon/react";
import { RiTimeLine } from "@remixicon/react";
import { RiGoogleFill } from "@remixicon/react";
import { RiMailLine } from "@remixicon/react";
import { RiMicrosoftFill } from "@remixicon/react";
import { RiAppleFill } from "@remixicon/react";
import { RiArrowLeftLine } from "@remixicon/react";
import { RiArrowLeftLongLine } from "@remixicon/react";
import SecondaryNavbar from "../../Components/SecondaryNavbar/SecondaryNavbar";

// Calendar utility functions
const generateGoogleCalendarUrl = (event) => {
  const eventDate = new Date(event.eventDate);
  const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000);

  const formatGoogleDate = (date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, "");
  };

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.eventTitle,
    dates: `${formatGoogleDate(eventDate)}/${formatGoogleDate(endDate)}`,
    details: event.eventSummary || `Event at ${event.eventLocation}`,
    location: event.eventLocation,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

const generateICalUrl = (event) => {
  const eventDate = new Date(event.eventDate);
  const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000);

  const formatICalDate = (date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, "");
  };

  let icalContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `DTSTART:${formatICalDate(eventDate)}`,
    `DTEND:${formatICalDate(endDate)}`,
    `SUMMARY:${event.eventTitle}`,
    `DESCRIPTION:${event.eventSummary || ""}`,
    `LOCATION:${event.eventLocation}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");

  const blob = new Blob([icalContent], { type: "text/calendar;charset=utf-8" });
  return URL.createObjectURL(blob);
};

const generateOutlookUrl = (event) => {
  const eventDate = new Date(event.eventDate);
  const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000);

  const formatOutlookDate = (date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, "");
  };

  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: event.eventTitle,
    startdt: formatOutlookDate(eventDate),
    enddt: formatOutlookDate(endDate),
    body: event.eventSummary || "",
    location: event.eventLocation,
  });

  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
};

const generateYahooCalendarUrl = (event) => {
  const eventDate = new Date(event.eventDate);
  const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000);

  const formatYahooDate = (date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, "");
  };

  const params = new URLSearchParams({
    v: "60",
    title: event.eventTitle,
    st: formatYahooDate(eventDate),
    et: formatYahooDate(endDate),
    desc: event.eventSummary || "",
    in_loc: event.eventLocation,
  });

  return `https://calendar.yahoo.com/?${params.toString()}`;
};

const renderContent = (content) => {
  if (!content || !Array.isArray(content)) return null;

  return content.map((block, index) => {
    switch (block.type) {
      case "list":
        const ListTag = block.format === "ordered" ? "ol" : "ul";
        return (
          <ListTag key={index} className="event_page_content_list">
            {block.children.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.children &&
                  item.children.map((text, textIndex) => (
                    <span
                      key={textIndex}
                      className={text.bold ? "event_page_bold_text" : ""}
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
          <p key={index} className="event_page_content_paragraph">
            {block.children &&
              block.children.map((text, textIndex) => (
                <span
                  key={textIndex}
                  className={text.bold ? "event_page_bold_text" : ""}
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

const Event = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCalendarOptions, setShowCalendarOptions] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          getFullApiUrl(`api/church-events/${id}?populate=*`),
        );

        if (!response.ok) {
          throw new Error("Failed to fetch event details");
        }

        const eventData = await response.json();
        setEvent(eventData.data);
        console.log("Fetched event data:", eventData.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching event details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  const downloadICalFile = (event) => {
    const link = document.createElement("a");
    link.href = generateICalUrl(event);
    link.download = `${event.eventTitle.replace(/\s+/g, "-")}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper function to format date range
  const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    // Calculate the difference in days
    const diffInMs = end ? end.getTime() - start.getTime() : 0;
    const daysDiff = Math.ceil(diffInMs / (1000 * 60 * 60 * 24)) + 1;

    // Check if it's a single-day event
    if (!end || start.toDateString() === end.toDateString() || daysDiff <= 1) {
      return {
        type: "single",
        day: new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
          start,
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
        start,
      ),
      startDate: start.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      endDay: new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
        end,
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

  if (loading)
    return (
      <div className="event_page_loading_container">
        <div className="event_page_loading_spinner"></div>
      </div>
    );
  if (error)
    return <div className="event_page_error_container">Error: {error}</div>;
  if (!event)
    return (
      <div className="event_page_not_found_container">Event not found</div>
    );

  const eventDetails = {
    ...event,
    id: event.id,
  };

  let imageUrl = null;
  if (event && event.eventCoverImage && event.eventCoverImage.url) {
    imageUrl = getImageUrl(event.eventCoverImage.url);
  }

  let leaderImageUrl = null;
  if (event && event.eventLeaderImage && event.eventLeaderImage.url) {
    leaderImageUrl = getImageUrl(event.eventLeaderImage.url);
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const eventDate = new Date(event.eventDate);
  const formattedDay = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(eventDate);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(eventDate);

  // Get date range info
  const dateInfo = formatDateRange(event.eventDate, event.eventEndDate);

  return (
    <>
      <Helmet>
        <title>{eventDetails.eventTitle} | Gospel Revival Wave Church</title>
        <meta
          name="description"
          content={
            eventDetails.eventSummary ||
            `Details about ${eventDetails.eventTitle}`
          }
        />
        <meta property="og:title" content={eventDetails.eventTitle} />
        <meta
          property="og:description"
          content={
            eventDetails.eventSummary ||
            `Join us for ${eventDetails.eventTitle}`
          }
        />
        {imageUrl && <meta property="og:image" content={imageUrl} />}
      </Helmet>
      <SecondaryNavbar />

      <div className="event_page_container below_navbar">
        <div className="event_page_wrapper container">
          {/* Back Button */}
          <NavLink to="/events" className="event_page_back_button ">
            <RiArrowLeftLongLine size={20} />
            <span>Back to Events</span>
          </NavLink>

          {/* Main Content Grid */}
          <div className="event_page_grid">
            {/* Left Column - Main Content */}
            <div className="event_page_main_content">
              {/* Event Title */}
              <h1 className="event_page_title">{eventDetails.eventTitle}</h1>

              {/* Event Image */}
              <div className="event_page_image_container">
                <img
                  src={imageUrl}
                  alt={eventDetails.eventTitle}
                  className="event_page_image"
                />
              </div>

              {/* Event Description */}
              {eventDetails.eventSummary && (
                <div className="event_page_description_section">
                  <p className="event_page_description">
                    {eventDetails.eventSummary}
                  </p>
                </div>
              )}

              {/* Vertical Separator */}
              <div className="event_page_separator"></div>

              {/* Event Details Content */}
              <div className="event_page_details_section">
                {renderContent(eventDetails.eventDetails)}
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="event_page_sidebar">
              <div className="event_page_sidebar_sticky">
                {/* Event Details Card */}
                <div className="event_page_details_card">
                  <h2 className="event_page_details_heading">Event Details</h2>

                  {/* Overview Section */}
                  <div className="event_page_overview_section">
                    <h3 className="event_page_section_label">OVERVIEW</h3>

                    {/* Recurrence */}
                    <div className="event_page_info_row">
                      <span className="event_page_info_label">Recurrence</span>
                      <span className="event_page_info_value">
                        {formattedDay}
                      </span>
                    </div>

                    {/* Date Display - Single or Multi-day */}
                    {dateInfo.type === "single" ? (
                      <>
                        <div className="event_page_info_row">
                          <span className="event_page_info_label">Date</span>
                          <span className="event_page_info_value">
                            {formatDate(eventDetails.eventDate)}
                          </span>
                        </div>
                        <div className="event_page_info_row">
                          <span className="event_page_info_label">Time</span>
                          <span className="event_page_info_value">
                            {formattedTime}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="event_page_info_row">
                          <span className="event_page_info_label">
                            Duration
                          </span>
                          <span className="event_page_info_value">
                            {dateInfo.duration} Days
                          </span>
                        </div>
                        <div className="event_page_info_row">
                          <span className="event_page_info_label">
                            Start Date
                          </span>
                          <span className="event_page_info_value">
                            {dateInfo.startDay}, {dateInfo.startDate}
                          </span>
                        </div>
                        <div className="event_page_info_row">
                          <span className="event_page_info_label">
                            End Date
                          </span>
                          <span className="event_page_info_value">
                            {dateInfo.endDay}, {dateInfo.endDate}
                          </span>
                        </div>
                        <div className="event_page_info_row">
                          <span className="event_page_info_label">
                            Start Time
                          </span>
                          <span className="event_page_info_value">
                            {dateInfo.startTime}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Location Section */}
                  <div className="event_page_location_section">
                    <h3 className="event_page_section_label">LOCATION</h3>
                    <div className="event_page_location_content">
                      <RiMapPin2Fill className="event_page_location_icon" />
                      <span className="event_page_location_text">
                        {eventDetails.eventLocation}
                      </span>
                    </div>
                  </div>

                  {/* Point of Contact */}
                  {eventDetails.eventLeader && (
                    <div className="event_page_contact_section">
                      <h3 className="event_page_section_label">
                        POINT OF CONTACT
                      </h3>
                      <div className="event_page_contact_card">
                        {leaderImageUrl ? (
                          <img
                            src={leaderImageUrl}
                            alt={eventDetails.eventLeader}
                            className="event_page_contact_image"
                          />
                        ) : (
                          <div className="event_page_contact_placeholder">
                            <RiUser2Line size={24} />
                          </div>
                        )}
                        <div className="event_page_contact_info">
                          <span className="event_page_contact_name">
                            {eventDetails.eventLeader}
                          </span>
                          <span className="event_page_contact_role">
                            Event Coordinator
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Calendar Section */}
                  <div className="event_page_calendar_section">
                    {!showCalendarOptions ? (
                      <button
                        className="event_page_add_calendar_button"
                        onClick={() => setShowCalendarOptions(true)}
                      >
                        Add to Calendar
                      </button>
                    ) : (
                      <div className="event_page_calendar_options">
                        <h4 className="event_page_calendar_heading">
                          Select Calendar
                        </h4>
                        <div className="event_page_calendar_buttons">
                          <a
                            href={generateGoogleCalendarUrl(eventDetails)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="event_page_calendar_button event_page_calendar_google"
                          >
                            <RiGoogleFill size={18} />
                            <span>Google</span>
                          </a>
                          <a
                            href={generateOutlookUrl(eventDetails)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="event_page_calendar_button event_page_calendar_outlook"
                          >
                            <RiMicrosoftFill size={18} />
                            <span>Outlook</span>
                          </a>
                          <a
                            href={generateYahooCalendarUrl(eventDetails)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="event_page_calendar_button event_page_calendar_yahoo"
                          >
                            <RiMailLine size={18} />
                            <span>Yahoo</span>
                          </a>
                          <button
                            onClick={() => downloadICalFile(eventDetails)}
                            className="event_page_calendar_button event_page_calendar_apple"
                          >
                            <RiAppleFill size={18} />
                            <span>Apple</span>
                          </button>
                        </div>
                        <button
                          className="event_page_calendar_cancel_button"
                          onClick={() => setShowCalendarOptions(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
