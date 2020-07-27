import React, { useEffect, useState } from "react";
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
import axios from "axios";
import conf from "../server.conf";

export default function WorkRecord() {
  const [trainingSignIn, setTrainingSignIn] = useState();
  const [volume, setVolume] = useState();
  const [logBook, setLogBook] = useState();
  const [departmentReport, setDepartmentReport] = useState();
  useEffect(() => {
    const trainingSignIn = async () => {
      const res = await axios.get(`${conf.address}/api/staff/trainingSignIn`);
      console.log(res.data.data.list);
      setTrainingSignIn(res.data.data.list);
      // return res.data.data.entity;
    };
    const volume = async () => {
      const res = await axios.get(`${conf.address}/api/customer/volume`);
      console.log(res.data.data.list);
      setVolume(res.data.data.list);
      // return res.data.data.entity;
    };
    const logBook = async () => {
      const res = await axios.post(`${conf.address}/api/message/logBook`,{id:1});
      console.log(res.data.data.entity);
      setLogBook(res.data.data.entity.content);
      // return res.data.data.entity;
    };
    const departmentReport = async () => {
      const res = await axios.get(
        `${conf.address}/api/message/departmentReport`
      );
      console.log(res.data.data.list);
      setDepartmentReport(res.data.data.list);
      // return res.data.data.entity;
    };
    trainingSignIn();
    volume();
    logBook();
    departmentReport();
  }, []);
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

  const volumeConfig = {
    renderer: "svg",
    forceFit: true,
    data: volume,
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
  return (
    <div>
      <Row gutter={28} style={{ marginLeft: 30 }}>
        <Col span={12} className="SignInForm">
          <Card height={468} title={"樱桃科技有限公司培训签到表"}>
            <Table
              pagination={false}
              columns={columns}
              dataSource={trainingSignIn}
              style={{
                background: "rgb(1,13,37)",
              }}
            />
          </Card>
        </Col>
        <Col span={11}>
          <Card height={468} title={"2020年上半年客户成交量统计"}>
            {volume && <Column {...volumeConfig} />}
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
                  background:
                    "linear-gradient(transparent 95%, rgb(20,119,114) 0)",
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
                {logBook}
              </textarea>
            </div>
          </Card>
        </Col>
        <Col span={11}>
          <Card height={468} title={"部门报告"}>
            <List
              itemLayout="horizontal"
              dataSource={departmentReport}
              renderItem={(item) => (
                <List.Item style={{ padding: 10 }}>
                  <Comment
                    //   actions={actions}
                    style={{ color: "#fff", textAlign: "left" }}
                    author={
                      <a style={{ color: "#fff" }} src="#!">
                        {item.name}
                      </a>
                    }
                    avatar={
                      <Avatar
                        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1607579915,1915864702&fm=26&gp=0.jpg"
                        alt={item.name}
                      />
                    }
                    content={<p>{item.content}</p>}
                    datetime={
                      <Tooltip
                        title={moment(item.date + " " + item.time).format(
                          "YYYY-MM-DD HH:mm:ss"
                        )}
                      >
                        <span>
                          {moment(item.date + " " + item.time).fromNow()}
                        </span>
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
