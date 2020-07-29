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
import { ClockCircleOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/zh-cn";
import axios from "axios";
import conf from "../server.conf";
moment.locale("zh-cn");
export default function ClockIn(props) {
  const { TextArea } = Input;
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();
  const [currentDate] = useState(
    new Date().getFullYear() + "年" + (new Date().getMonth() + 1) + "月"
  );
  const [clockInData, setClockInData] = useState();
  const [clockInState, setClockInState] = useState(0);
  const [propsData, setPropsData] = useState(props.location.query.data);
  const [dateNow, setDateNow] = useState(moment().format("HH:mm:ss"));
  const [weather, setWeather] = useState();
  const [notice, setNotice] = useState();
  const [clockInDataList, setClockInDataList] = useState();
  useEffect(() => {
    setTimeout(() => {
      // setDateNow(moment().format("HH:mm:ss"));
    }, 1000);
  });
  useEffect(() => {
    const clockIn = async () => {
      const res = await axios.get(`${conf.address}/api/clockIn`);
      console.log(res.data.data.entity);
      setClockInData(res.data.data.entity);
      setClockInState(res.data.data.entity.state);
      // return res.data.data.entity;
    };
    const weather = async () => {
      const res = await axios.get(
        `https://tianqiapi.com/api?version=v6&appid=29933195&appsecret=eRLcOS4G&vue=1`
      );
      console.log(res.data);
      // setClockInData(res.data.data.entity);
      setWeather(res.data);
      // return res.data.data.entity;
    };
    const notice = async () => {
      const res = await axios.post(`${conf.address}/api/message/logBook`, {
        id: 1,
      });
      console.log(res.data.data.entity.content);
      setNotice(res.data.data.entity.content);
      // return res.data.data.entity;
    };
    const clockInDataList = async () => {
      const res = await axios.get(`${conf.address}/api/clockIn/data`);
      console.log(res.data.data.list);
      setClockInDataList(res.data.data.list);
      // return res.data.data.entity;
    };
    clockIn();
    weather();
    notice();
    clockInDataList();
  }, []);
  const onFinish = async(values) => {
    console.log(values);
    const res = await axios.post(`${conf.address}/api/clockIn/cardReplacement`,values)
    console.log(res)
  };
  // useEffect(() => {
  //   const volume = async () => {
  //     const res = await axios.get(`${conf.address}/api/customer/volume`);
  //     console.log(res.data.data.list);
  //     setVolume(res.data.data.list);
  //     // return res.data.data.entity;
  //   };
  //   const logBook = async () => {
  //     const res = await axios.post(`${conf.address}/api/message/logBook`,{id:1});
  //     console.log(res.data.data.entity);
  //     setLogBook(res.data.data.entity.content);
  //     // return res.data.data.entity;
  //   };
  //   const departmentReport = async () => {
  //     const res = await axios.get(
  //       `${conf.address}/api/message/departmentReport`
  //     );
  //     console.log(res.data.data.list);
  //     setDepartmentReport(res.data.data.list);
  //     // return res.data.data.entity;
  //   };
  //   // clockIn();
  //   // volume();
  //   // logBook();
  //   // departmentReport();
  // }, []);
  const HorizontalLoginForm = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState();
    useEffect(() => {
      forceUpdate({});
    }, []);

    const onFinish = (values) => {
      console.log("Finish:", values);
    };
    return (
      <Form
        form={form}
        name="search_clockIn"
        layout="inline"
        onFinish={onFinish}
        style={{ padding: "10px 10px" }}
      >
        <Form.Item
          name="state"
          label={<div style={{ color: "#fff" }}>考勤查询</div>}
          style={{ marginLeft: 30 }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label={<div style={{ color: "#fff" }}>员工姓名</div>}
          style={{ marginLeft: 80 }}
        >
          <Input />
        </Form.Item>
        <Form.Item shouldUpdate={true} style={{ marginLeft: 60 }}>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              // disabled={
              //   !form.isFieldsTouched(true) ||
              //   form.getFieldsError().filter(({ errors }) => errors.length)
              //     .length
              // }
            >
              查询
            </Button>
          )}
        </Form.Item>
      </Form>
    );
  };

  const clockIn = async () => {
    console.log(props);
    let data = {
      name: props.location.query.data.name,
      time: moment(),
      place: "科技之光大厦",
      state: !clockInState,
    };
    const res = await axios.post(`${conf.address}/api/clockIn`, data);
    console.log(res.data.data.entity);
    setClockInState(res.data.data.entity.state);
    // setClockInData(res.data.data.entity);
    // return res.data.data.entity;
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
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
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

  return (
    <div>
      <Row gutter={28} style={{ marginLeft: 30 }}>
        <Col span={12}>
          <div
            style={{
              borderRadius: 15,
              height: 468,
              width: "100%",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ width: "70%", height: "100%", position: "absolute" }}>
              <div
                style={{
                  height: "50px",
                  color: "#fff",
                  fontSize: 15,
                  lineHeight: "50px",
                  backgroundImage:
                    "linear-gradient(to right, rgb(135,34,216),rgb(130,35,191), rgb(175,31,182))",
                }}
              >
                考勤打卡
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgb(1,13,37)",
                  borderBottomRightRadius: 15,
                  borderBottomLeftRadius: 15,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    color: "#fff",
                    width: "50%",
                    paddingTop: 70,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 140,
                      top: 90,
                    }}
                  >
                    <div
                      style={{
                        color: "#fff",
                        fontSize: 16,
                      }}
                    >
                      {"打卡时间" +
                        moment(clockInData && clockInData.time).format(
                          "HH:mm:ss"
                        )}
                    </div>
                    <div
                      style={{
                        color: "#fff",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          backgroundColor: "rgb(26, 50, 96)",
                          borderRadius: 100,
                          position: "absolute",
                          top: 7,
                        }}
                      />
                      {clockInData && clockInData.place}
                    </div>
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      width: "150px",
                      marginLeft: 100,
                    }}
                  >
                    <Timeline style={{ color: "#ccc" }}>
                      <Timeline.Item
                        style={{ paddingBottom: 250 }}
                        dot={
                          <div
                            style={{
                              width: 10,
                              height: 10,
                              backgroundColor: "rgb(250,250,250)",
                              borderRadius: 100,
                            }}
                          ></div>
                        }
                      >
                        上班时间 09:00
                      </Timeline.Item>
                      <Timeline.Item
                        style={{
                          marginTop: -2,
                        }}
                        dot={
                          <div
                            style={{
                              width: 10,
                              height: 10,
                              backgroundColor: "rgb(250,125,63)",
                              borderRadius: 100,
                            }}
                          ></div>
                        }
                      >
                        下班时间 17:00
                      </Timeline.Item>
                    </Timeline>
                  </div>
                </div>
                <div style={{ width: "50%" }}>
                  <div
                    style={{
                      marginTop: "76%",
                      marginLeft: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    <div
                      style={{
                        width: 190,
                        height: 190,
                        borderRadius: 180,
                        backgroundImage:
                          "linear-gradient(to right, rgb(135,34,216),rgb(130,35,191), rgb(175,31,182))",
                        position: "relative",
                        paddingTop: 25,
                        paddingLeft: 25,
                      }}
                      onClick={clockIn}
                    >
                      <div
                        style={{
                          width: 140,
                          height: 140,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 24,
                            color: "#fff",
                            paddingTop: 20,
                          }}
                        >
                          {clockInState ? "下班打卡" : "上班打卡"}
                        </div>
                        <div
                          style={{
                            fontSize: 16,
                            color: "#fff",
                            paddingLeft: 30,
                            paddingTop: 5,
                          }}
                        >
                          {dateNow}
                        </div>
                        <div
                          style={{
                            borderBottom: "2px solid #f0f0f0",
                            width: 48,
                            position: "relative",
                            left: 65,
                            paddingTop: 5,
                          }}
                        >
                          <div
                            style={{
                              width: 7,
                              height: 7,
                              backgroundColor: "#fff",
                              borderRadius: 100,
                              position: "absolute",
                              top: 3,
                              left: -1,
                            }}
                          ></div>
                        </div>
                        <div
                          style={{
                            fontSize: 14,
                            color: "#fff",
                            paddingTop: 8,
                            paddingLeft: 48,
                          }}
                        >
                          {propsData.name}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        color: "#fff",
                        display: "flex",
                        marginTop: 10,
                        marginLeft: 36,
                      }}
                    >
                      <Badge status="success" />
                      <div>已存入打卡数据</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgb(15,40,80)",
                height: "100%",
                width: "30%",
                position: "absolute",
                right: 0,
              }}
            >
              <div
                style={{
                  height: "30%",
                  borderBottom: "1px solid #fff",
                  color: "#fff",
                }}
              >
                <div style={{ paddingTop: 20 }}>
                  <ClockCircleOutlined style={{ fontSize: 24 }} />
                  <span
                    style={{
                      backgroundColor: "#000",
                      padding: "5px 30px",
                      fontSize: 16,
                      borderRadius: 5,
                      marginLeft: 20,
                    }}
                  >
                    {weather && weather.wea + weather.tem + "℃"}
                  </span>
                </div>
                <div style={{ paddingTop: 30 }}>
                  {weather && weather.air_tips}
                </div>
              </div>
              <div style={{ color: "#fff", marginTop: 30 }}>
                <span
                  style={{
                    backgroundColor: "#ff7d3e",
                    padding: "5px 30px",
                    fontSize: 16,
                    borderRadius: 5,
                  }}
                >
                  销售部：今日通知
                </span>
                <div style={{ marginTop: 30 }}>
                  <textarea
                    readonly="readonly"
                    style={{
                      /* 实现横线效果 */
                      background: "linear-gradient(transparent 98%, #29c4b1 0)",
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
                      height: "200px",
                      padding: "0 10px",
                    }}
                  >
                    {notice}
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col span={11}>
          <Card height={468} title={currentDate}>
            <Calendar fullscreen={false} style={{ height: "100%" }} />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: 20, marginLeft: 30 }} gutter={28}>
        <Col span={12} className="clock-in-data">
          <Card height={423} title={"打卡数据"}>
            <HorizontalLoginForm />
            <Table
              pagination={false}
              columns={columns}
              dataSource={clockInDataList}
              style={{
                background: "rgb(1,13,37)",
              }}
            />
          </Card>
        </Col>
        <Col span={11}>
          <Card height={423} title={"补卡申请"}>
            <Form
              name="CardReplacement"
              style={{ padding: "10px", height: "100%", width: "100%" }}
              // form={form}
              onFinish={onFinish}
              {...formItemLayout}
            >
              {console.log(1)}
              <Row>
                <Col span={12}>
                  <Form.Item
                    name="applicant"
                    label={<div style={{ color: "#fff" }}>申请人</div>}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 10 }}
                  >
                    <Input style={{ backgroundColor: "" }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="place"
                    label={<div style={{ color: "#fff" }}>所属部门</div>}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 10 }}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="explain"
                label={<div style={{ color: "#fff" }}>请假说明</div>}
              >
                <TextArea
                  rows={8}
                  style={{
                    resize: "none",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="date"
                label={<div style={{ color: "#fff" }}>请假日期</div>}
              >
                <RangePicker style={{ width: "100%" }} />
              </Form.Item>
              <Row>
                <Col span={12}>
                  <Form.Item
                    name="reviewer"
                    label={<div style={{ color: "#fff" }}>审核人</div>}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 10 }}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    shouldUpdate={true}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 10 }}
                  >
                    <Button type="primary" htmlType="submit">
                      提交
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
