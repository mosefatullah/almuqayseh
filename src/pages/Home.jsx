import React from "react";
import { Helmet } from "react-helmet";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HeroBanner from "/images/interface/herobanner.jpg";

function Home() {
 return (
  <div className="Home">
   {/*-- __HEAD__ --*/}
   <Helmet>
    <title>Home - Man Power Company</title>
   </Helmet>

   {/*-- __NAVBAR__ --*/}
   <Navbar />

   {/*-- __MAIN__ --*/}
   <main>
    <div>
     <div>
      <div className="container">
       <div className="row">
        <div className="col-12 col-lg-8 d-flex flex-column h-100vh justify-content-center">
         <div className="chip">Connects you with the best workers</div>
         <h1>Unleash the Potential of Your SME with Silicon.V</h1>
         <p>
          We are dedicated to helping you find the best workers for your
          business. We have a wide range of workers to choose from. We are
          dedicated.
         </p>
         <button className="btn btn-primary">Get Started</button>
        </div>
       </div>
      </div>
     </div>
    </div>
   </main>

   {/*-- __FOOTER__ --*/}
  </div>
 );
}

export default Home;
