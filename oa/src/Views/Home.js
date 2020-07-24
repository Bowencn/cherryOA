import React, { useState, useEffect } from "react";
import { Card, Row, Col, Progress } from "antd";
import {
  LineChartOutlined,
  PayCircleOutlined,
  CheckCircleOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { GroupedColumn, Pie } from "@ant-design/charts";
import axios from "axios";
import conf from "../server.conf";
export default function Home() {
  const [overView, setOverView] = useState();
  const [cityData, setcityData] = useState();
  const [attitudeData, setAttitudeData] = useState();
  useEffect(() => {
    const login = async () => {
      const res = await axios.get(`${conf.address}/api/overview`);
      console.log(res.data.data.entity);
      setOverView(res.data.data.entity);
      // return res.data.data.entity;
    };
    const city = async () => {
      const res = await axios.get(`${conf.address}/api/customer/city`);
      console.log(res.data.data.list);
      setcityData(res.data.data.list);
      // return res.data.data.entity;
    };
    const attitude = async () => {
      const res = await axios.get(`${conf.address}/api/customer/attitude`);
      console.log(res.data.data.list);
      setAttitudeData(res.data.data.list);
      // return res.data.data.entity;
    };
    login();
    city();
    attitude();
  }, []);
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
    data: attitudeData,
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
    data: cityData,
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
              <p>{overView && overView.salesPerformance}万</p>
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
              <p>{overView && overView.salesProfit}%</p>
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
              <p>{overView && overView.numberOfTransactions}笔</p>
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
              <p>{overView && overView.attendance}%</p>
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
            {attitudeData && <GroupedColumn {...config} />}
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
            {cityData && <Pie {...pieconfig} />}
          </div>
        </Col>
      </Row>
    </div>
  );
}
