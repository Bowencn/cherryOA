import React, { useEffect, useState } from "react";

import { Row, Col, Table, Empty, Input, Button, Drawer, Skeleton } from "antd";
import {
  FileTextOutlined,
  UploadOutlined,
  DownloadOutlined,
  FileZipOutlined,
  FileSearchOutlined,
  DeploymentUnitOutlined,
  FolderOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import { Pie } from "@ant-design/charts";
import axios from "axios";
import conf from "../../server.conf";
const { Search } = Input;
export default function WorkingInformation() {
  const [informationDocument, setInformationDocument] = useState();
  const [negotiations, setNegotiations] = useState();
  const [details, setDetails] = useState();
  const [visible, setVisible] = useState();
  useEffect(() => {
    const informationDocument = async () => {
      const res = await axios.get(
        `${conf.address}/api/customer/informationDocument`
      );
      console.log(res.data.data.list);
      setInformationDocument(res.data.data.list);
      // return res.data.data.entity;
    };
    const negotiations = async () => {
      const res = await axios.get(`${conf.address}/api/customer/negotiations`);
      console.log(res.data.data.list);
      setNegotiations(res.data.data.list);
      // return res.data.data.entity;
    };
    informationDocument();
    negotiations();
  }, []);
  const uploadFile = (name) => {
    let input = document.createElement("input");
    input.type = "file";
    input.click();
    console.log(name);
  };
  const downloadFile = (name) => {
    console.log(name);
  };
  const compressFile = (name) => {
    let input = document.createElement("input");
    input.type = "file";
    input.click();
    console.log(name);
  };
  const searchFile = (name) => {
    setVisible(true);
    console.log(name);
  };
  const onClose = () => {
    setVisible(false);
  };
  const DataManagement = (item) => {
    let name = item.name;
    return (
      <div
        style={{
          paddingLeft: 30,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ paddingLeft: 40 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingBottom: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
              onClick={() => uploadFile(name)}
            >
              <UploadOutlined style={{ fontSize: 40, color: "#fff" }} />
              <span style={{ color: "#fff", fontSize: 14 }}>上传文件</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                paddingLeft: 40,
              }}
              onClick={() => downloadFile(name)}
            >
              <DownloadOutlined style={{ fontSize: 40, color: "#fff" }} />
              <span style={{ color: "#fff", fontSize: 14 }}>下载文件</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
              onClick={() => compressFile(name)}
            >
              <FileZipOutlined style={{ fontSize: 40, color: "#fff" }} />
              <span style={{ color: "#fff", fontSize: 14 }}>压缩文件</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                paddingLeft: 40,
              }}
              onClick={() => searchFile(name)}
            >
              <FileSearchOutlined style={{ fontSize: 40, color: "#fff" }} />
              <span style={{ color: "#fff", fontSize: 14 }}>搜索文件</span>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: 40, position: "relative" }}>
          <Button
            style={{
              backgroundColor: "rgb(246,76,25)",
              color: "#fff",
              padding: "1px 10px",
              borderRadius: 5,
              border: 0,
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            查看
          </Button>
        </div>
      </div>
    );
  };
  const Card = (config) => {
    return (
      <div
        style={{
          ...config.style,
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
            // lineHeight: "50px",
            ...config.headerStyle,
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
  const columns = [
    {
      title: "客户姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "客户性别",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "联系方式",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "区域范围",
      key: "RegionalScope",
      dataIndex: "RegionalScope",
    },
    {
      title: "主管",
      key: "executiveDirector",
      render: (text) => {
        return "负责人:" + text.executiveDirector;
      },
    },
  ];

  const pieconfig = {
    height: 300,
    renderer: "svg",
    forceFit: true,
    title: {
      visible: true,
      text: "五月客户谈判情况统计图",
      style: {
        fill: "#fff",
        fontSize: 18,
      },
    },
    legend: {
      position: "bottom-center",
      text: {
        style: {
          fill: "#fff",
          fontSize: 14,
        },
      },
    },
    radius: 0.8,
    data: negotiations,
    angleField: "value",
    colorField: "type",
    color: ["#29c4b1", "#ff7d3e", "#3b9bf8", "#b65dee"],
    label: {
      visible: true,
      type: "inner",
      formatter: (angleField) => {
        return angleField + "%";
      },
      style: { fill: "#fff", fontSize: 14, stroke: "" },
    },
  };
  return (
    <div>
      <Row>
        <Drawer
          title={
            <Search
              placeholder="input search loading default"
              onSearch={(value)=>{console.log(value)}}
              // bordered={false}
              loading={false}
            />
          }
          placement={"right"}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={"right"}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Col span={7}>
          {[
            {
              label: "部门资料",
              name: "department",
              icon: (
                <FileTextOutlined
                  style={{ fontSize: 88, color: "#fff", paddingTop: 20 }}
                />
              ),
              color: "rgb(246,76,25)",
            },
            {
              label: "客户资料",
              name: "customer",
              icon: (
                <FolderOutlined
                  style={{ fontSize: 88, color: "#fff", paddingTop: 20 }}
                />
              ),
              color: "rgb(59, 155, 248)",
            },
            {
              label: "共享资料",
              name: "share",
              icon: (
                <DeploymentUnitOutlined
                  style={{ fontSize: 88, color: "#fff", paddingTop: 20 }}
                />
              ),
              color: "rgb(160, 35, 173)",
            },
            {
              label: "工作资料",
              name: "work",
              icon: (
                <LaptopOutlined
                  style={{ fontSize: 88, color: "#fff", paddingTop: 20 }}
                />
              ),
              color: "rgb(135, 34, 216)",
            },
          ].map((item) => (
            <div
              style={
                item === 4
                  ? {
                      border: "1px solid black",
                      backgroundColor: "#010d24",
                      borderRadius: 10,
                      // marginBottom: 35,
                      display: "flex",
                      flexDirection: "row",
                      padding: "30px 24px",
                    }
                  : {
                      border: "1px solid black",
                      backgroundColor: "#010d24",
                      borderRadius: 10,
                      marginBottom: 38,
                      display: "flex",
                      flexDirection: "row",
                      padding: "30px 24px",
                    }
              }
            >
              <div
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 5,
                  backgroundColor: item.color,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {item.icon}
                <span style={{ color: "#fff", fontSize: 18 }}>
                  {item.label}
                </span>
              </div>
              <DataManagement name={item.name} />
            </div>
          ))}
        </Col>
        <Col span={17} style={{ paddingLeft: 48 }} className="userProfile">
          <Card
            height={643}
            headerStyle={{
              backgroundImage:
                "linear-gradient(to right, rgb(135,34,216),rgb(130,35,191),rgb(139,34,188), rgb(160,35,173))",
              //   borderBottom: "1px solid #ccc",
              height: 80,
            }}
            title={
              <Row>
                <Col
                  span={16}
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    flexDirection: "column",
                    textAlign: "left",
                    paddingLeft: 40,
                  }}
                >
                  <div style={{ marginTop: 10 }}>
                    <span style={{ fontSize: 18 }}>客户资料文件</span>
                    <span style={{ marginLeft: 40 }}>2020-07-10</span>
                  </div>
                  <span style={{ marginTop: 15 }}>五月份公司谈判客户资料</span>
                </Col>
                <Col
                  span={8}
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <div style={{ marginTop: 10 }}>
                    <Input
                      placeholder="五月客户"
                      style={{ width: 240, borderRadius: 5 }}
                    />
                    <Button
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: 0,
                        marginLeft: 10,
                      }}
                    >
                      搜索
                    </Button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    <div style={{ marginLeft: 60 }}>
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          backgroundColor: "#b65dee",
                          borderRadius: 100,
                          display: "inline-block",
                        }}
                      ></span>
                      <span style={{ marginLeft: 10 }}>有意向客户</span>
                    </div>
                    <div style={{ marginLeft: 20 }}>
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          backgroundColor: "#3b9bf8",
                          borderRadius: 100,
                          display: "inline-block",
                        }}
                      ></span>
                      <span style={{ marginLeft: 10 }}>考虑中客户</span>
                    </div>
                    <div style={{ marginLeft: 20 }}>
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          backgroundColor: "#ff7d3e",
                          borderRadius: 100,
                          display: "inline-block",
                        }}
                      ></span>
                      <span style={{ marginLeft: 10 }}>合作客户</span>
                    </div>
                  </div>
                </Col>
              </Row>
            }
          >
            {informationDocument && (
              <Table
                pagination={false}
                columns={columns}
                dataSource={informationDocument}
                style={{
                  background: "rgb(1,13,37)",
                }}
                onRow={(record) => {
                  return {
                    onClick: (event) => {
                      console.log(record);
                      setDetails(record);
                    },
                  };
                }}
                // scroll={{ y: '100vh'}}
              />
            )}
          </Card>
          <Row style={{ marginTop: 20 }}>
            <Col span={12} style={{ paddingRight: 12 }}>
              <div
                style={{
                  border: "1px solid black",
                  backgroundColor: "#010d24",
                  borderRadius: 10,
                }}
              >
                {details ? (
                  <div
                    style={{
                      height: 300,
                    }}
                  >
                    <div
                      style={{
                        borderBottom: "1px dashed #000",
                        height: "30%",
                        textAlign: "center",
                      }}
                    >
                      <span
                        style={{ color: "#fff", fontSize: 18, lineHeight: 5 }}
                      >
                        姓名：{details.name}
                      </span>
                    </div>
                    <div
                      style={{
                        borderBottom: "1px dashed #000",
                        height: "40%",
                        display: "flex",
                        flexDirection: "column",
                        padding: "10px 30px",
                      }}
                    >
                      <span
                        style={{
                          color: "#fff",
                          fontSize: 15,
                          paddingBottom: 5,
                          paddingTop: 5,
                        }}
                      >
                        联系情况：{details.details.contact}
                      </span>
                      <span
                        style={{
                          color: "#fff",
                          fontSize: 15,
                          paddingBottom: 5,
                        }}
                      >
                        考虑问题：{details.details.question}
                      </span>
                      <span
                        style={{
                          color: "#fff",
                          fontSize: 15,
                          paddingBottom: 5,
                        }}
                      >
                        交易方式：{details.details.TSTP}
                      </span>
                    </div>
                    <div
                      style={{
                        height: "30%",
                        padding: "5px 30px",
                        color: "#fff",
                      }}
                    >
                      {details.details.remarks}
                    </div>
                  </div>
                ) : (
                  <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    imageStyle={{ height: 230 }}
                    style={{
                      height: 236,
                    }}
                  />
                )}
              </div>
            </Col>
            <Col span={12} style={{ paddingLeft: 12 }}>
              <div
                style={{
                  border: "1px solid black",
                  backgroundColor: "#010d24",
                  borderRadius: 10,
                }}
              >
                {negotiations && <Pie {...pieconfig} />}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
