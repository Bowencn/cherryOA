const express = require("express");
const router = express.Router();
const fs = require("fs");
//员工业绩对比
router.get("/", (req, res) => {
//   console.log(req.body);
//   fs.appendFileSync("public/apply/1.json", JSON.stringify(req.body) + ",");
  res.json({
    code: 200,
    data: {
      message: "success",
      list: [
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
      ],
    },
  });
});

module.exports = router;
