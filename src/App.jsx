import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Events from "./Pages/Events/Events";
import Event from "./Pages/Event/Event";
import { getFullApiUrl } from "./Utils/apiConfig";
import useFetch from "./Hooks/useFetch";

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

  // Display any errors
  if (announcementsError) {
    console.error("Error loading announcements:", announcementsError);
  }

  if (eventsError) {
    console.error("Error loading events:", eventsError);
  }

  console.log("Sermons data:", sermonsData);
  if (sermonsError) {
    console.error("Error loading sermons:", sermonsError);
  }

  return (
    <>
      <main>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/"></Route>
            <Route
              path="/events"
              element={<Events events={eventsData?.data} />}
            />
            <Route path="/church-events/:id" element={<Event />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
