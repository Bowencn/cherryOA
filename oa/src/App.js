import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Home from "./Views/Home";
import HeaderBar from "./components/HeaderBar";
const { Content, Sider } = Layout;
function App() {
  return (
    <Router>
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
              首页
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              工作文件
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              工作任务
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              通讯录
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
              工作记录
            </Menu.Item>
            <Menu.Item key="6" icon={<UserOutlined />}>
              考勤打卡
            </Menu.Item>
            <Menu.Item key="7" icon={<UserOutlined />}>
              设置
            </Menu.Item>
            <Menu.Item key="8" icon={<UserOutlined />}>
              退出
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
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
