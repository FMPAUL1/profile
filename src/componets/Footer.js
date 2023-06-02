import React from "react";

import "../styles/Footer.css";
import { Email, Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
       
       
      <a href="https://www.github.com/fmpaul1">  <GitHub/></a>
      <a href="https://www.linkedin.com/in/paul-abel-616046209">  <LinkedIn/></a>
       <a href="mailto:abelpaul12@gmail.com"><Email/></a> 
        
      </div>
      <p> &copy; abelpaul12@gmail.com</p>
      <i style={{color:"yellow"}}>PHONE: 07080824483</i>
    </div>
  );
}

export default Footer;