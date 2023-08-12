import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GeneralInformation from "./GeneralInformation.jsx";
import GeneralInformationBetter from "./GeneralInformationBetter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeneralInformationBetter />
  </React.StrictMode>
);
