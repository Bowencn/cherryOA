import React from "react";
import { Row, Col } from "antd";
import { GroupedColumn, Bullet, Donut } from "@ant-design/charts";
export default function Data() {
  const data = [
    {
      name: "满意",
      月份: "一月",
      月均降雨量: 18,
    },
    {
      name: "满意",
      月份: "二月",
      月均降雨量: 28,
    },
    {
      name: "满意",
      月份: "三月",
      月均降雨量: 39,
    },
    {
      name: "满意",
      月份: "四月",
      月均降雨量: 81,
    },
    {
      name: "满意",
      月份: "五月",
      月均降雨量: 47,
    },
    {
      name: "满意",
      月份: "六月",
      月均降雨量: 20,
    },
    {
      name: "满意",
      月份: "七月.",
      月均降雨量: 24,
    },
    {
      name: "满意",
      月份: "八月",
      月均降雨量: 35,
    },
    {
      name: "满意",
      月份: "九月",
      月均降雨量: 40,
    },
    {
      name: "满意",
      月份: "十月",
      月均降雨量: 45,
    },
    {
      name: "满意",
      月份: "十一月",
      月均降雨量: 50,
    },
    {
      name: "满意",
      月份: "十二月",
      月均降雨量: 30,
    },
    {
      name: "不满意",
      月份: "一月",
      月均降雨量: 12,
    },
    {
      name: "不满意",
      月份: "二月",
      月均降雨量: 23,
    },
    {
      name: "不满意",
      月份: "三月",
      月均降雨量: 34,
    },
    {
      name: "不满意",
      月份: "四月",
      月均降雨量: 99,
    },
    {
      name: "不满意",
      月份: "五月",
      月均降雨量: 52,
    },
    {
      name: "不满意",
      月份: "六月",
      月均降雨量: 35,
    },
    {
      name: "不满意",
      月份: "七月.",
      月均降雨量: 37,
    },
    {
      name: "不满意",
      月份: "八月",
      月均降雨量: 42,
    },
    {
      name: "不满意",
      月份: "九月",
      月均降雨量: 36,
    },
    {
      name: "不满意",
      月份: "十月",
      月均降雨量: 38,
    },
    {
      name: "不满意",
      月份: "十一月",
      月均降雨量: 30,
    },
    {
      name: "不满意",
      月份: "十二月",
      月均降雨量: 20,
    },
  ];
  const config = {
    height: 530,
    renderer: "svg",
    title: {
      visible: true,
      text: "1-12月客户满意度图标",
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
    data,
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
    data: [
      {
        title: "未完成",
        measures: [83],
      },
      {
        title: "已完成",
        measures: [13],
      },
      {
        title: "跟踪完成",
        measures: [45],
      },
    ],
    title: {
      text: "本月工作任务指标",
      style: { color: "#fff", fontSize: 18 },
    },
    color: ["#29c4b1", "#b65dee", "#ff7d3e"],
  };
  const Donutdata = [
    {
      type: "满意",
      value: 27,
    },
    {
      type: "不满意",
      value: 25,
    },
    {
      type: "未评价",
      value: 18,
    },
  ];
  const Donutconfig = {
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
    data: Donutdata,
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
            <GroupedColumn {...config} />
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
              padding:'30px 40px'
            }}
            {...Bulletconfig}
          >
            <Row style={{ display: "flex", color: "#fff",}}>
              <Col style={Bulletconfig.title.style} span={12}>
                {Bulletconfig.title.text}
              </Col>
              <Col
                style={{ display: "flex", justifyContent: "flex-end" }}
                span={12}
              >
                {Bulletconfig.data.map((item, index) => (
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
            <Row style={{display:'felx', justifyContent:'space-evenly'}}>
              {Bulletconfig.data.map((item, index) => (
                <div
                  style={{
                    height: 50,
                    width: "90%",
                    textAlign: "right",
                    marginTop:40,
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
            <Donut {...Donutconfig} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
