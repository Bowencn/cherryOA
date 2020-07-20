import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
export default function Login(props) {
  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 4,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 4,
    },
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(props);
    props.history.push("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        // background: "rgba(0,0,0,0.1)",
        // position: "relative",
        backgroundImage:
          "url('https://images7.alphacoders.com/567/567988.jpg')",
        backgroundSize: "cover",
      }}
    >
        <div
      style={{
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.7)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          width:'100%',
          transform: "translateY(-50%)",
        }}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{color: "#fff"}}
        >
          <Form.Item
            label={<span style={{ color: "#fff" }}>用户名:</span>}
            name="username"
            style={{ color: "#fff" }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: "#fff" }}>密码:</span>}
            name="password"
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>记住密码</Checkbox>
          </Form.Item> */}

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              登入
            </Button>
          </Form.Item>
        </Form>
      </div></div>
    </div>
  );
}
