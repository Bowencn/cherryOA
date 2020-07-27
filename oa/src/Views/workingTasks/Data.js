import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { GroupedColumn, Donut } from "@ant-design/charts";
import axios from "axios";
import conf from "../../server.conf";
export default function Data() {
  const [feedBack, setFeedBack] = useState();
  const [taskIndicators, setTaskIndicators] = useState();
  const [achievement, setAchievement] = useState();
  useEffect(() => {
    const achievement = async () => {
      const res = await axios.get(`${conf.address}/api/achievement`);
      console.log(res.data.data.list);
      setAchievement(res.data.data.list);
      // return res.data.data.entity;
    };
    const taskIndicators = async () => {
      const res = await axios.get(`${conf.address}/api/taskIndicators`);
      console.log(res.data.data.list);
      setTaskIndicators(res.data.data.list);
      // return res.data.data.entity;
    };
    const feedback = async () => {
      const res = await axios.get(`${conf.address}/api/customer/feedback`);
      console.log(res.data.data.list);
      setFeedBack(res.data.data.list);
      // return res.data.data.entity;
    };
    achievement();
    taskIndicators();
    feedback();
  }, []);
  const config = {
    height: 530,
    renderer: "svg",
    title: {
      visible: true,
      text: "公司员工本月上月业绩对比",
      style: {
        fontSize: 18,
        fill: "#fff",
      },
    },
    description: {
      visible: true,
      alignTo: "top",
      text: "统计调查人数：3000(人)",
      style: {
        fontSize: 14,
        fill: "#fff",
      },
    },
    legend: {
      text: { style: { fill: "#fff", fontSize: 16 } },
    },
    forceFit: true,
    data: achievement,
    xField: "月份",
    yField: "月均降雨量",
    yAxis: {
      min: 0,
      title: {
        visible: false,
        style: {
          fontSize: 14,
          fill: "#fff",
        },
      },
      label: {
        visible: true,
        formatter: (angleField) => {
          return angleField + "%";
        },
        style: {
          fontSize: 14,
          fill: "#fff",
        },
      },
      grid: {
        visible: true,
        style: {
          fill: "#fff",
        },
      },
    },
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
      grid: {
        visible: true,
        style: {
          fill: "#fff",
        },
      },
    },
    groupField: "name",
    color: ["#29c4b1", "#b65dee"],
  };
  const Bulletconfig = {
    data: taskIndicators,
    title: {
      text: "本月工作任务指标",
      style: { color: "#fff", fontSize: 18 },
    },
    color: ["#29c4b1", "#b65dee", "#ff7d3e"],
  };

  const feedBackConfig = {
    forceFit: true,
    renderer: "svg",
    title: {
      visible: true,
      text: "五月用户反馈信息效果图",
      style: { fill: "#fff" },
    },
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
    data: feedBack,
    angleField: "value",
    colorField: "type",
    color: ["#ff7d3e", "#29c4b1", "#b65dee"],
    statistic: {
      visible: true,
      style: { fill: "#fff", shadowColor: "#fff", fontSize: 88 },
    },
    label: {
      visible: true,
      type: "spider",
      //   formatter: (angleField,colorField) => {
      //     return {name:angleField,value:colorField};
      //   },
      style: { fill: "#fff", fontSize: 44, stroke: "" },
    },
  };
  return (
    <div>
      <Row gutter={[0, 20]}>
        <Col span={24}>
          <div
            style={{
              border: "1px solid black",
              backgroundColor: "#010d24",
              borderRadius: 10,
            }}
          >
            {achievement && <GroupedColumn {...config} />}
          </div>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={12}>
          <div
            style={{
              border: "1px solid black",
              backgroundColor: "#010d24",
              borderRadius: 10,
              height: 402,
              padding: "30px 40px",
            }}
            {...Bulletconfig}
          >
            <Row style={{ display: "flex", color: "#fff" }}>
              <Col style={Bulletconfig.title.style} span={12}>
                {Bulletconfig.title.text}
              </Col>
              <Col
                style={{ display: "flex", justifyContent: "flex-end" }}
                span={12}
              >
                {taskIndicators &&
                  Bulletconfig.data.map((item, index) => (
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          backgroundColor: Bulletconfig.color[index],
                          width: 13,
                          height: 13,
                          marginTop: 5,
                          marginRight: 10,
                          marginLeft: 30,
                        }}
                      ></div>
                      <span>{item.title}</span>
                    </div>
                  ))}
              </Col>
            </Row>
            <Row style={{ display: "felx", justifyContent: "space-evenly" }}>
              {taskIndicators &&
                Bulletconfig.data.map((item, index) => (
                  <div
                    style={{
                      height: 50,
                      width: "90%",
                      textAlign: "right",
                      marginTop: 40,
                    }}
                  >
                    <span style={{ color: "#fff", marginRight: 20 }}>
                      {item.measures}%
                    </span>
                    <div
                      style={{
                        backgroundColor: "rgb(26, 50, 96)",
                        width: "100%",
                        height: 20,
                        borderRadius: 45,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: Bulletconfig.color[index],
                          width: item.measures + "%",
                          height: 20,
                          borderRadius: 45,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
            </Row>
          </div>
        </Col>
        <Col span={12}>
          <div
            style={{
              border: "1px solid black",
              backgroundColor: "#010d24",
              borderRadius: 10,
            }}
          >
            {feedBack && <Donut {...feedBackConfig} />}
          </div>
        </Col>
      </Row>
    </div>
  );
}
