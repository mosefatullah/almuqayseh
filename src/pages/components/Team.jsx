import React from "react";

// Assets
import GroupsIcon from "@mui/icons-material/Groups";

function Team() {
 return (
  <div className="row">
   <div className="intro col-12 animation">
    <p className="team-chip">We are a team of professionals</p>
    <h2 className="team-heading">
     <GroupsIcon
      sx={{
       fontSize: 40,
       opacity: "0.2",
       mr: "10px",
      }}
     />
     Our <span>Team</span>
    </h2>
    <hr className="line-bar" />
    <br />
   </div>
   <div className="col-12">
    <div className="row row-gap-4">
     <div className="col-6 col-lg-4 col-xxl-3">
      <div className="team-card animation">
       <img src="/images/persons/1.jpeg" alt="Team Member" />
       <h3 className="team-name">Aujan Bin Obaid Bin Abu Thaneen</h3>
       <p className="team-title">Managing Director</p>
      </div>
     </div>
     <div className="col-6 col-lg-4 col-xxl-3">
      <div className="team-card animation">
       <img src="/images/persons/2.jpeg" alt="Team Member" />
       <h3 className="team-name">Parvez Shahidullah</h3>
       <p className="team-title">Marketing Specialist</p>
      </div>
     </div>
     <div className="col-6 col-lg-4 col-xxl-3">
      <div className="team-card animation">
       <img src="/images/persons/3.jpg" alt="Team Member" />
       <h3 className="team-name">Mohammad Shahjahan Chanchal</h3>
       <p className="team-title">Planning Operating Manager</p>
      </div>
     </div>
     <div className="col-6 col-lg-4 col-xxl-3">
      <div className="team-card animation">
       <img src="/images/persons/4.jpg" alt="Team Member" />
       <h3 className="team-name">Mohammad Sohel</h3>
       <p className="team-title">Marketing Manager</p>
      </div>
     </div>
     <div className="col-6 col-lg-4 col-xxl-3">
      <div className="team-card animation">
       <img src="/images/persons/5.jpg" alt="Team Member" />
       <h3 className="team-name">Mahdi Hasan Shihab</h3>
       <p className="team-title">Operations Manager</p>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Team;
