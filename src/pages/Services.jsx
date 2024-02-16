import React from "react";
import { Helmet } from "react-helmet";
import init from "./utils/animation";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Assets
import DomainIcon from "@mui/icons-material/Domain";
import ConstructionIcon from "@mui/icons-material/Construction";
import TagIcon from "@mui/icons-material/Tag";
import EngineeringIcon from "@mui/icons-material/Engineering";

function Services() {
 React.useEffect(init, []);
 return (
  <div className="Services">
   {/*-- __HEAD__ --*/}
   <Helmet>
    <title>Services – Al Muqayseh</title>
   </Helmet>

   {/*-- __NAVBAR__ --*/}
   <Navbar />

   {/*-- __MAIN__ --*/}
   <main className="__service-page">
    {/*-- __HERO__ --*/}
    <section className="hero-section">
     <div className="container">
      <div className="d-flex flex-column align-items-center">
       <h1>Our Services</h1>
       <hr className="line-bar" />
       <p className="hero-paragraph mt-3">
        We provide a wide range of manpower services to meet the specific needs
        of our clients.
       </p>
      </div>
     </div>
    </section>
    {/*-- __SERVICES__ --*/}
    <section className="services-section">
     <div className="container">
      <div className="row row-gap-4">
       <div className="col-12 col-lg-4">
        <div className="service-card">
         <DomainIcon />
         <h3>Manpower Supply</h3>
         <p>
          We provide skilled and unskilled manpower to various industries
          including construction, oil & gas, and hospitality.
         </p>
         <ul>
          <li>
           We provide skilled and unskilled manpower to various industries
          </li>
          <li>including construction, oil & gas, and hospitality.</li>
         </ul>
        </div>
       </div>
       <div className="col-12 col-lg-4">
        <div className="service-card">
         <ConstructionIcon />
         <h3>Recruitment Services</h3>
         <p>
          We offer recruitment services for companies looking to hire
          professionals for their organizations.
         </p>
        </div>
       </div>
       <div className="col-12 col-lg-4">
        <div className="service-card">
         <TagIcon />
         <h3>Training & Development</h3>
         <p>
          We provide training and development programs to enhance the skills of
          our workforce.
         </p>
        </div>
       </div>
      </div>
     </div>
    </section>
   </main>

   {/*-- __FOOTER__ --*/}
   <Footer />
  </div>
 );
}

export default Services;
