import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Spin } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import Home from "./Views/Home";
import Data from "./Views/workingTasks/Data";
import HeaderBar from "./components/HeaderBar";
import ClockIn from "./Views/ClockIn";
import UserProfile from "./Views/workingTasks/UserProfile";
import WorkingInformation from "./Views/workingPaper/WorkingInformation";
import SetUp from "./Views/SetUp";
import WorkRecord from "./Views/WorkRecord";
import Apply from "./Views/Apply";
import AllMembers from "./Views/mailList/AllMembers";
import DepartmentMembers from "./Views/mailList/DepartmentMembers";
const { Content, Sider } = Layout;
const { SubMenu } = Menu;
function App(props) {
  const [logOut, setLogOut] = useState(false);
  const logOutfn = async () => {
    setLogOut(true);
    await setTimeout(() => {
      setLogOut(false);
      props.history.push("/login");
    }, 1000);
  };
  return (
    <Router>
      {logOut ? (
        <div className="example">
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: 88 }} spin />}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />

          <span
            style={{
              position: "absolute",
              top: "60%",
              left:'50%',
              transform: "translate(-50%,-50%)",
            }}
          >
            登出中...
          </span>
        </div>
      ) : (
        <Layout style={{ width: "100%", height: "100%" }}>
          <Sider
            width={200}
            className="site-layout-background"
            style={{ backgroundColor: "rgb(15,40,80)" }}
          >
            <div
              style={{
                backgroundColor: "rgb(26,50,96)",
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img src={logo} className="App-logo" alt="logo" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#fff",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 18 }}>樱桃科技</span>
                <span>cherry</span>
              </div>
            </div>
            <Menu
              style={{
                backgroundColor: "rgb(15,40,80)",
                color: "#fff",
                border: 0,
              }}
              mode="inline"
              defaultSelectedKeys={["1"]}
            >
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/" />
                首页
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UploadOutlined />
                    <span>工作文件</span>
                  </span>
                }
              >
                <Menu.Item
                  key="2"
                  style={{
                    backgroundColor: "rgb(15,40,80)",
                    margin: 0,
                    color: "#fff",
                  }}
                >
                  <Link to="/workingInformation" />
                  工作资料
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <UploadOutlined />
                    <span>工作任务</span>
                  </span>
                }
              >
                <Menu.Item
                  key="3"
                  style={{
                    backgroundColor: "rgb(15,40,80)",
                    margin: 0,
                    color: "#fff",
                  }}
                >
                  <Link to="/data" />
                  数据
                </Menu.Item>
                <Menu.Item
                  key="4"
                  style={{
                    backgroundColor: "rgb(15,40,80)",
                    margin: 0,
                    color: "#fff",
                  }}
                >
                  <Link to="/UserProfile" />
                  用户资料
                </Menu.Item>
                {/* <Menu.Item
                key="5"
                style={{
                  backgroundColor: "rgb(15,40,80)",
                  margin: 0,
                  color: "#fff",
                }}
              >
                任务列表
              </Menu.Item> */}
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <UploadOutlined />
                    <span>通讯录</span>
                  </span>
                }
              >
                <Menu.Item
                  key="6"
                  style={{
                    backgroundColor: "rgb(15,40,80)",
                    margin: 0,
                    color: "#fff",
                  }}
                >
                  <Link to="/DepartmentMembers" />
                  部门成员
                </Menu.Item>
                <Menu.Item
                  key="7"
                  style={{
                    backgroundColor: "rgb(15,40,80)",
                    margin: 0,
                    color: "#fff",
                  }}
                >
                  <Link to="/AllMembers" />
                  所有成员
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="8" icon={<UserOutlined />}>
                <Link to="/workRecord" />
                工作记录
              </Menu.Item>
              <Menu.Item key="9" icon={<UserOutlined />}>
                考勤打卡
                <Link to="/ClockIn" />
              </Menu.Item>
              <Menu.Item key="10" icon={<UserOutlined />}>
                <Link to="/SetUp" />
                设置
              </Menu.Item>
              <Menu.Item key="11" icon={<UserOutlined />} onClick={logOutfn}>
                退出
              </Menu.Item>
              <Menu.Item key="12" icon={<UserOutlined />}>
                <Link to="/apply" />
                申请
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <HeaderBar />
            <Content
              className="site-layout-background"
              style={{
                backgroundColor: "rgb(26,50,96)",
                minHeight: "1013px",
                padding: "24px",
              }}
            >
              <Route exact path="/" component={Home} />
              <Route exact path="/data" component={Data} />
              <Route exact path="/ClockIn" component={ClockIn} />
              <Route exact path="/UserProfile" component={UserProfile} />
              <Route
                exact
                path="/workingInformation"
                component={WorkingInformation}
              />
              <Route exact path="/setUp" component={SetUp} />
              <Route exact path="/workRecord" component={WorkRecord} />
              <Route
                exact
                path="/DepartmentMembers"
                component={DepartmentMembers}
              />
              <Route exact path="/AllMembers" component={AllMembers} />
              <Route exact path="/apply" component={Apply} />
            </Content>
          </Layout>
        </Layout>
      )}
    </Router>
  );
}

export default App;
