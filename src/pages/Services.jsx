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
         <TagIcon />
         <h3>Manpower Supply</h3>
         <p>
          Our recruitment service prefers the selection of candidate either by
          oral or convenient test to be coordinated by the employer or his
          endorsed assign. We compose his/their settlement, transport and all
          other keys reinforce required for the reason.
         </p>
         <ul>
          <li>Construction Workers</li>
          <li>Facilities Management</li>
          <li>Engineers</li>
          <li>QA/QC Managers / Supervisors</li>
          <li>QA/QC Inspectors</li>
          <li>Safety Officer/Supervisor</li>
          <li>Adminstrator/Secretery</li>
          <li>Document Controller</li>
          <li>Welders</li>
          <li>Hydrotest Crew</li>
          <li>Bolt Torqueing</li>
          <li>Technicians</li>
          <li>Riggers</li>
          <li>E&I Technicians</li>
          <li>Industrial Electrician</li>
          <li>Pipe Fabricator/Fitter</li>
          <li>Millwright</li>
         </ul>
        </div>
       </div>
       <div className="col-12 col-lg-4">
        <div className="service-card">
         <ConstructionIcon />
         <h3>Construction</h3>
         <p>
          Construction Sector is thriving in Middle East. With fast paced
          economic growth and rapid improvisation in infrastructure, the demand
          for semi-skilled, skilled and professionals is on a rise in
          construction industry. Our team is specialized in recruiting civil
          construction manpower supply services everywhere in Saudi Arabia.
          <br />
          <br />
          This sector is a key driver for abundant jobs today and in near future
          is poised to become a catalyst for building region’s development. We
          at Muqayseh are the finest provid ers of construction industry talents
          in every scale. With our aim to expand globally, we have succeeded in
          recruiting the best in breed personnel by helping our customer achieve
          their business objectives.
          <br />
          <br />
          With a network of highly talented professional recruiters, industry
          experts Muqayseh Man power Services has cemented its position as a
          leader in Middle Eastern market.
         </p>
        </div>
       </div>
       <div className="col-12 col-lg-4">
        <div className="service-card">
         <DomainIcon />
         <h3>Mechanical Works</h3>
         <p>
          Al-Muqayseh Gen. Cont. Est. includes all piping works necessary to
          provide a complete,functional facility in accordance with the project
          requirements, applicable codes and standards, and project
          specifications to the satisfaction of Clients.
         </p>
         <ul>
          <li>Material storage and Handling</li>
          <li>Fabrication and Welding Works</li>
          <li>Coating (Industrail and Pipelines)</li>
          <li>Bolt Torquing works</li>
          <li>Hydrotesting of piping and Valves</li>
          <li>Installation Works</li>
          <li>Pre-commissioning and Commissioning works</li>
          <li>Material Preservation</li>
          <li>Construction Managemen</li>
          <li>General Contracting</li>
         </ul>
        </div>
       </div>
       <div className="col-12 col-lg-4">
        <div className="service-card">
         <EngineeringIcon />
         <h3>Civil Works</h3>
         <p>
          Building and civil engineering work are living workplaces where the
          prerequisites constantly change. Al-Muqayseh Gen Con Est strives to
          provide good planning and design in providing civil works and building
          works to its Clients.
          <br />
          <br />
          Al Muqayseh Gen Cont Est engineering and construction expertise
          includes traditional disciplines, Civil, Mechanical, Electrical,
          structural engineering as well as process and mechanical design.
          <br />
          <br />
          Al-Muqayseh Gen Cont Est experience in civil works includes concrete
          foundations for plant heavy equipment and petroleum construction civil
          works. Pipe rack fabrication and erection.
          <br />
          <br />
          Al-Muqayseh Gen Cont Est experience in building works includes
          residential apartments and villas, commercial buildings and malls,
          steel structural buildings, plant and refinery building works,
          scaffolding, erection and road construction.
         </p>
        </div>
       </div>
       <div className="col-12 col-lg-4">
        <div className="service-card">
         <EngineeringIcon />
         <h3>Maintenance Works</h3>
         <p>
          During the past three decades, Initial maintenance has become the
          contract cleaning & maintenance contractor of choice in the Saudi
          market. It retains its contracts for an average of Three years, while
          several contracts exceed 4 years of service and some match our
          company’s life span. This bears testimony to the organizations
          excellent service and dedication to its clients.
          <br />
          <br />
          Initial Contract Cleaning commits to deliver a reliable and
          consistently efficient service. All staff members are legally
          sponsored, well housed, neatly uniformed, insured, medically well
          cared for and are transported promptly to their work sites in company
          buses.
          <br />
          <br />
          Because Cleaning Services are one of our core competencies, we
          constantly develop new methods, tools and materials to further improve
          our service. We maintain the highest management to clea4ning staff
          ratios in the market and based on our Global experiences work with
          cleaning processes and shared best practices to continuously improve
          our service.
         </p>
         <ul>
          <li>Cleaning & Maintenance</li>
          <li>Contract Cleaning</li>
          <li>Property Management Services</li>
          <li>Building Contract Maintenance</li>
          <li>High Rise glass Cleaning</li>
          <li>Water Tank Cleaning</li>
          <li>Swimming Pool Cleaning & Maintenance</li>
         </ul>
        </div>
       </div>
       <div className="col-12 col-lg-4">
        <div className="service-card">
         <EngineeringIcon />
         <h3>HVAC and MEP Services</h3>
         <p>
          Initial HVAC & MEP Services offers an extensive range of services to
          suit each client accordingly. We offer a superb MEP & Renovation
          facility including mechanical, electrical, operations and maintenance.
          <br />
          <br />
          We are managed by a professional staff to provide commercial and
          personalized services to our clients. A number of turnkey projects
          have been executed to the complete satisfaction of our valued clients.
          This division is resourceful and possesses a dedicated team to plan
          and execute HVAC & MEP projects anywhere in the Kingdom.
         </p>
         <ul>
          <li>Mechanical, Electrical & Civil Engineering</li>
          <li>HVAC Services</li>
          <li>Operation & Maintenance</li>
          <li>Fire Fighting & Fire Alarms</li>
          <li>Generator Services</li>
          <li>Light Construction</li>
          <li>General Repairs</li>
         </ul>
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
