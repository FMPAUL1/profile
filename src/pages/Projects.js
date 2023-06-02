import React from "react";
import ProjectItem from "../componets/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";
import { GitHub } from "@mui/icons-material";

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
        <h1>

       
        </h1>
      </div>
    </div>
  );
}

export default Projects;