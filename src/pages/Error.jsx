import React from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Error() {
 return (
  <div className="Error">
   <Navbar />
   <main className="__error-page">
    <div className="hero-section">
     <div className="container">
      <div className="row">
       <div className="col-12">
        <h1 className="error-code">404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
       </div>
      </div>
     </div>
    </div>
   </main>
   <Footer />
  </div>
 );
}

export default Error;
