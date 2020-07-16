import React from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Table,
  Comment,
  Tooltip,
  Avatar,
  Divider,
  List,
} from "antd";
import { Column } from "@ant-design/charts";
import moment from "moment";

export default function WorkRecord() {
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "职位",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "签到时间",
      dataIndex: "CheckInTime",
      key: "CheckInTime",
    },
    {
      title: "培训地点",
      key: "TrainingLocation",
      dataIndex: "TrainingLocation",
    },
    {
      title: "所属部门",
      key: "Department",
      dataIndex: "Department",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      CheckInTime: "15:37",
      TrainingLocation: "会议室",
      Department: "销售一部",
      position: "销售经理",
    },
    {
      key: "2",
      name: "Jim Green",
      CheckInTime: "15:37",
      TrainingLocation: "会议室",
      Department: "销售二部",
      position: "市场专员",
    },
    {
      key: "3",
      name: "Joe Black",
      CheckInTime: "15:37",
      TrainingLocation: "会议室",
      Department: "销售三部",
      position: "市场专员",
    },
    {
      key: "4",
      name: "John Brown",
      CheckInTime: "15:37",
      TrainingLocation: "会议室",
      Department: "销售一部",
      position: "销售经理",
    },
    {
      key: "5",
      name: "Jim Green",
      CheckInTime: "15:37",
      TrainingLocation: "会议室",
      Department: "销售二部",
      position: "市场专员",
    },
    {
      key: "6",
      name: "Joe Black",
      CheckInTime: "15:37",
      TrainingLocation: "会议室",
      Department: "销售三部",
      position: "市场专员",
    },
    {
      key: "7",
      name: "John Brown",
      CheckInTime: "15:37",
      TrainingLocation: "会议室",
      Department: "销售一部",
      position: "销售经理",
    },
    {
      key: "8",
      name: "Jim Green",
      CheckInTime: "15:37",
      TrainingLocation: "会议室",
      Department: "销售二部",
      position: "市场专员",
    },
    {
      key: "9",
      name: "Joe Black",
      CheckInTime: "15:37",
      TrainingLocation: "会议室",
      Department: "销售三部",
      position: "市场专员",
    },
    {
      key: "10",
      name: "John Brown",
      CheckInTime: "15:37",
      TrainingLocation: "会议室",
      Department: "销售一部",
      position: "销售经理",
    },
    {
      key: "11",
      name: "Jim Green",
      CheckInTime: "15:37",
      TrainingLocation: "会议室",
      Department: "销售二部",
      position: "市场专员",
    },
    {
      key: "12",
      name: "Joe Black",
      CheckInTime: "15:37",
      TrainingLocation: "会议室",
      Department: "销售三部",
      position: "市场专员",
    },
    {
      key: "13",
      name: "John Brown",
      CheckInTime: "15:37",
      TrainingLocation: "会议室",
      Department: "销售一部",
      position: "销售经理",
    },
    {
      key: "14",
      name: "Jim Green",
      CheckInTime: "15:37",
      TrainingLocation: "会议室",
      Department: "销售二部",
      position: "市场专员",
    },
    {
      key: "15",
      name: "Joe Black",
      CheckInTime: "15:37",
      TrainingLocation: "会议室",
      Department: "销售三部",
      position: "市场专员",
    },
    {
      key: "16",
      name: "John Brown",
      CheckInTime: "15:37",
      TrainingLocation: "会议室",
      Department: "销售一部",
      position: "销售经理",
    },
  ];
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
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];
  return (
    <div>
      <Row gutter={28} style={{ marginLeft: 30 }}>
        <Col span={12} className="SignInForm">
          <Card height={468} title={"樱桃科技有限公司培训签到表"}>
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
        <Col span={11}>
          <Card height={468} title={"2020年上半年客户成交量统计"}>
            <Column {...Columnconfig} />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: 20, marginLeft: 30 }} gutter={28}>
        <Col span={12}>
          <Card height={468} title={"记录本"}>
            <div style={{ background: "rgb(1,13,37)" }}>
              <textarea
                // readonly="readonly"
                style={{
                  /* 实现横线效果 */
                  background: "linear-gradient(transparent 95%, rgb(20,119,114) 0)",
                  lineHeight: "3.4em",
                  backgroundSize: "100% 3em",
                  backgroundAttachment:
                    "local" /*  这里需要根据 textarea 的内容进行滚动 */,
                  /* textarea样式修改 */
                  width: "100%",
                  resize: "none",
                  fontSize: "14px",
                  fontFamily: "inherit",
                  outline: "none",
                  border: "none",
                  color: "#fff",
                  wordBreak: "break-all",
                  overflowX: "hidden",
                  height: "420px",
                  padding: "0 10px",
                }}
              >
                销售一部午饭后集体去会议室，集体培训一小时，带上笔记
              </textarea>
            </div>
          </Card>
        </Col>
        <Col span={11}>
          <Card height={468} title={"部门报告"}>
            <List
              itemLayout="horizontal"
              dataSource={listdata}
              renderItem={(item) => (
                <List.Item style={{ padding: 10 }}>
                  <Comment
                    //   actions={actions}
                    style={{ color: "#fff", textAlign: "left" }}
                    author={<a style={{ color: "#fff" }}>Han Solo</a>}
                    avatar={
                      <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                      />
                    }
                    content={
                      <p>
                        We supply a series of design principles, practical
                        patterns and high quality design resources (Sketch and
                        Axure), to help people create their product prototypes
                        beautifully and efficiently.
                      </p>
                    }
                    datetime={
                      <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                        <span>{moment().fromNow()}</span>
                      </Tooltip>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
