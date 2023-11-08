import React from "react";
import ReactDOM from "react-dom/client";
import "./css/utilities.css";
import "./css/utilities.css";
import "./css/reset.css";
import "./css/main.css";
import "../src/css/noto-san.css";
import "../src/css/theme.css";
import "../src/css/typography.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
