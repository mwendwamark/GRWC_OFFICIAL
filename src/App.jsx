import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Events from "./Pages/Events/Events";
import Event from "./Pages/Event/Event";
import { getFullApiUrl } from "./Utils/apiConfig";
import useFetch from "./Hooks/useFetch";
import About from "./Pages/About/About";
import Sermons from "./Pages/Sermons/Sermons";
import Sermon from "./Pages/Sermon/Sermon";

const App = () => {
  const {
    loading: announcementsLoading,
    error: announcementsError,
    data: announcementsData,
  } = useFetch(getFullApiUrl("api/announcements"));

  const {
    loading: eventsLoading,
    error: eventsError,
    data: eventsData,
  } = useFetch(getFullApiUrl("api/church-events?populate=*"));

  const {
    loading: sermonsLoading,
    error: sermonsError,
    data: sermonsData,
  } = useFetch(getFullApiUrl("api/sermons?populate=*"));
  // Check if any data is still loading
  if (announcementsLoading || eventsLoading || sermonsLoading) {
    return <p className="loading-message">Loading...</p>;
  }

  return (
    <>
      <main>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/"></Route>
            <Route element={<About />}  path="/about"/>
            <Route
              path="/events"
              element={<Events events={eventsData?.data} />}
            />
            <Route path="/church-events/:id" element={<Event />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/sermons/:id" element={<Sermon />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
