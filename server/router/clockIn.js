const express = require("express");
const router = express.Router();
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
module.exports = router;
