import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/auth_service";
import { firebaseApp } from "./service/firebase";
import { BrowserRouter } from "react-router-dom";

const authService = new AuthService(firebaseApp);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App authService={authService} />
  </BrowserRouter>
);
