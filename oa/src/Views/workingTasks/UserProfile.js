import React from "react";
import {
  Row,
  Col,
  Calendar,
  Table,
  Form,
  Input,
  Button,
  Timeline,
  Badge,
  DatePicker,
} from "antd";

import { Column, Donut } from "@ant-design/charts";
export default function UserProfile() {
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
            lineHeight: "50px",
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
      render:()=>{
        return <a href="#!">查看</a>
      }
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
      phoneNumber: "188-4477-6578",
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
    },{
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
    },{
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
    },{
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
  const Donutdata = [
    {
      type: "20岁以下",
      value: 27,
    },
    {
      type: "20-30岁",
      value: 55,
    },
    {
      type: "30-40岁",
      value: 18,
    },
    {
      type: "40-50岁",
      value: 30,
    },
    {
      type: "50岁以上",
      value: 10,
    },
  ];
  const Donutconfig = {
    forceFit: true,
    renderer: "svg",
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
    padding: "auto",
    data: Donutdata,
    angleField: "value",
    colorField: "type",
    // color: ["#ff7d3e", "#29c4b1", "#b65dee","#ffc895"," #fc6993"],
    statistic: {
      visible: true,
      style: { fill: "#fff", shadowColor: "#fff", fontSize: 88 },
    },
    label: {
      visible: true,
      type: "inner",
      style: { fill: "#fff", fontSize: 14, stroke: "" },
    },
  };
  const Columndata = [
    {
      type: "一区",
      sales: 38,
    },
    {
      type: "二区",
      sales: 52,
    },
    {
      type: "三区",
      sales: 61,
    },
    {
      type: "四区",
      sales: 145,
    },
    {
      type: "五区",
      sales: 48,
    },
    {
      type: "六区",
      sales: 38,
    },
    {
      type: "七区",
      sales: 38,
    },
  ];
  const Columnconfig = {
    renderer: "svg",
    forceFit: true,
    data: Columndata,
    padding: "auto",
    xField: "type",
    yField: "sales",
    colorField: "type",
    // color:["#b65dee"],
    xAxis: {
      min: 0,
      title: {
        visible: false,
      },
      label: {
        style: {
          fontSize: 14,
          fill: "#fff",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        visible: false,
      },
      label: {
        visible: true,
        style: {
          fontSize: 14,
          fill: "#fff",
        },
      },
    },
    label: {
      visible: true,
      style: {
        fontSize: 14,
        fill: "#fff",
        stroke: "",
      },
    },
  };
  return (
    <div>
      <Row gutter={[28, 28]}>
        <Col span={12}>
          <Card
            height={458}
            headerStyle={{ backgroundColor: "rgb(15, 40, 80)" }}
            title="客户年龄分布图"
          >
            <Donut {...Donutconfig} />
          </Card>
          <Card
            height={458}
            style={{ marginTop: 20 }}
            headerStyle={{ backgroundColor: "rgb(15, 40, 80)" }}
            title="客户区域分布图"
          >
            <Column {...Columnconfig} />
          </Card>
        </Col>
        <Col span={12} className="userProfile">
          <Card
            height={936}
            // style={{ marginTop: 20 }}
            headerStyle={{ backgroundColor: "rgb(15, 40, 80)" ,borderBottom:"1px solid #ccc"}}
            title="客户联系资料图表"
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
        </Col>
      </Row>
    </div>
  );
}
