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
  DatePicker,
} from "antd";
import {
  FileTextOutlined,
  UploadOutlined,
  DownloadOutlined,
  FileZipOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import { GroupedColumn, Pie } from "@ant-design/charts";
export default function WorkingInformation() {
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
      title: "成交状态",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "联系电话",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "成交部门",
      key: "department",
      dataIndex: "department",
    },
    {
      title: "联系员工",
      key: "staff",
      dataIndex: "staff",
    },
    {
      title: "操作",
      key: "active",
      render: () => {
        return <a href="#!">查看</a>;
      },
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      phoneNumber: "133-0000-2200",
      staff: "思瑶",
      department: "销售一部",
      state: "已成交",
    },
    {
      key: "2",
      name: "Jim Green",
      phoneNumber: "188-4077-6578",
      staff: "王小天",
      department: "销售二部",
      state: "未成交",
    },
    {
      key: "3",
      name: "Joe Black",
      phoneNumber: "148-2456-2215",
      staff: "苏白",
      department: "销售三部",
      state: "考虑中",
    },
    {
      key: "4",
      name: "John Brown",
      phoneNumber: "133-0000-2200",
      staff: "思瑶",
      department: "销售一部",
      state: "已成交",
    },
    {
      key: "5",
      name: "Jim Green",
      phoneNumber: "188-4477-6578",
      staff: "王小天",
      department: "销售二部",
      state: "未成交",
    },
    {
      key: "6",
      name: "Joe Black",
      phoneNumber: "148-2456-2215",
      staff: "苏白",
      department: "销售三部",
      state: "考虑中",
    },
    {
      key: "7",
      name: "John Brown",
      phoneNumber: "133-0000-2200",
      staff: "思瑶",
      department: "销售一部",
      state: "已成交",
    },
    {
      key: "8",
      name: "Jim Green",
      phoneNumber: "188-4477-6578",
      staff: "王小天",
      department: "销售二部",
      state: "未成交",
    },
    {
      key: "9",
      name: "Joe Black",
      phoneNumber: "148-2456-2215",
      staff: "苏白",
      department: "销售三部",
      state: "考虑中",
    },
    {
      key: "10",
      name: "John Brown",
      phoneNumber: "133-0000-2200",
      staff: "思瑶",
      department: "销售一部",
      state: "已成交",
    },
    {
      key: "11",
      name: "Jim Green",
      phoneNumber: "188-4477-6578",
      staff: "王小天",
      department: "销售二部",
      state: "未成交",
    },
    {
      key: "12",
      name: "Joe Black",
      phoneNumber: "148-2456-2215",
      staff: "苏白",
      department: "销售三部",
      state: "考虑中",
    },
    {
      key: "13",
      name: "John Brown",
      phoneNumber: "133-0000-2200",
      staff: "思瑶",
      department: "销售一部",
      state: "已成交",
    },
    {
      key: "14",
      name: "Jim Green",
      phoneNumber: "188-4477-6578",
      staff: "王小天",
      department: "销售二部",
      state: "未成交",
    },
    {
      key: "15",
      name: "Joe Black",
      phoneNumber: "148-2456-2215",
      staff: "苏白",
      department: "销售三部",
      state: "考虑中",
    },
    {
      key: "16",
      name: "John Brown",
      phoneNumber: "133-0000-2200",
      staff: "思瑶",
      department: "销售一部",
      state: "已成交",
    },
    // {
    //   key: "17",
    //   name: "Jim Green",
    //   phoneNumber: "188-4477-6578",
    //   staff: "王小天",
    //   department: "销售二部",
    //   state: "未成交",
    //   active: "正常",
    // },
    // {
    //   key: "18",
    //   name: "Joe Black",
    //   phoneNumber: "148-2456-2215",
    //   staff: "苏白",
    //   department: "销售三部",
    //   state: "考虑中",
    //   active: "正常",
    // },{
    //   key: "19",
    //   name: "John Brown",
    //   phoneNumber: "133-0000-2200",
    //   staff: "思瑶",
    //   department: "销售一部",
    //   state: "已成交",
    //   active: "正常",
    // },
    // {
    //   key: "20",
    //   name: "Jim Green",
    //   phoneNumber: "188-4477-6578",
    //   staff: "王小天",
    //   department: "销售二部",
    //   state: "未成交",
    //   active: "正常",
    // },
    // {
    //   key: "21",
    //   name: "Joe Black",
    //   phoneNumber: "148-2456-2215",
    //   staff: "苏白",
    //   department: "销售三部",
    //   state: "考虑中",
    //   active: "正常",
    // },
  ];
  const piedata = [
    {
      type: "成都",
      value: 15,
    },
    {
      type: "绵阳",
      value: 35,
    },
    {
      type: "德阳",
      value: 25,
    },
    {
      type: "南充",
      value: 25,
    },
  ];
  const pieconfig = {
    height: 300,
    renderer: "svg",
    forceFit: true,
    title: {
      visible: true,
      text: "客户区域分布图",
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
    data: piedata,
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
        <Col span={7}>
          {[1, 2, 3, 4].map((item) => (
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
                  backgroundColor: "rgb(246,76,25)",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FileTextOutlined
                  style={{ fontSize: 88, color: "#fff", paddingTop: 20 }}
                />
                <span style={{ color: "#fff", fontSize: 18 }}>部门资料</span>
              </div>
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
                    >
                      <UploadOutlined style={{ fontSize: 40, color: "#fff" }} />
                      <span style={{ color: "#fff", fontSize: 14 }}>
                        上传文件
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        paddingLeft: 40,
                      }}
                    >
                      <DownloadOutlined
                        style={{ fontSize: 40, color: "#fff" }}
                      />
                      <span style={{ color: "#fff", fontSize: 14 }}>
                        下载文件
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                      }}
                    >
                      <FileZipOutlined
                        style={{ fontSize: 40, color: "#fff" }}
                      />
                      <span style={{ color: "#fff", fontSize: 14 }}>
                        压缩文件
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        paddingLeft: 40,
                      }}
                    >
                      <FileSearchOutlined
                        style={{ fontSize: 40, color: "#fff" }}
                      />
                      <span style={{ color: "#fff", fontSize: 14 }}>
                        搜索文件
                      </span>
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
            </div>
          ))}
          {/* <Card></Card>
          <Card></Card>
          <Card></Card> */}
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
                    paddingLeft:40
                  }}
                >
                  <div style={{marginTop:10}}>
                    <span style={{fontSize: 18}}>客户联系资料图表</span>
                    <span style={{marginLeft:40}}>2020-07-10</span>
                  </div>
                  <span style={{marginTop:15}}>五月份公司谈判客户资料</span>
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
            <Table
              pagination={false}
              columns={columns}
              dataSource={data}
              style={{
                background: "rgb(1,13,37)",
              }}
              // scroll={{ y: '100vh'}}
            />
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
                <Pie {...pieconfig} />
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
                <Pie {...pieconfig} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
