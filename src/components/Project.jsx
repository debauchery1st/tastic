import React from "react";
import "./style/project.css";
const Project = props => {
  return (
    <div className="card bg-light mb-3 project">
      <div className="card-header">{props.detail.completed ? "✓" : "todo"}</div>
      <div className="card-body">
        <h5 className="card-title">{props.detail.name}</h5>
        <p className="card-text">{props.detail.description}</p>
      </div>
    </div>
  );
};

export default Project;
