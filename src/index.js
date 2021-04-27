import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./Components/App";

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(app, container);
