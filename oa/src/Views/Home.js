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
      name: "满意",
      月份: "一月",
      月均降雨量: 18,
    },
    {
      name: "满意",
      月份: "二月",
      月均降雨量: 28,
    },
    {
      name: "满意",
      月份: "三月",
      月均降雨量: 39,
    },
    {
      name: "满意",
      月份: "四月",
      月均降雨量: 81,
    },
    {
      name: "满意",
      月份: "五月",
      月均降雨量: 47,
    },
    {
      name: "满意",
      月份: "六月",
      月均降雨量: 20,
    },
    {
      name: "满意",
      月份: "七月.",
      月均降雨量: 24,
    },
    {
      name: "满意",
      月份: "八月",
      月均降雨量: 35,
    },
    {
      name: "满意",
      月份: "九月",
      月均降雨量: 40,
    },
    {
      name: "满意",
      月份: "十月",
      月均降雨量: 45,
    },
    {
      name: "满意",
      月份: "十一月",
      月均降雨量: 50,
    },
    {
      name: "满意",
      月份: "十二月",
      月均降雨量: 30,
    },
    {
      name: "不满意",
      月份: "一月",
      月均降雨量: 12,
    },
    {
      name: "不满意",
      月份: "二月",
      月均降雨量: 23,
    },
    {
      name: "不满意",
      月份: "三月",
      月均降雨量: 34,
    },
    {
      name: "不满意",
      月份: "四月",
      月均降雨量: 99,
    },
    {
      name: "不满意",
      月份: "五月",
      月均降雨量: 52,
    },
    {
      name: "不满意",
      月份: "六月",
      月均降雨量: 35,
    },
    {
      name: "不满意",
      月份: "七月.",
      月均降雨量: 37,
    },
    {
      name: "不满意",
      月份: "八月",
      月均降雨量: 42,
    },
    {
      name: "不满意",
      月份: "九月",
      月均降雨量: 36,
    },
    {
      name: "不满意",
      月份: "十月",
      月均降雨量: 38,
    },
    {
      name: "不满意",
      月份: "十一月",
      月均降雨量: 30,
    },
    {
      name: "不满意",
      月份: "十二月",
      月均降雨量: 20,
    },
  ];
  const config = {
    height: 770,
    renderer: "svg",
    title: {
      visible: true,
      text: "1-12月客户满意度图标",
      style: {
        fontSize: 18,
        fill: "#fff",
      },
    },
    description: {
      visible: true,
      alignTo: "top",
      text: "统计调查人数：3000(人)",
      style: {
        fontSize: 14,
        fill: "#fff",
      },
    },
    legend: {
      text: { style: { fill: "#fff", fontSize: 16 } },
    },
    forceFit: true,
    data,
    xField: "月份",
    yField: "月均降雨量",
    yAxis: {
      min: 0,
      title: {
        visible: false,
        style: {
          fontSize: 14,
          fill: "#fff",
        },
      },
      label: {
        visible: true,
        formatter: (angleField) => {
          return angleField + "%";
        },
        style: {
          fontSize: 14,
          fill: "#fff",
        },
      },
      grid: {
        visible: true,
        style: {
          fill: "#fff",
        },
      },
    },
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
      grid: {
        visible: true,
        style: {
          fill: "#fff",
        },
      },
    },
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
    height: 770,
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
      <Row style={{ color: "#fff", fontSize: 20, paddingBottom: 15 }}>
        欢迎来到樱桃科技!
      </Row>
      <Row gutter={{ md: 60, xxl: 96 }}>
        <Col span={6}>
          <Card
            style={{
              borderRadius: 10,
              backgroundColor: "#29c4b1",
              minWidth: 300,
            }}
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
            style={{
              borderRadius: 10,
              backgroundColor: "#ff7d3e",
              minWidth: 300,
            }}
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
            style={{
              borderRadius: 10,
              backgroundColor: "#3b9bf8",
              minWidth: 300,
            }}
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
            style={{
              borderRadius: 10,
              backgroundColor: "#b65dee",
              minWidth: 300,
            }}
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
