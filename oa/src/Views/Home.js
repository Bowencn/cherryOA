import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "antd";
import {
  LineChartOutlined,
  PayCircleOutlined,
  CheckCircleOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { GroupedColumn, Pie } from "@ant-design/charts";
export default function Home() {
  const data = [
    {
      name: "London",
      月份: "Jan.",
      月均降雨量: 18.9,
    },
    {
      name: "London",
      月份: "Feb.",
      月均降雨量: 28.8,
    },
    {
      name: "London",
      月份: "Mar.",
      月均降雨量: 39.3,
    },
    {
      name: "London",
      月份: "Apr.",
      月均降雨量: 81.4,
    },
    {
      name: "London",
      月份: "May",
      月均降雨量: 47,
    },
    {
      name: "London",
      月份: "Jun.",
      月均降雨量: 20.3,
    },
    {
      name: "London",
      月份: "Jul.",
      月均降雨量: 24,
    },
    {
      name: "London",
      月份: "Aug.",
      月均降雨量: 35.6,
    },
    {
      name: "Berlin",
      月份: "Jan.",
      月均降雨量: 12.4,
    },
    {
      name: "Berlin",
      月份: "Feb.",
      月均降雨量: 23.2,
    },
    {
      name: "Berlin",
      月份: "Mar.",
      月均降雨量: 34.5,
    },
    {
      name: "Berlin",
      月份: "Apr.",
      月均降雨量: 99.7,
    },
    {
      name: "Berlin",
      月份: "May",
      月均降雨量: 52.6,
    },
    {
      name: "Berlin",
      月份: "Jun.",
      月均降雨量: 35.5,
    },
    {
      name: "Berlin",
      月份: "Jul.",
      月均降雨量: 37.4,
    },
    {
      name: "Berlin",
      月份: "Aug.",
      月均降雨量: 42.4,
    },
  ];
  const config = {
    height: 770,
    title: {
      visible: true,
      text: "1-12月客户满意度图标",
      style: {
        fill: "#fff",
      },
    },
    description: {
      visible: true,
      alignTo: "top",
      text: "统计调查人数：3000(人)",
      style: {
        fontSize: 12,
        fill: "#fff",
      },
    },
    legend: {
      text: { style: { fill: "#fff" } },
    },
    forceFit: true,
    data,
    xField: "月份",
    yField: "月均降雨量",
    yAxis: {
      min: 0,
      title: {
        style: { fill: "#fff" },
      },
      line: {
        style: {
          fill: "#fff",
        },
      },
      tickLine: { style: { fill: "#fff", visible: true } },
      label: { style: { fill: "#fff" } },
      grid: { style: { fill: "#fff" } },
    },
    xAxis: {
      min: 0,
      title: {
        style: { fill: "#fff" },
      },
      line: {
        style: {
          fill: "#fff",
        },
      },
      tickLine: { style: { fill: "#fff", visible: true } },
      label: { style: { fill: "#fff" } },
      grid: { style: { fill: "#fff" } },
    },
    label: { visible: true },
    groupField: "name",
    color: ["rgb(1,121,255)", "rgb(7,88,183)"],
  };
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
    // height: 770,
    forceFit: true,
    title: {
      visible: true,
      text: "客户区域分布图",
      style: {
        fill: "#fff",
      },
    },
    // description: {
    //   visible: true,
    //   text:
    //     "指定颜色映射字段(colorField)\uFF0C饼图切片将根据该字段数据显示为不同的颜色\u3002指定颜色需要将color配置为一个数组\u3002\n当把饼图label的类型设置为inner时\uFF0C标签会显示在切片内部\u3002设置offset控制标签的偏移值\u3002",
    //   style: {
    //     fill: "#fff",
    //   },
    // },
    radius: 0.8,
    data: piedata,
    angleField: "value",
    colorField: "type",
    label: {
      visible: true,
      type: "inner",
    },
  };
  return (
    <div>
      <Row style={{ color: "#fff", fontSize: 20, paddingBottom: 15 }}>
        欢迎来到樱桃科技!
      </Row>
      <Row gutter={128}>
        <Col span={6}>
          <Card
            style={{ borderRadius: 10, backgroundColor: "#29c4b1" }}
            bodyStyle={{ display: "flex", flexDirection: "row" }}
            bordered={false}
            hoverable
          >
            <LineChartOutlined
              className="card-icon"
              style={{ color: "#fff" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#fff",
                flexGrow: "2",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <p>2000万</p>
              <p>销售业绩</p>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{ borderRadius: 10, backgroundColor: "#ff7d3e" }}
            bodyStyle={{ display: "flex", flexDirection: "row" }}
            bordered={false}
            hoverable
          >
            <PayCircleOutlined
              //   className="card-icon"
              style={{ color: "#fff", fontSize: 76 }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#fff",
                flexGrow: "2",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <p>75%</p>
              <p>销售利润</p>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{ borderRadius: 10, backgroundColor: "#3b9bf8" }}
            bodyStyle={{ display: "flex", flexDirection: "row" }}
            bordered={false}
            hoverable
          >
            <CheckCircleOutlined
              //   className="card-icon"
              style={{ color: "#fff", fontSize: 76 }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#fff",
                flexGrow: "2",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <p>500笔</p>
              <p>成交笔数</p>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{ borderRadius: 10, backgroundColor: "#b65dee" }}
            bodyStyle={{ display: "flex", flexDirection: "row" }}
            bordered={false}
            hoverable
          >
            <FieldTimeOutlined
              //   className="card-icon"
              style={{ color: "#fff", fontSize: 76 }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#fff",
                flexGrow: "2",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <p>97%</p>
              <p>出勤率</p>
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={48} style={{ marginTop: 20, height: "100%" }}>
        <Col span={15}>
          <div
            style={{
              border: "1px solid black",
              backgroundColor: "#010d24",
              borderRadius: 10,
            }}
          >
            <GroupedColumn {...config} />
          </div>
        </Col>
        <Col span={9}>
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
    </div>
  );
}
