import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Projects from "./Projects";
import Actions from "./Actions";
import Home from "./Home";

const DashBoard = props => {
  return (
    <div className="DashBoard m-2">
      <Switch>
        <Route path="/home">
          <Redirect to="/" />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/actions">
          <Actions />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default DashBoard;
