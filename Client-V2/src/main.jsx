import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CarOwnershipProvider } from "./context/CarOwnershipContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CarOwnershipProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CarOwnershipProvider>
);
