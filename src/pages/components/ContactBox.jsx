import React from "react";

import CallRoundedIcon from "@mui/icons-material/CallRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

function ContactBox() {
 return (
  <div className="row row-gap-3">
   <div className="col-12 animation">
    <p className="contact-chip mt-5">CONTACT US</p>
    <h2 className="contact-heading">
     Get <span>in</span> touch
    </h2>
    <hr className="line-bar" />
   </div>
   <div className="col-12 col-lg-6 d-flex flex-column justify-content-center animation">
    <p className="contact-info">
     <CallRoundedIcon sx={{ fontSize: 20 }} />
     Phone: <br />
     <span>+966 55160 6778, +880 1322660800</span>
    </p>
    <p className="contact-info">
     <CallRoundedIcon sx={{ fontSize: 20 }} />
     Tel: <br />
     <span>011 2442233</span>
    </p>
    <p className="contact-info">
     <EmailRoundedIcon sx={{ fontSize: 20 }} />
     Email: <br />
     <span>parvez.sahidullah@gmail.com</span>
    </p>
    <p className="contact-info">
     <LocationOnRoundedIcon sx={{ fontSize: 20 }} />
     Address: <br />
     <span>
      Riyadh 6181 Abi Al Ala Al Maari, Az Zahra, Riyadh, Saudi Arabia
     </span>
    </p>
   </div>
   <div className="col-12 col-lg-6 animation">
    <iframe
     src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=6181 Abi Al Ala Al Maari, 2952, Az Zahra, Riyadh 12812, Saudi Arabia"
     width="600"
     height="378"
     frameBorder="0"
     style={{ width: "100%" }}
     allowFullScreen=""
    ></iframe>
   </div>
  </div>
 );
}

export default ContactBox;
