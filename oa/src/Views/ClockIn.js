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
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
export default function ClockIn() {
  const { TextArea } = Input;
  const { RangePicker } = DatePicker;
  const HorizontalLoginForm = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState();

    // To disable submit button at the beginning.
    useEffect(() => {
      forceUpdate({});
    }, []);

    const onFinish = (values) => {
      console.log("Finish:", values);
    };

    return (
      <Form
        form={form}
        name="horizontal_login"
        layout="inline"
        onFinish={onFinish}
        style={{ padding: "0 10px" }}
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
              disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              查询
            </Button>
          )}
        </Form.Item>
      </Form>
    );
  };
  const Card = (config) => {
    console.log(config);
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
                      // width: "100px",
                      left: 140,
                      top:90
                    }}
                  >
                    <div
                      style={{
                        color: "#fff",
                        fontSize: 16,
                      }}
                    >
                      打卡时间08:46:35
                    </div>
                    <div
                      style={{
                        color: "#fff",
                        position:'relative'
                      }}
                    >
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          backgroundColor: "rgb(26, 50, 96)",
                          borderRadius: 100,
                          position:'absolute',
                          top:7
                        }}
                      ></div>
                      科技之光大厦
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
                          下班打卡
                        </div>
                        <div
                          style={{
                            fontSize: 16,
                            color: "#fff",
                            paddingLeft: 30,
                            paddingTop: 5,
                          }}
                        >
                          18:15:36
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
                          王小天
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        // textAlign: "center",
                        // width: 190,
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
            ></div>
          </div>
        </Col>
        <Col span={11}>
          <Card height={468}>
            <Calendar />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: 20, marginLeft: 30 }} gutter={28}>
        <Col span={12}>
          <Card height={423} title={"打卡数据"}>
            <HorizontalLoginForm />
            <Table
              pagination={false}
              columns={columns}
              dataSource={data}
              style={{
                backgroundColor: "rgb(1,13,37)",
              }}
            />
          </Card>
        </Col>
        <Col span={11}>
          <Card height={423} title={"补卡申请"}>
            <Form
              name="CardReplacement"
              // layout="inline"
              style={{ padding: "10px", height: "100%", width: "100%" }}
              // labelCol={{span:10}}
              {...formItemLayout}
            >
              <Row>
                <Col span={12}>
                  <Form.Item
                    name="state"
                    label={<div style={{ color: "#fff" }}>考勤查询</div>}
                    // style={{ width: "50%" }}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 10 }}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    label={<div style={{ color: "#fff" }}>员工姓名</div>}
                    // style={{ width: "50%" }}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 10 }}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label={<div style={{ color: "#fff" }}>请假说明</div>}>
                <TextArea rows={6} />
              </Form.Item>
              <Form.Item label={<div style={{ color: "#fff" }}>请假日期</div>}>
                <RangePicker style={{ width: "100%" }} />
              </Form.Item>
              <Row>
                <Col span={12}>
                  <Form.Item
                    // name="state"
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