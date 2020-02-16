import React from "react";

const Project = props => {
  return (
    <span>
      <h2>{props.detail.name}</h2>
      <p>
        {props.detail.completed ? "✓" : ""}
        {props.detail.description}
      </p>
    </span>
  );
};

export default Project;
