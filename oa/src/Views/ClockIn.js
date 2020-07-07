import React, { useState, useEffect } from "react";
import { Row, Col, Calendar, Table, Form, Input, Button, Timeline } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
export default function ClockIn() {
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
                }}
              >
                <div style={{color:'#fff',width:'150px',marginLeft:100,paddingTop:70}}>
                  <Timeline style={{color: '#ccc'}}>
                    <Timeline.Item color="white" style={{paddingBottom:250}}>
                      上班时间 09:00
                    </Timeline.Item>
                    <Timeline.Item color="rgb(250,125,63)">
                      下班时间 17:00
                    </Timeline.Item>
                  </Timeline>
                </div>
                <div></div>
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
          <Card height={423} title={"补卡申请"} />
        </Col>
      </Row>
    </div>
  );
}
