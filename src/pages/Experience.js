import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import SchoolIcon from "@material-ui/icons/School";
// import WorkIcon from "@material-ui/icons/Work";
import { Book, School } from "@mui/icons-material";
import { Work } from "@mui/icons-material";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            RIVERS STATE UNIVERSITY, 
          </h3>
          <p> Petroleum Enginnering</p>
        </VerticalTimelineElement>

        <br/>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            ATPTECHHUB 
          </h3>
          
          <h3 className="vertical-timeline-element-subtitle"> WEB DEVELOPER /INSTRUCTOR</h3>
          <br/>
          <ul className="vertical-timeline-element-subtitle">
            <li >Proficient in Django framework, Python, HTML, CSS, JavaScript, React, Express.js, and PHP</li>
          <li> Strong understanding of software development principles, data structures, and algorithms</li>
          <li> Experience in developing and maintaining web applications, RESTful APIs, and database management systems </li>
          <li>Knowledgeable in version control systems like Git and project management tools such as Jira</li>
          <li>Familiarity with software testing methodologies and frameworks.</li>
          <li>Excellent problem-solving and analytical skills </li>
          <li>Effective communication and collaboration abilities within cross-functional teams.</li>
          </ul>
        
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021-2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work/>}
        >
          <h3 className="vertical-timeline-element-title">
            ODYSSEYE
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            SOFTWARE DEVELOPER 
          </h4>
          <br/>
          <ul className="vertical-timeline-element-subtitle" >
            <li> Developed and maintained robust web applications using Django, Python, HTML, CSS, JavaScript, and React </li>
            <li> Collaborated with a team of developers to design and implement scalable and efficient software solutions</li>
            <li>Integrated front-end designs with back-end functionality to create seamless user experiences </li>
            <li>Implemented RESTful APIs and database management systems for efficient data handling and retrieval </li>
            <li> Conducted thorough testing and debugging to ensure software functionality and mitigate potential issues</li>
            <li> Worked closely with the QA team to identify and address software defects, ensuring high-quality deliverables. </li>
            <li>Utilized Git for version control and collaborated with team members through code reviews and feedback sessions </li>
            <li> Kept up-to-date with emerging technologies and industry trends, proposing innovative solutions and improving development processes</li>
            <li> Gathered requirements from stakeholders, provided technical expertise, and delivered high-quality solutions within project timelines </li>
          </ul>
          <p>Nysc</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="-"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Book />}
        >
          <h3 className="vertical-timeline-element-title">
              CERTIFICATION / LICENCES
             
          </h3>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>
          <ul className="vertical-timeline-element-subtitle">
            <li> PETROLEUM ENGINERRING <p>B.TECH  </p></li>
            <li>NATIONAL YOUTH SERVICE CORPS <p>2022</p> </li>
            <li> DATABASES AND SQL <p>Coursera</p></li>
            <li> PYTHON FOR DATA SCIENCE<p>Coursera</p></li>
            <li> PYTHON FOR DATA SCIENCE ,AI AND DEVELOPMENT <p>Coursera</p></li>
            <li> FULL STACK WEB DEVLOPENT <p>Coursera</p></li>
            
            
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;