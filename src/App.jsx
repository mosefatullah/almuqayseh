import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Clients from "./pages/Clients";
import About from "./pages/About";
import Services from "./pages/Services";
import WhatWeDo from "./pages/WhatWeDo";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

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
