import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import cookieCutter from "cookie-cutter";
import config from './services/config.json';
axios.defaults.baseURL = config.serviceUrl;
axios.defaults.headers.common["Authorization"] = cookieCutter.get("token");
axios.defaults.headers.post["Content-Type"] = "application/json";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
