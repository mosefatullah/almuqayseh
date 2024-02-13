import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Clients from "./pages/Clients";

import WithScrollback from "./pages/contexts/WithScrollback";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <WithScrollback>
                <Home />
              </WithScrollback>
            }
          />

          <Route
            path="/about-us"
            element={
              <WithScrollback>
                <Home />
              </WithScrollback>
            }
          />

          <Route
            path="/about/our-team"
            element={
              <WithScrollback>
                <Home />
              </WithScrollback>
            }
          />

          <Route
            path="/services"
            element={
              <WithScrollback>
                <Home />
              </WithScrollback>
            }
          />

          <Route
            path="/clients"
            element={
              <WithScrollback>
                <Clients />
              </WithScrollback>
            }
          />

          <Route
            path="/contact-us"
            element={
              <WithScrollback>
                <Home />
              </WithScrollback>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
