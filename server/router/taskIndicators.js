const express = require("express");
const router = express.Router();
//工作任务指标
router.get("/", (req, res) => {
  // console.log(req.body)
  res.json({
    code: 200,
    data: {
      message: "success",
      list: [
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
      ]
    },
  });
});

module.exports = router;