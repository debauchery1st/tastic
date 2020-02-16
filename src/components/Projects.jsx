import React, { useState, useEffect } from "react";
import Project from "./Project";
import apiWithAxios from "../utils/apiWithAxios";

const api = apiWithAxios();

const Projects = props => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    api
      .get("/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <h1>Projects</h1>
      {projects.map(proj => (
        <Project key={proj.id} detail={proj} />
      ))}
    </>
  );
};

export default Projects;
