import React, { useEffect, useState } from "react";

import {
  Row,
  Col,
  Table,
  Form,
  Input,
  Button,
  Timeline,
  // TextArea,
  Avatar,
} from "antd";
import axios from "axios";
import conf from "../server.conf";
const { TextArea } = Input;

export default function SetUp(props) {
  const [personalInfo, setPersonalInfo] = useState();
  useEffect(() => {
    let id = props.location.query.id;
    console.log(id);
    const getUserInfo = async () => {
      let res = await axios.get(`${conf.address}/api/user/${id}`);
      console.log(res.data.data.entity);
      setPersonalInfo(res.data.data.entity);
    };
    getUserInfo();
  }, [props]);

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
  const listdata = [
    {
      title: "销售一部调研1组",
    },
    {
      title: "销售一部调研2组",
    },
    {
      title: "销售一部调研3组",
    },
    {
      title: "销售一部调研4组",
    },
  ];
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
                  // backgroundColor: "#fde3cf",
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                }}
                src={personalInfo && conf.address + personalInfo.userimg}
                size={188}
              />
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
                {personalInfo &&
                  [
                    { key: "姓名", value: personalInfo.name },
                    { key: "昵称", value: personalInfo.nickname },
                    { key: "年龄", value: personalInfo.age },
                    { key: "邮箱", value: personalInfo.mailbox },
                    { key: "职位", value: personalInfo.position },
                  ].map((item, index) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        color: "#fff",
                      }}
                      key={index}
                    >
                      <div
                        style={{
                          backgroundColor: "rgb(66,148,248)",
                          padding: "20px 20px 20px 0px",
                          width: "17%",
                          textAlign: "right",
                        }}
                      >
                        <span>{item.key}</span>
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
            <div style={{ textAlign: "center", marginTop: 30 }}>
              <Button type="primary" style={{ borderRadius: 5 }}>
                确认
              </Button>
              <Button
                type="primary"
                style={{ borderRadius: 5, marginLeft: 80 }}
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
                height={452}
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
              >
                <Row>
                  <Col span={10}>
                    <ul
                      style={{
                        backgroundColor: "#fff",
                        // borderRadius: 15,
                        // height: 300,
                        padding: "0",
                      }}
                    >
                      {personalInfo &&
                        [
                          { key: "姓名", value: personalInfo.name },
                          { key: "昵称", value: personalInfo.nickname },
                          { key: "年龄", value: personalInfo.age },
                          { key: "邮箱", value: personalInfo.mailbox },
                          { key: "职位", value: personalInfo.position },
                          { key: "电话", value: personalInfo.telephone },
                          { key: "地址", value: personalInfo.address },
                        ].map((item, index) => (
                          <li
                            style={{
                              listStyle: "none",
                              textAlign: "left",
                              fontSize: 16,
                              display: "flex",
                            }}
                            key={index}
                          >
                            <div
                              style={{
                                backgroundColor: "rgb(1, 13, 37)",
                                padding: "16px 10px",
                                width: "17%",
                                textAlign: "center",
                                color: "#fff",
                              }}
                            >
                              <span>{item.key}:</span>
                            </div>
                            <div
                              style={{
                                backgroundColor: "#fff",
                                borderBottom: "1px solid #444",
                                padding: "16px 10px",
                                width: "80%",
                                textAlign: "left",
                              }}
                            >
                              <div style={{ position: "relative" }}>
                                {item.value}
                                {
                                  <Button
                                    style={{
                                      border: "0",
                                      position: "absolute",
                                      right: 0,
                                      boxShadow: "0 0 0 0 ",
                                    }}
                                  >
                                    修改
                                  </Button>
                                }
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </Col>
                  <Col span={11} style={{ color: "#fff", marginLeft: 40 }}>
                    <span
                      style={{
                        padding: "30px 50px",
                        display: "inline-block",
                        fontSize: 16,
                      }}
                    >
                      编辑名片
                    </span>
                    <div
                      style={{
                        height: 300,
                        overflow: "hidden",
                        borderRadius: 15,
                        marginLeft: 30,
                      }}
                    >
                      <TextArea
                        rows={14}
                        style={{
                          resize: "none",
                          backgroundColor: "#fff",
                          border: "0",
                          padding: 30,
                          // color: "#fff",
                          fontSize: 16,
                        }}
                        defaultValue={personalInfo && personalInfo.businesscard}
                      />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={24}>
              <Card
                height={464}
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
              >
                <Row>
                  <Col span={10} style={{ color: "#fff", marginLeft: 50 }}>
                    <span
                      style={{
                        padding: "30px 50px",
                        display: "inline-block",
                        fontSize: 16,
                      }}
                    >
                      小组名称
                    </span>
                    <ul
                      style={{
                        backgroundColor: "rgb(26, 50, 96)",
                        borderRadius: 15,
                        height: 300,
                        padding: "0",
                      }}
                    >
                      {listdata.map((item, index) => (
                        <div style={{ color: "#fff" }} key={index}>
                          <li
                            style={{
                              listStyle: "none",
                              borderBottom: "1px solid #fff",
                              padding: "10px",
                              textAlign: "left",
                              fontSize: 16,
                              paddingLeft: 15,
                            }}
                          >
                            {item.title}
                          </li>
                        </div>
                      ))}
                    </ul>
                  </Col>
                  <Col span={11} style={{ color: "#fff", marginLeft: 40 }}>
                    <span
                      style={{
                        padding: "30px 50px",
                        display: "inline-block",
                        fontSize: 16,
                      }}
                    >
                      小组成员
                    </span>
                    <div
                      style={{
                        height: 300,
                        overflow: "hidden",
                        borderRadius: 15,
                      }}
                    >
                      <TextArea
                        rows={14}
                        style={{
                          resize: "none",
                          backgroundColor: "rgb(26, 50, 96)",
                          border: "0",
                          padding: 30,
                          color: "#fff",
                          fontSize: 16,
                        }}
                        defaultValue="刘梅，王劫，周云，王美丽，张雪艳，彭玉，段辉"
                      />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
