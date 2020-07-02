import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout, Menu, Dropdown, Avatar, Row, Col, Badge, Input } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BellOutlined,
  MailOutlined,
  MoreOutlined,
  DownOutlined,
} from "@ant-design/icons";
import Home from "./Views/Home";
const { Header, Content, Sider } = Layout;
const { Search } = Input;
function App() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
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
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0, backgroundColor: "rgb(15,40,80)" }}
          >
            <Row>
              <Col span={18} style={{ textAlign: "center" }}>
                <Search
                  // placeholder="input search text"
                  onSearch={(value) => console.log(value)}
                  style={{ width: 400, borderRadius: 5 }}
                />
              </Col>

              <Col span={1}>
                <Avatar
                  style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
                >
                  W
                </Avatar>
              </Col>

              <Col span={2}>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                    style={{ color: "#fff" }}
                    href="#!"
                  >
                    王小天 <DownOutlined style={{ paddingLeft: 10 }} />
                  </a>
                </Dropdown>
              </Col>

              <Col span={1}>
                <Badge count={5} style={{ backgroundColor: "#3b9bf8" }}>
                  <BellOutlined style={{ color: "#fff", fontSize: 24 }} />
                </Badge>
              </Col>

              <Col span={1}>
                <Badge count={7} style={{ backgroundColor: "#3b9bf8" }}>
                  <MailOutlined style={{ color: "#fff", fontSize: 24 }} />
                </Badge>
              </Col>
              <Col span={1}>
                <MoreOutlined style={{ color: "#fff", fontSize: 24 }} />
              </Col>
            </Row>
          </Header>
          <Content
            className="site-layout-background"
            style={{ backgroundColor: "rgb(26,50,96)", minHeight: "1013px",padding:'24px' }}
          >
            <Route exact path="/" component={Home} />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
