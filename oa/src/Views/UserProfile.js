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
      title: "考勤日期",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "部门",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "上班时间",
      key: "workShift",
      dataIndex: "workShift",
    },
    {
      title: "下班时间",
      key: "closingTime",
      dataIndex: "closingTime",
    },
    {
      title: "考勤状态",
      key: "state",
      dataIndex: "state",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      workShift: "08:58:20",
      closingTime: "18:01:00",
      department: "销售部",
      date: "2020-07-07",
      state: "正常",
    },
    {
      key: "2",
      name: "Jim Green",
      workShift: "08:58:20",
      closingTime: "18:01:00",
      department: "考勤部",
      date: "2020-07-07",
      state: "正常",
    },
    {
      key: "3",
      name: "Joe Black",
      workShift: "08:58:20",
      closingTime: "18:01:00",
      department: "技术部",
      date: "2020-07-07",
      state: "正常",
    },
  ];
  const Donutdata = [
    {
      type: "满意",
      value: 27,
    },
    {
      type: "不满意",
      value: 25,
    },
    {
      type: "未评价",
      value: 18,
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
    color: ["#ff7d3e", "#29c4b1", "#b65dee"],
    statistic: {
      visible: true,
      style: { fill: "#fff", shadowColor: "#fff", fontSize: 88 },
    },
    label: {
      visible: true,
      type: "spider",
      //   formatter: (angleField,colorField) => {
      //     return {name:angleField,value:colorField};
      //   },
      style: { fill: "#fff", fontSize: 44, stroke: "" },
    },
  };
  const Columndata = [
    {
      type: "家具家电",
      sales: 38,
    },
    {
      type: "粮油副食",
      sales: 52,
    },
    {
      type: "生鲜水果",
      sales: 61,
    },
    {
      type: "美容洗护",
      sales: 145,
    },
    {
      type: "母婴用品",
      sales: 48,
    },
    {
      type: "进口食品",
      sales: 38,
    },
    {
      type: "食品饮料",
      sales: 38,
    },
    {
      type: "家庭清洁",
      sales: 38,
    },
  ];
  const Columnconfig = {
    renderer: "svg",
    title: {
      visible: true,
      text: "基础柱状图-图形标签",
    },
    description: {
      visible: true,
      text: "基础柱状图图形标签默认位置在柱形上部\u3002",
    },
    forceFit: true,
    data: Columndata,
    padding: "auto",
    xField: "type",
    yField: "sales",
    meta: {
      type: { alias: "类别" },
      sales: { alias: "销售额(万)" },
    },
    label: {
      visible: true,
      style: {
        fill: "#0D0E68",
        fontSize: 12,
        fontWeight: 600,
        opacity: 0.6,
      },
    },
  };
  return (
    <div>
      <Row gutter={[28, 28]}>
        <Col span={12}>
          <Card
            height={468}
            headerStyle={{ backgroundColor: "rgb(15, 40, 80)" }}
            title="客户年龄分布图"
          >
            <Donut {...Donutconfig} />
          </Card>
          <Card
            height={468}
            style={{ marginTop: 20 }}
            headerStyle={{ backgroundColor: "rgb(15, 40, 80)" }}
            title="客户区域分布图"
          >
            <Column {...Columnconfig} />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            height={956}
            // style={{ marginTop: 20 }}
            headerStyle={{ backgroundColor: "rgb(15, 40, 80)" }}
            title="客户联系资料图表"
          >
            <Table
              pagination={false}
              columns={columns}
              dataSource={data}
              style={{
                background: "rgb(1,13,37)",
              }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
