import React from "react";
import {
  Menu,
  Dropdown,
  Button,
  Row,
  Col,
  Input,
  List,
  Avatar,
  Tabs,
} from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
const { Search } = Input;
const { TabPane } = Tabs;
export default function DepartmentMembers() {
  const data = [
    {
      title: "Ant",
    },
    {
      title: "Design",
    },
    {
      title: "Title 3",
    },
    {
      title: "4sx",
    },
  ];
  const Card = (config) => {
    return (
      <div
        style={{
          borderRadius: 15,
          height: config.height,
          width: "100%",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100px",
            color: "#fff",
            fontSize: 15,
            lineHeight: "100px",
            backgroundImage:
              "linear-gradient(to right, rgb(135,34,216),rgb(130,35,191),rgb(139,34,188), rgb(160,35,173))",
          }}
        >
          {config.title}
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(1,13,37)",
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
          }}
        >
          {config.children}
        </div>
      </div>
    );
  };
  function callback(key) {
    console.log(key);
  }
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        joho
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        item
      </Menu.Item>
    </Menu>
  );
  return (
    <div className='departmentMembers'>
      <Card
        height={948}
        title={
          <Row>
            <Col span={1}>通讯录</Col>
            <Col span={1}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <Button>
                  Button <DownOutlined />
                </Button>
              </Dropdown>
            </Col>
            <Col span={2} offset={18}>
              <Search
                placeholder="用户名/手机"
                onSearch={(value) => console.log(value)}
                style={{ width: 200, borderRadius: 5 }}
              />
            </Col>
          </Row>
        }
      >
        <Row style={{ backgroundColor: "rgb(15,40,80)", height: "100%" }}>
          <Col
            span={6}
            style={{
              backgroundColor: "rgb(1,13,37)",
              height: "100%",
              borderRight: "12px solid rgb(15,40,80)",
            }}
          >
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                  style={{textAlign:'left'}}
                    avatar={
                      <Avatar src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594979356642&di=7468eb82feb7ede61b658e56e104757a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F17%2F20190117230425_eofqv.thumb.700_0.jpg" size={64} style={{marginLeft:30}}/>
                    }
                    title={
                      <a href="https://ant.design" style={{ color: "#fff" }}>
                        {item.title}
                      </a>
                    }
                    description={
                      <span style={{ color: "#fff" }}>
                        Ant Design, a design language 
                      </span>
                    }
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col
            span={18}
            style={{ backgroundColor: "rgb(1,13,37)", height: "100%" }}
          >
            <Row style={{ height: "100%" }}>
              <Col span={18}>
                <div
                  style={{
                    height: "750px",
                    width: "100%",
                    // border: "1px solid #fff",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "rgb(15,40,80)",
                    height: 40,
                    width: "90%",
                    borderRadius: 5,
                    marginLeft: "5%",
                    marginTop: "30px",
                    display:'flex'
                  }}
                >
                  <Input
                    style={{ border: 0, background: "transparent",marginTop:5 }}
                    // placeholder="请输入要修改的账号"
                    // suffix={<div>发送</div>}
                  />
                  <Button style={{backgroundColor:'transparent',color:'#fff',border:0,marginTop: 2}}>发送</Button>
                </div>
              </Col>
              <Col span={6} style={{ boxShadow:'0 2px 1px 2px rgb(0,10,34)' }}>
                <div
                  style={{
                    color: "#fff",
                    height: "30%",
                  }}
                >
                  <Avatar
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594979356642&di=7468eb82feb7ede61b658e56e104757a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F17%2F20190117230425_eofqv.thumb.700_0.jpg"
                    size={88}
                    style={{ marginTop: "20%" }}
                  />
                  <div style={{ marginTop: 5 }}>韩乐</div>
                  <div style={{ marginTop: 5 }}>销售部</div>
                  <div style={{ marginTop: 25 }}>
                    <span>1</span>
                    <span>1</span>
                    <span>1</span>
                  </div>
                </div>
                <div style={{ height: "70%" }}>
                  <Tabs
                    defaultActiveKey="1"
                    onChange={callback}
                    style={{ color: "#fff", textAlign: "left" }}
                    centered
                  >
                    <TabPane
                      tab="同事信息"
                      key="1"
                      style={{ padding: "0 50px" }}
                    >
                      <div>
                        <div style={{ color: "rgb(141,142,149)" }}>
                          企业/组织:
                        </div>
                        <div>樱桃科技有限公司</div>
                      </div>
                      <div style={{ marginTop: "50px" }}>
                        <div style={{ color: "rgb(141,142,149)" }}>
                          手机/电话:
                        </div>
                        <div>+8613323238989</div>
                      </div>
                      <div style={{ marginTop: "50px" }}>
                        <div style={{ color: "rgb(141,142,149)" }}>邮箱:</div>
                        <div>fbia@mm.com</div>
                      </div>
                    </TabPane>
                    <TabPane tab="对外名片" key="2">
                      Content of Tab Pane 2
                    </TabPane>
                  </Tabs>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
