import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import zhCN from "antd/es/locale/zh_CN";
import Router from "./AppRouter";
// import moment from "moment";
// import "moment/locale/zh-cn";
// moment.locale("zh-cn");
ReactDOM.render(
  // <React.StrictMode>
  <ConfigProvider locale={zhCN}>
    <Router />
  </ConfigProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
