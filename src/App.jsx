import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import About from "./pages/About";
import Services from "./pages/Services";
import WhatWeDo from "./pages/WhatWeDo";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Error from "./pages/Error";

// Assets
import { ArrowCircleUp } from "@mui/icons-material";

// Contexts
import WithScrollback from "./pages/contexts/WithScrollback";

function App() {
 React.useEffect(() => {
  const scrollButton = document.querySelector(".scroll-to-top");
  window.addEventListener("scroll", () => {
   if (window.scrollY > 100) {
    scrollButton.classList.remove("d-none");
   } else {
    scrollButton.classList.add("d-none");
   }
  });
 }, []);
 return (
  <>
   <Routes>
    {/* Defaults */}
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
       <About />
      </WithScrollback>
     }
    />
    <Route
     path="/about/our-team"
     element={
      <WithScrollback>
       <OurTeam />
      </WithScrollback>
     }
    />
    <Route
     path="/about/what-we-do"
     element={
      <WithScrollback>
       <WhatWeDo />
      </WithScrollback>
     }
    />
    <Route
     path="/services"
     element={
      <WithScrollback>
       <Services />
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
       <Contact />
      </WithScrollback>
     }
    />
    <Route
     path="/privacy-policy"
     element={
      <WithScrollback>
       <PrivacyPolicy />
      </WithScrollback>
     }
    />

    {/* Redirects */}
    <Route path="/about" element={<Navigate to="/about-us" />} />
    <Route path="/career" element={<Career />} />
    <Route path="/contact" element={<Navigate to="/contact-us" />} />

    {/* Errors */}
    <Route
     path="*"
     element={
      <WithScrollback>
       <Error />
      </WithScrollback>
     }
    />
   </Routes>

   {/*-- Scroll to Top  --*/}
   <button
    className="btn btn-primary d-none scroll-to-top"
    onClick={() => {
     window.scrollTo(0, 0);
    }}
   >
    <ArrowCircleUp />
   </button>
  </>
 );
}

export default App;
