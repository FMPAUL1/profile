import React from "react";
//  import LinkedInIcon from "@material-ui/icons/LinkedIn";
//  import EmailIcon from "@material-ui/icons/Email";
//  import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import me from "../assets/myoffice.jpg"
function Home() {
  return (
      <div className="home">
        
      <div className="about">
        <h2> HI , MY NAME IS ABEL PAUL</h2> 
       
        <div className="prompt">
        <img src={me} alt="mysel"/>
          <p>A software developer/ Data Analyst with a passion for learning and creating.</p>
          
          <a href="https://www.github.com/fmpaul1">  <GitHub/></a>
      <a href="https://www.linkedin.com/in/paul-abel-616046209">  <LinkedIn/></a>
       <a href="mailto:abelpaul12@gmail.com"><Email/></a> 
        </div>
      </div>
      <div style={{marginTop:'5rem'}} className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM,
              BootStrap, MaterialUI, Yarn,  StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
             Django, NodeJS, Java ExpressJS, GraphQL, 
              MySQL, MongoDB,  MYSQLite
            </span>
            <h2>DATA ANALYTICS </h2>
            <span>
              EXCEL, TABLEAU, PANDAS, SQL, 
              MATPLOTLIB, LINEAR REGRESSION,  MODEL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python,PHP</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;