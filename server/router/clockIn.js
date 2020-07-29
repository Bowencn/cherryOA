const express = require("express");
const router = express.Router();
const fs = require("fs");
//打卡
router.get("/departmentReport", (req, res) => {
  // console.log(req.body)
  res.json({
    code: 200,
    data: {
      message: "success",
      list: [
        {
          id: "2",
          name: "李熙凝",
          date: "2020-07-27",
          time: "14:06",
          content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
        },
        {
          id: "2",
          name: "李熙凝",
          date: "2020-07-27",
          time: "14:06",
          content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
        },
        {
          id: "2",
          name: "李熙凝",
          date: "2020-07-27",
          time: "14:06",
          content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
        },
        {
          id: "2",
          name: "李熙凝",
          date: "2020-07-27",
          time: "14:06",
          content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
        },
      ],
    },
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  fs.appendFileSync('public/apply/clockIn.json',JSON.stringify(req.body)+"," );
  res.json({
    code: 200,
    data: {
      message: "success",
      entity: req.body,
    },
  });
});
router.get("/", (req, res) => {
//   console.log(req.body);
  res.json({
    code: 200,
    data: {
      message: "success",
      entity: {
        name: "商青竹",
        time: "2020-07-27T07:21:35.508Z",
        place: "科技之光大厦",
        state: 1,
      },
    },
  });
});
//打卡数据
router.get("/data", (req, res) => {
  //   console.log(req.body);
    res.json({
      code: 200,
      data: {
        message: "success",
        list: [
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
        ]
      },
    });
  });
  //补卡申请
  router.post("/cardReplacement", (req, res) => {
    console.log(req.body)
    fs.appendFileSync('public/apply/clockIn.json',JSON.stringify(req.body)+"," );
    res.json({
      code: 200,
      data: {
        message: "success",
      },
    });
  });
module.exports = router;
