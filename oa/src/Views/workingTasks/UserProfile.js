import React, { useState, useEffect } from "react";
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
import axios from "axios";
import conf from "../../server.conf";

import { Column, Donut } from "@ant-design/charts";
export default function UserProfile() {
  const [areaData, setAreaData] = useState();
  const [ageData, setAgeData] = useState();
  const [customerData, setCustomerData] = useState();
  useEffect(() => {
    const area = async () => {
      const res = await axios.get(`${conf.address}/api/customer/area`);
      console.log(res.data.data.list);
      setAreaData(res.data.data.list);
      // return res.data.data.entity;
    };
    const age = async () => {
      const res = await axios.get(`${conf.address}/api/customer/age`);
      console.log(res.data.data.list);
      setAgeData(res.data.data.list);
      // return res.data.data.entity;
    };
    const customer = async () => {
      const res = await axios.get(`${conf.address}/api/customer`);
      console.log(res.data.data.list);
      setCustomerData(res.data.data.list);
      // return res.data.data.entity;
    };
    customer();
    area();
    age();
  }, []);
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
      render: () => {
        return <a href="#!">查看</a>;
      },
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
    data: ageData,
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
  const Columnconfig = {
    renderer: "svg",
    forceFit: true,
    data: areaData,
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
            {ageData && <Donut {...Donutconfig} />}
          </Card>
          <Card
            height={458}
            style={{ marginTop: 20 }}
            headerStyle={{ backgroundColor: "rgb(15, 40, 80)" }}
            title="客户区域分布图"
          >
            {areaData && <Column {...Columnconfig} />}
          </Card>
        </Col>
        <Col span={12} className="userProfile">
          <Card
            height={936}
            // style={{ marginTop: 20 }}
            headerStyle={{
              backgroundColor: "rgb(15, 40, 80)",
              borderBottom: "1px solid #ccc",
            }}
            title="客户联系资料图表"
          >
            <Table
              pagination={false}
              columns={columns}
              dataSource={customerData&&customerData}
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
