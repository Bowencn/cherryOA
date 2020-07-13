import React from "react";

import {
  Row,
  Col,
  Table,
  Form,
  Input,
  Button,
  Timeline,
  Badge,
  Avatar,
} from "antd";

export default function SetUp() {
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
            height: "50px",
            color: "#fff",
            fontSize: 15,
            lineHeight: "50px",
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
  return (
    <div className="setup">
      <Row gutter={[24, 0]}>
        <Col span={10}>
          <div
            style={{
              //   border: "1px solid black",
              height: 940,
              backgroundColor: "#010d24",
              borderRadius: 10,
            }}
          >
            <div style={{ height: "30%", position: "relative" }}>
              <Button
                type="primary"
                style={{ position: "absolute", top: "14%", left: "24%" }}
              >
                修改头像
              </Button>
              <Avatar
                style={{
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                }}
                size={188}
              >
                W
              </Avatar>
            </div>
            <div
              style={{
                padding: "20px 40px",
                // borderRadius: 10,
                width: "100%",
                // border: "1px solid #fff",
              }}
            >
              <div
                style={{
                  borderRadius: 10,
                  height: 300,
                  backgroundColor: "rgb(26, 50, 96)",
                  overflow: "hidden",
                }}
              >
                {[
                  { key: "姓名", value: "罗世杰" },
                  { key: "昵称", value: "游戏大王" },
                  { key: "年龄", value: "26岁" },
                  { key: "邮箱", value: "133222@qq.com" },
                  { key: "职位", value: "销售部主管" },
                ].map((item) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: "#fff",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgb(66,148,248)",
                        padding: "20px 20px 20px 0px",
                        width: "17%",
                        textAlign: "right",
                      }}
                    >
                      <span>姓名:</span>
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgb(26, 50, 96)",
                        padding: "20px 0px 20px 10px",
                        width: "80%",
                        textAlign: "left",
                      }}
                    >
                      <span>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                padding: "20px 40px",
                // borderRadius: 10,
                width: "100%",
                // border: "1px solid #fff",
              }}
            >
              <div
                style={{
                  borderRadius: 10,
                  height: 60,
                  backgroundColor: "rgb(26, 50, 96)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    // borderRadius: 10,
                    display: "flex",
                    flexDirection: "row",
                    color: "#fff",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgb(66,148,248)",
                      padding: "20px 20px 20px 0px",
                      width: "17%",
                      textAlign: "right",
                    }}
                  >
                    <span>修改账号:</span>
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(26, 50, 96)",
                      padding: "15px 0px 20px 10px",
                      width: "80%",
                      textAlign: "left",
                    }}
                  >
                    <Input
                      style={{ border: 0, background: "transparent" }}
                      placeholder="请输入要修改的账号"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  borderRadius: 10,
                  height: 60,
                  backgroundColor: "rgb(26, 50, 96)",
                  overflow: "hidden",
                  marginTop: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    color: "#fff",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgb(66,148,248)",
                      padding: "20px 20px 20px 0px",
                      width: "17%",
                      textAlign: "right",
                    }}
                  >
                    <span>记住密码:</span>
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgb(26, 50, 96)",
                      padding: "15px 0px 20px 10px",
                      width: "80%",
                      textAlign: "left",
                    }}
                  >
                    <Input
                      style={{ border: 0, background: "transparent" }}
                      placeholder="请输入原密码"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{textAlign:'center',marginTop:30}}>
              <Button
                type="primary"
                style={{ borderRadius:5 }}
              >
                确认
              </Button>
              <Button
                type="primary"
                style={{ borderRadius:5,marginLeft:80 }}
              >
                取消
              </Button>
            </div>
          </div>
        </Col>
        <Col span={14}>
          <Row gutter={[0, 24]}>
            <Col span={24}>
              <Card
                height={458}
                headerStyle={{
                  backgroundImage:
                    "linear-gradient(to right, rgb(135,34,216),rgb(130,35,191),rgb(139,34,188), rgb(160,35,173))",
                  height: 80,
                }}
                title={
                  <div>
                    <span>个人资料编辑</span>
                  </div>
                }
              ></Card>
            </Col>
            <Col span={24}>
              <Card
                height={458}
                headerStyle={{
                  backgroundImage:
                    "linear-gradient(to right, rgb(135,34,216),rgb(130,35,191),rgb(139,34,188), rgb(160,35,173))",
                  height: 80,
                }}
                title={
                  <div>
                    <span>部门分组</span>
                  </div>
                }
              ></Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
