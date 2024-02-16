import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Clients from "./pages/Clients";
import About from "./pages/About";
import Services from "./pages/Services";
import WhatWeDo from "./pages/WhatWeDo";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Error from "./pages/Error";

import WithScrollback from "./pages/contexts/WithScrollback";

function App() {
 return (
  <>
   <BrowserRouter>
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
   </BrowserRouter>
  </>
 );
}

export default App;
