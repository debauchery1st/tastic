import React, { useState, useEffect } from "react";
import Project from "./Project";
import apiWithAxios from "../utils/apiWithAxios";
import "./style/projects.css";

const api = apiWithAxios();

const Projects = props => {
  const [state, setState] = useState({
    status: undefined,
    projects: [],
    new: false,
    editing: { name: "", description: "" }
  });
  // const [projects, setProjects] = useState([]);
  useEffect(() => {
    if (state.status === undefined) {
      setState({ ...state, status: 0 });
      api
        .get("/projects")
        .then(res => setState({ ...state, projects: res.data, status: 1 }))
        .catch(err => console.log(err));
    }
  }, [state]);

  const spinner = (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  const handleSubmit = e => {
    e.preventDefault();
    setState({ ...state, new: !state.new });
  };

  const handleChange = e => {
    e.preventDefault();
    setState({
      ...state,
      editing: {
        ...state.editing,
        [e.currentTarget.name]: e.currentTarget.value
      }
    });
  };
  return (
    <>
      <h1>Projects</h1>
      <button
        className="new-project"
        onClick={() => setState({ ...state, new: !state.new })}
      >
        new
      </button>

      {state.new ? (
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <input
              className="form-control"
              name="name"
              placeholder="project name"
              value={state.editing.name}
              onChange={handleChange}
            />
            <textarea
              className="form-control"
              name="description"
              value={state.editing.description}
              onChange={handleChange}
              rows="4"
              placeholder="description"
            />
            <button className="submit-project">submit</button>
          </div>
        </form>
      ) : (
        ""
      )}
      {state.status === 1
        ? state.projects.map(proj => <Project key={proj.id} detail={proj} />)
        : spinner}
    </>
  );
};

export default Projects;
