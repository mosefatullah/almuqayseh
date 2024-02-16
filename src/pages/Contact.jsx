import React from "react";
import { Helmet } from "react-helmet";
import init from "./utils/animation";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactBox from "./components/ContactBox";

function Contact() {
 React.useEffect(init, []);
 return (
  <div className="Contact">
   {/*-- __HEAD__ --*/}
   <Helmet>
    <title>Contact Us – Al Muqayseh</title>
   </Helmet>

   {/*-- __NAVBAR__ --*/}
   <Navbar />

   {/*-- __MAIN__ --*/}
   <main className="__contact-page">
    {/*-- __CONTACT__ --*/}
    <section className="contact-section" id="contact-us">
     <div className="container pb-5">
      <ContactBox />
     </div>
    </section>
   </main>

   {/*-- __FOOTER__ --*/}
   <Footer />
  </div>
 );
}

export default Contact;
