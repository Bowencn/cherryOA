import React, { useState } from "react";
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
import {
  EditOutlined,
  DeleteOutlined,
  DownOutlined,
  RightOutlined,
} from "@ant-design/icons";
const { Search } = Input;
export default function AllMembers() {
  const [selectionType, setSelectionType] = useState("checkbox");

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "性别",
      key: "sex",
      dataIndex: "sex",
    },
    {
      title: "部门",
      key: "Department",
      dataIndex: "Department",
    },
    {
      title: "手机号",
      dataIndex: "phoneNum",
      key: "phoneNum",
    },
    {
      title: "职位",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "入职时间",
      dataIndax: "entryTime",
      key: "entryTime",
    },
    {
      title: "工龄",
      dataIndex: "workingYears",
      key: "workingYears",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      phoneNum: "13300009999",
      sex: "男",
      Department: "销售一部",
      position: "销售经理",
      entryTime: "2012-05-22",
      workingYears: "4",
    },
    {
      key: "2",
      name: "Jim Green",
      phoneNum: "13300009999",
      sex: "男",
      Department: "销售二部",
      position: "市场专员",
      entryTime: "2016-05-22",
      workingYears: "4",
    },
    {
      key: "3",
      name: "Joe Black",
      phoneNum: "13300009999",
      sex: "男",
      Department: "销售三部",
      position: "市场专员",
      entryTime: "2016-05-22",
      workingYears: "4",
    },
    {
      key: "4",
      name: "John Brown",
      phoneNum: "13300009999",
      sex: "男",
      Department: "销售一部",
      position: "销售经理",
      entryTime: "2016-05-22",
      workingYears: "4",
    },
    {
      key: "5",
      name: "Jim Green",
      phoneNum: "13300009999",
      sex: "男",
      Department: "销售二部",
      position: "市场专员",
      entryTime: "2016-05-22",
      workingYears: "4",
    },
    {
      key: "6",
      name: "Joe Black",
      phoneNum: "13300009999",
      sex: "男",
      Department: "销售三部",
      position: "市场专员",
      entryTime: "2016-05-22",
      workingYears: "4",
    },
    {
      key: "7",
      name: "John Brown",
      phoneNum: "13300009999",
      sex: "男",
      Department: "销售一部",
      position: "销售经理",
      entryTime: "2016-05-22",
      workingYears: "4",
    },
    {
      key: "8",
      name: "Jim Green",
      phoneNum: "13300009999",
      sex: "男",
      Department: "销售二部",
      position: "市场专员",
      entryTime: "2016-05-22",
      workingYears: "4",
    },
    {
      key: "9",
      name: "Joe Black",
      phoneNum: "13300009999",
      sex: "男",
      Department: "销售三部",
      position: "市场专员",
      entryTime: "2016-05-22",
      workingYears: "4",
    },
    {
      key: "10",
      name: "John Brown",
      phoneNum: "13300009999",
      sex: "男",
      Department: "销售一部",
      position: "销售经理",
      entryTime: "2016-05-22",
      workingYears: "4",
    },
    {
      key: "11",
      name: "Jim Green",
      phoneNum: "13300009999",
      sex: "男",
      Department: "销售二部",
      position: "市场专员",
      entryTime: "2016-05-22",
      workingYears: "4",
    },
    {
      key: "12",
      name: "Joe Black",
      phoneNum: "13300009999",
      sex: "男",
      Department: "销售三部",
      position: "市场专员",
      entryTime: "2016-05-22",
      workingYears: "4",
    },
    {
      key: "13",
      name: "John Brown",
      phoneNum: "13300009999",
      sex: "男",
      Department: "销售一部",
      position: "销售经理",
      entryTime: "2016-05-22",
      workingYears: "4",
    },
    {
      key: "14",
      name: "Jim Green",
      phoneNum: "13300009999",
      sex: "男",
      Department: "销售二部",
      position: "市场专员",
      entryTime: "2016-05-22",
      workingYears: "4",
    },
    {
      key: "15",
      name: "Joe Black",
      phoneNum: "13300009999",
      sex: "男",
      Department: "销售三部",
      position: "市场专员",
      entryTime: "2016-05-22",
      workingYears: "4",
    },
    {
      key: "16",
      name: "John Brown",
      phoneNum: "13300009999",
      sex: "男",
      Department: "销售一部",
      position: "销售经理",
      entryTime: "2016-05-22",
      workingYears: "4",
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
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
    <div className="allMembers">
      <Card
        height={948}
        title={
          <Row>
            <Col span={4}>
              所有成员
              <DownOutlined />
            </Col>
            <Col span={4}>
              在职员工
              <RightOutlined />
            </Col>
            <Col span={4}>
              试用期员工
              <RightOutlined />
            </Col>
            <Col span={4}>
              离职员工
              <RightOutlined />
            </Col>
            <Col span={8} style={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
              <Search
                placeholder="用户名/手机"
                onSearch={(value) => console.log(value)}
                style={{ width: 200,borderRadius:5 }}
              />
              <div style={{backgroundColor:"rgb(26, 50, 96)",height:30,width:30,position:'relative',borderRadius:5,marginLeft:40}}>
                <EditOutlined style={{fontSize: 20,position:'absolute',left:0,right:0,top:4}}/>
              </div>
              <div style={{backgroundColor:"rgb(26, 50, 96)",height:30,width:30,position:'relative',borderRadius:5,marginLeft:20,marginRight:80}}>
                <DeleteOutlined style={{fontSize: 20,position:'absolute',left:0,right:0,top:4}}/>
              </div>
            </Col>
          </Row>
        }
      >
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          // pagination={false}
          pagination={{ pageSize: 14}}
          columns={columns}
          dataSource={data}
          style={{
            background: "rgb(1,13,37)",
            padding: 20,
          }}
        />
      </Card>
    </div>
  );
}
