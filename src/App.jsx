import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Clients from "./pages/Clients";

import WithScrollback from "./pages/contexts/WithScrollback";

function App() {
  React.useEffect(() => {
    const scrollAnimation = function () {
      let element = document.querySelectorAll(".animation");
      function fadeIn(elem) {
        if (elem == null) return;
        var distInView = elem.getBoundingClientRect().top - window.innerHeight;
        if (distInView) {
          elem.classList.add("__animation");
          if (distInView < 0) {
            elem.classList.add("active");
          } else {
            elem.classList.remove("active");
          }
        }
      }
      window.addEventListener("scroll", function () {
        for (var i = 0; i < element.length; i++) {
          if (typeof element[i] == "undefined") continue;
          fadeIn(element[i]);
        }
      });
    };
    scrollAnimation();
  }, []);
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
