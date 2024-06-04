import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the application within React.StrictMode for highlighting potential problems
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
