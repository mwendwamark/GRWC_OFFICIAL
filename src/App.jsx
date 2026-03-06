import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Events from "./Pages/Events/Events";
import Event from "./Pages/Event/Event";
import About from "./Pages/About/About";
import Sermons from "./Pages/Sermons/Sermons";
import Sermon from "./Pages/Sermon/Sermon";
import NotFound from "./Pages/404/NotFound";
import Visit from "./Pages/Visit/Visit";
import Footer from "./Components/Footer/Footer";

// ── Existing Ministries ──────────────────────────────────────────────────────
import Mens from "./Pages/Ministries/Mens/Mens";
import SundaySchool from "./Pages/Ministries/SundaySchool/SundaySchool";
import Youngsters from "./Pages/Ministries/Youngsters/Youngsters";
import Women from "./Pages/Ministries/Women/Women";
import Choir from "./Pages/Ministries/Choir/Choir";

// ── New Ministries ───────────────────────────────────────────────────────────
import YouthFellowship from "./Pages/Ministries/YouthFellowship/YouthFellowship";
import Evangelism from "./Pages/Ministries/Evangelism/Evangelism";
import Discipleship from "./Pages/Ministries/Discipleship/Discipleship";
import Intercession from "./Pages/Ministries/Intercession/Intercession";
import Ushering from "./Pages/Ministries/Ushering/Ushering";
import Security from "./Pages/Ministries/Security/Security";
import Protocol from "./Pages/Ministries/Protocol/Protocol";
import Hospitality from "./Pages/Ministries/Hospitality/Hospitality";
import Greeters from "./Pages/Ministries/Greeters/Greeters";
import Welfare from "./Pages/Ministries/Welfare/Welfare";
import CleaningBeautification from "./Pages/Ministries/CleaningBeautification/CleaningBeautification";
import BookshopLibrary from "./Pages/Ministries/BookshopLibrary/BookshopLibrary";
import HomeCellFellowships from "./Pages/Ministries/HomeCellFellowships/HomeCellFellowships";

const App = () => {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route element={<NotFound />} path="*"></Route>
            <Route element={<Home />} path="/"></Route>
            <Route element={<About />} path="/about" />
            <Route path="/events" element={<Events />} />
            <Route path="/church-events/:id" element={<Event />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/sermons/:id" element={<Sermon />} />
            <Route path="/visit_us" element={<Visit />} />

            {/* ── Existing Ministries ─────────────────────────────────────── */}
            <Route path="/ministries/men" element={<Mens />} />
            <Route
              path="/ministries/sunday_school"
              element={<SundaySchool />}
            />
            <Route path="/ministries/kyc" element={<Youngsters />} />
            <Route path="/ministries/women" element={<Women />} />
            <Route path="/ministries/choir" element={<Choir />} />

            {/* ── New Ministries ──────────────────────────────────────────── */}
            <Route path="/ministries/youth" element={<YouthFellowship />} />
            <Route path="/ministries/evangelism" element={<Evangelism />} />
            <Route path="/ministries/discipleship" element={<Discipleship />} />
            <Route path="/ministries/intercession" element={<Intercession />} />
            <Route path="/ministries/ushering" element={<Ushering />} />
            <Route path="/ministries/security" element={<Security />} />
            <Route path="/ministries/protocol" element={<Protocol />} />
            <Route path="/ministries/hospitality" element={<Hospitality />} />
            <Route path="/ministries/greeters" element={<Greeters />} />
            <Route path="/ministries/welfare" element={<Welfare />} />
            <Route
              path="/ministries/cleaning"
              element={<CleaningBeautification />}
            />
            <Route path="/ministries/bookshop" element={<BookshopLibrary />} />
            <Route
              path="/ministries/homecell"
              element={<HomeCellFellowships />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
