import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("renders projects link", () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = getByText(/projects/i);
  expect(linkElement).toBeInTheDocument();
});
