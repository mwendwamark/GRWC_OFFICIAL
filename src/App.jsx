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
import NotFound from "./Pages/404/NotFound";
import Visit from "./Pages/Visit/Visit";
import Mens from "./Pages/Ministries/Mens/Mens";
import SundaySchool from "./Pages/Ministries/SundaySchool/SundaySchool";
import Youngsters from "./Pages/Ministries/Youngsters/Youngsters";
import Women from "./Pages/Ministries/Women/Women";
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
          <Routes>
            <Route element={<NotFound />} path="*"></Route>
            <Route element={<Home />} path="/"></Route>
            <Route element={<About />} path="/about" />
            <Route
              path="/events"
              element={<Events events={eventsData?.data} />}
            />
            <Route path="/church-events/:id" element={<Event />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/sermons/:id" element={<Sermon />} />
            <Route path="/visit_us" element={<Visit />} />
            <Route path="/ministries/men" element={<Mens />} />
            <Route path="/ministries/sunday_school" element={<SundaySchool />} />
            <Route path="/ministries/kyc" element={<Youngsters />} />
            <Route path="/ministries/women" element={<Women />} />


          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
