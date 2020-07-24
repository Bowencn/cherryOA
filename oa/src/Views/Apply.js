import React, { useState } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { AccountBookOutlined } from "@ant-design/icons";
import axios from "axios";
import conf from "../server.conf";
export default function Apply() {
  const [headTitle, setHeadTitle] = useState("报销申请");
  const [form] = Form.useForm();

  const submitForm = async(data) => {
      const res = await axios.post(`${conf.address}/api/apply`,data);
      console.log(res);
  };
  const onFinish = (values) => {
    values.title = headTitle
    console.log(values);
    submitForm(values)
  };
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  const textLayout = {
    labelCol: { span: 1 },
    wrapperCol: { span: 21 },
  };
  const tailLayout = {
    wrapperCol: { offset: 21, span: 3 },
  };
  return (
    <div>
      <Row style={{ height: 300 }}>
        <Col
          span={5}
          offset={1}
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#29c4b1",
              width: 150,
              height: 150,
              borderRadius: 90,
              textAlign: "center",
              lineHeight: 14,
            }}
            onClick={() => setHeadTitle("报销申请")}
          >
            <AccountBookOutlined style={{ color: "#fff", fontSize: 88 }} />
          </div>
          <div style={{ color: "#fff", width: 150, marginTop: 20 }}>
            报销申请
          </div>
        </Col>
        <Col
          span={5}
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#ff7d3e",
              width: 150,
              height: 150,
              borderRadius: 90,
              textAlign: "center",
              lineHeight: 14,
            }}
            onClick={() => setHeadTitle("出差申请")}
          >
            <AccountBookOutlined style={{ color: "#fff", fontSize: 88 }} />
          </div>
          <div style={{ color: "#fff", width: 150, marginTop: 20 }}>
            出差申请
          </div>
        </Col>
        <Col
          span={5}
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#3b9bf8",
              width: 150,
              height: 150,
              borderRadius: 90,
              textAlign: "center",
              lineHeight: 14,
            }}
            onClick={() => setHeadTitle("物品使用")}
          >
            <AccountBookOutlined style={{ color: "#fff", fontSize: 88 }} />
          </div>
          <div style={{ color: "#fff", width: 150, marginTop: 20 }}>
            物品使用
          </div>
        </Col>
        <Col
          span={5}
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#b65dee",
              width: 150,
              height: 150,
              borderRadius: 90,
              textAlign: "center",
              lineHeight: 14,
            }}
            onClick={() => setHeadTitle("调休申请")}
          >
            <AccountBookOutlined style={{ color: "#fff", fontSize: 88 }} />
          </div>
          <div style={{ color: "#fff", width: 150, marginTop: 20 }}>
            调休申请
          </div>
        </Col>
        <Col
          span={3}
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(253,207,95)",
              width: 150,
              height: 150,
              borderRadius: 90,
              textAlign: "center",
              lineHeight: 14,
            }}
            onClick={() => setHeadTitle("离职申请")}
          >
            <AccountBookOutlined style={{ color: "#fff", fontSize: 88 }} />
          </div>
          <div style={{ color: "#fff", width: 150, marginTop: 20 }}>
            离职申请
          </div>
        </Col>
      </Row>
      <div
        style={{
          height: 640,
          backgroundColor: "#010d24",
          borderRadius: 10,
          margin: "0 50px",
        }}
      >
        <div
          style={{
            color: "#fff",
            textAlign: "center",
            borderBottom: "1px dashed rgb(20,119,114)",
            padding: "20px 0",
          }}
        >
          <span style={{ fontSize: 18 }}>{headTitle}说明</span>
        </div>
        <Form
          {...layout}
          name="basic"
          form={form}
          onFinish={onFinish}
          initialValues={{ remember: true }}
          style={{ color: "#fff", padding: "50px 50px" }}
        >
          <Row>
            <Col span={8}>
              <Form.Item
                label={<div style={{ color: "#fff" }}>姓名</div>}
                name="name"
                style={{ color: "#fff" }}
              >
                <Input
                  style={{
                    width: 300,
                    borderColor: "rgb(20,119,114)",
                    borderRadius: 5,
                    backgroundColor: "#010d24",
                    color: "#fff",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={<div style={{ color: "#fff" }}>金额</div>}
                name="sum"
              >
                <Input
                  style={{
                    width: 300,
                    borderColor: "rgb(20,119,114)",
                    borderRadius: 5,
                    backgroundColor: "#010d24",
                    color: "#fff",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={<div style={{ color: "#fff" }}>付款方式</div>}
                name="paymentMethod"
              >
                <Input
                  style={{
                    width: 300,
                    borderColor: "rgb(20,119,114)",
                    borderRadius: 5,
                    backgroundColor: "#010d24",
                    color: "#fff",
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item
                label={<div style={{ color: "#fff" }}>日期</div>}
                name="date"
              >
                <Input
                  style={{
                    width: 300,
                    borderColor: "rgb(20,119,114)",
                    borderRadius: 5,
                    backgroundColor: "#010d24",
                    color: "#fff",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={<div style={{ color: "#fff" }}>类型</div>}
                name="type"
              >
                <Input
                  style={{
                    width: 300,
                    borderColor: "rgb(20,119,114)",
                    borderRadius: 5,
                    backgroundColor: "#010d24",
                    color: "#fff",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={<div style={{ color: "#fff" }}>所属部门</div>}
                name="department"
              >
                <Input
                  style={{
                    width: 300,
                    borderColor: "rgb(20,119,114)",
                    borderRadius: 5,
                    backgroundColor: "#010d24",
                    color: "#fff",
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label={<div style={{ color: "#fff" }}>明细</div>}
            name="detailed"
            {...textLayout}
            style={{ marginLeft: 25, paddingRight: 30 }}
          >
            <Input.TextArea
              rows={12}
              style={{
                resize: "none",
                color: "#fff",
                borderColor: "rgb(20,119,114)",
                borderRadius: 5,
                backgroundColor: "#010d24",
              }}
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                marginLeft: "-20px",
                backgroundColor: "rgb(20,119,114)",
                borderColor: "rgb(20,119,114)",
              }}
              // onClick={submit}
            >
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
