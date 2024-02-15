import React from "react";
import { Helmet } from "react-helmet";
import init from "./utils/animation";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Team from "./components/Team";

function OurTeam() {
 React.useEffect(init, []);
 return (
  <div className="OurTeam">
   {/*-- __HEAD__ --*/}
   <Helmet>
    <title>Our Team - Al Muqayseh General Contracting Est.</title>
   </Helmet>

   {/*-- __NAVBAR__ --*/}
   <Navbar />

   {/*-- __MAIN__ --*/}
   <main className="__ourteam-page">
    {/*-- __TEAM__ --*/}
    <section className="team-section">
     <div className="container">
      <Team />
     </div>
    </section>
   </main>

   {/*-- __FOOTER__ --*/}
   <Footer />
  </div>
 );
}

export default OurTeam;
