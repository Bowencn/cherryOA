import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import App from "./App";
import axios from "axios";
import Login from "./Views/Login";
import conf from "./server.conf";

export default function AppRouter() {
  const [adminInfo, setAdminInfo] = useState();
  useEffect(() => {
    const login = async (values) => {
      const res = await axios.post(`${conf.address}/api/login`, values);
      setAdminInfo(res.data.data.entity);
    };
    let userIdCache = window.localStorage.getItem("user-id");
    if (userIdCache) {
      login();
    } else {
      setAdminInfo(false);
    }
  },[]);
  return (
    <Router>
      {adminInfo ? <Redirect to={{pathname:"/",query:adminInfo}} /> : <Redirect to="/login" />}
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
    </Router>
  );
}
