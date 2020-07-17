import React from "react";
import {
  BellOutlined,
  MailOutlined,
  MoreOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Dropdown, Avatar, Row, Col, Badge, Input } from "antd";
const { Header } = Layout;
const { Search } = Input;
export default function HeaderBar() {
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
    <Header
      className="site-layout-sub-header-background"
      style={{ padding: 0, backgroundColor: "rgb(15,40,80)" }}
    >
      <Row>
        <Col span={18} style={{ textAlign: "center" }}>
          <Search
            onSearch={(value) => console.log(value)}
            style={{ width: 400, borderRadius: 5 }}
          />
        </Col>

        <Col span={1} style={{ textAlign: "center" }}>
          <Avatar
            style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
            size={52}
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594979356642&di=7468eb82feb7ede61b658e56e104757a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F17%2F20190117230425_eofqv.thumb.700_0.jpg"
          ></Avatar>
        </Col>

        <Col span={2} style={{ textAlign: "center" }}>
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
  );
}
