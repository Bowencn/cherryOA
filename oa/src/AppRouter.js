import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import App from "./App";
import Login from "./Views/Login";

export default function AppRouter() {
  const [adminInfo, setAdminInfo] = useState();
  useEffect(() => {});
  return (
    <Router>
      {adminInfo ? <Redirect to="/" /> : <Redirect to="/login" />}
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
    </Router>
  );
}
