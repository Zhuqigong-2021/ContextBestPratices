import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BikesProvider } from "./context/BikesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BikesProvider>
      <App />
    </BikesProvider>
  </React.StrictMode>
);
