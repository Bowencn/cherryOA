import React from "react";
import { Card, Row, Col } from "antd";
import {
  LineChartOutlined,
  PayCircleOutlined,
  CheckCircleOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
export default function Home() {
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
              style={{ color: "#fff", fontSize: 76}}
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
      <Row></Row>
    </div>
  );
}
