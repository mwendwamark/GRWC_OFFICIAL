import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/"></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
