import React from "react";
import { BrowserRouter, Routes, Route, useHref } from "react-router-dom";

import Home from "./pages/Home";
import Clients from "./pages/Clients";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
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
        <Home />
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
