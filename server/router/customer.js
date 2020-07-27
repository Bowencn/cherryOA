const express = require("express");
const router = express.Router();
//客户联系资料
router.get("/", (req, res) => {
  // console.log(req.body)attitude
  res.json({
    code: 200,
    data: {
      message: "success",
      list: [
        {
          key: "1",
          name: "John Brown",
          phoneNumber: "133-0000-2200",
          staff: "思瑶",
          department: "销售一部",
          state: "已成交",
        },
        {
          key: "2",
          name: "Jim Green",
          phoneNumber: "188-4477-6578",
          staff: "王小天",
          department: "销售二部",
          state: "未成交",
        },
        {
          key: "3",
          name: "Joe Black",
          phoneNumber: "148-2456-2215",
          staff: "苏白",
          department: "销售三部",
          state: "考虑中",
        },
        {
          key: "4",
          name: "John Brown",
          phoneNumber: "133-0000-2200",
          staff: "思瑶",
          department: "销售一部",
          state: "已成交",
        },
        {
          key: "5",
          name: "Jim Green",
          phoneNumber: "188-4477-6578",
          staff: "王小天",
          department: "销售二部",
          state: "未成交",
        },
        {
          key: "6",
          name: "Joe Black",
          phoneNumber: "148-2456-2215",
          staff: "苏白",
          department: "销售三部",
          state: "考虑中",
        },
        {
          key: "7",
          name: "John Brown",
          phoneNumber: "133-0000-2200",
          staff: "思瑶",
          department: "销售一部",
          state: "已成交",
        },
        {
          key: "8",
          name: "Jim Green",
          phoneNumber: "188-4477-6578",
          staff: "王小天",
          department: "销售二部",
          state: "未成交",
        },
        {
          key: "9",
          name: "Joe Black",
          phoneNumber: "148-2456-2215",
          staff: "苏白",
          department: "销售三部",
          state: "考虑中",
        },
        {
          key: "10",
          name: "John Brown",
          phoneNumber: "133-0000-2200",
          staff: "思瑶",
          department: "销售一部",
          state: "已成交",
        },
        {
          key: "11",
          name: "Jim Green",
          phoneNumber: "188-4477-6578",
          staff: "王小天",
          department: "销售二部",
          state: "未成交",
        },
        {
          key: "12",
          name: "Joe Black",
          phoneNumber: "148-2456-2215",
          staff: "苏白",
          department: "销售三部",
          state: "考虑中",
        },
        {
          key: "13",
          name: "John Brown",
          phoneNumber: "133-0000-2200",
          staff: "思瑶",
          department: "销售一部",
          state: "已成交",
        },
        {
          key: "14",
          name: "Jim Green",
          phoneNumber: "188-4477-6578",
          staff: "王小天",
          department: "销售二部",
          state: "未成交",
        },
        {
          key: "15",
          name: "Joe Black",
          phoneNumber: "148-2456-2215",
          staff: "苏白",
          department: "销售三部",
          state: "考虑中",
        },
        {
          key: "16",
          name: "John Brown",
          phoneNumber: "133-0000-2200",
          staff: "思瑶",
          department: "销售一部",
          state: "已成交",
        },
      ],
    },
  });
});
//客户城市分布
router.get("/city", (req, res) => {
  // console.log(req.body)attitude
  res.json({
    code: 200,
    data: {
      message: "success",
      list: [
        {
          type: "成都",
          value: 15,
        },
        {
          type: "绵阳",
          value: 35,
        },
        {
          type: "德阳",
          value: 25,
        },
        {
          type: "南充",
          value: 25,
        },
      ],
    },
  });
});
//客户满意度
router.get("/attitude", (req, res) => {
  // console.log(req.body)
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
//客户年龄分布
router.get("/age", (req, res) => {
  // console.log(req.body)attitude
  res.json({
    code: 200,
    data: {
      message: "success",
      list: [
        {
          type: "20岁以下",
          value: 27,
        },
        {
          type: "20-30岁",
          value: 55,
        },
        {
          type: "30-40岁",
          value: 18,
        },
        {
          type: "40-50岁",
          value: 30,
        },
        {
          type: "50岁以上",
          value: 10,
        },
      ],
    },
  });
});
// 客户区域分布
router.get("/area", (req, res) => {
  // console.log(req.body)attitude
  res.json({
    code: 200,
    data: {
      message: "success",
      list: [
        {
          type: "一区",
          sales: 38,
        },
        {
          type: "二区",
          sales: 52,
        },
        {
          type: "三区",
          sales: 61,
        },
        {
          type: "四区",
          sales: 145,
        },
        {
          type: "五区",
          sales: 48,
        },
        {
          type: "六区",
          sales: 38,
        },
        {
          type: "七区",
          sales: 38,
        },
      ],
    },
  });
});
//用户反馈
router.get("/feedback", (req, res) => {
  res.json({
    code: 200,
    data: {
      message: "success",
      list: [
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
      ],
    },
  });
});
//客户成交量
router.get("/volume", (req, res) => {
  res.json({
    code: 200,
    data: {
      message: "success",
      list:  [
        {
          type: "一区",
          sales: 38,
        },
        {
          type: "二区",
          sales: 52,
        },
        {
          type: "三区",
          sales: 61,
        },
        {
          type: "四区",
          sales: 145,
        },
        {
          type: "五区",
          sales: 48,
        },
        {
          type: "六区",
          sales: 38,
        },
        {
          type: "七区",
          sales: 38,
        },
      ]
    },
  });
});
//客户资料文件
router.get("/informationDocument", (req, res) => {
  // console.log(req.body)attitude
  res.json({
    code: 200,
    data: {
      message: "success",
      list:[
        {
          key: "1",
          name: "John Brown",
          phoneNumber: "133-0000-2200",
          executiveDirector: "思瑶",
          RegionalScope: "成华区",
          sex: "男",
        },
        {
          key: "2",
          name: "Jim Green",
          phoneNumber: "188-4077-6578",
          executiveDirector: "王小天",
          RegionalScope: "云龙区",
          sex: "女",
        },
        {
          key: "3",
          name: "Joe Black",
          phoneNumber: "148-2456-2215",
          executiveDirector: "苏白",
          RegionalScope: "白虎区",
          sex: "女",
        },
        {
          key: "4",
          name: "John Brown",
          phoneNumber: "133-0000-2200",
          executiveDirector: "思瑶",
          RegionalScope: "成华区",
          sex: "男",
        },
        {
          key: "5",
          name: "Jim Green",
          phoneNumber: "188-4477-6578",
          executiveDirector: "王小天",
          RegionalScope: "云龙区",
          sex: "女",
        },
        {
          key: "6",
          name: "Joe Black",
          phoneNumber: "148-2456-2215",
          executiveDirector: "苏白",
          RegionalScope: "白虎区",
          sex: "女",
        },
        {
          key: "7",
          name: "John Brown",
          phoneNumber: "133-0000-2200",
          executiveDirector: "思瑶",
          RegionalScope: "成华区",
          sex: "男",
        },
        {
          key: "8",
          name: "Jim Green",
          phoneNumber: "188-4477-6578",
          executiveDirector: "王小天",
          RegionalScope: "云龙区",
          sex: "女",
        },
        {
          key: "9",
          name: "Joe Black",
          phoneNumber: "148-2456-2215",
          executiveDirector: "苏白",
          RegionalScope: "白虎区",
          sex: "女",
        },
        {
          key: "10",
          name: "John Brown",
          phoneNumber: "133-0000-2200",
          executiveDirector: "思瑶",
          RegionalScope: "成华区",
          sex: "男",
        },
        {
          key: "11",
          name: "Jim Green",
          phoneNumber: "188-4477-6578",
          executiveDirector: "王小天",
          RegionalScope: "云龙区",
          sex: "女",
        },
        {
          key: "12",
          name: "Joe Black",
          phoneNumber: "148-2456-2215",
          executiveDirector: "苏白",
          RegionalScope: "白虎区",
          sex: "女",
        },
        {
          key: "13",
          name: "John Brown",
          phoneNumber: "133-0000-2200",
          executiveDirector: "思瑶",
          RegionalScope: "成华区",
          sex: "男",
        },
        {
          key: "14",
          name: "Jim Green",
          phoneNumber: "188-4477-6578",
          executiveDirector: "王小天",
          RegionalScope: "云龙区",
          sex: "女",
        },
        {
          key: "15",
          name: "Joe Black",
          phoneNumber: "148-2456-2215",
          executiveDirector: "苏白",
          RegionalScope: "白虎区",
          sex: "女",
        },
        {
          key: "16",
          name: "John Brown",
          phoneNumber: "133-0000-2200",
          executiveDirector: "思瑶",
          RegionalScope: "成华区",
          sex: "男",
        },
      ]
    },
  });
});
//客户谈判情况Negotiations
router.get("/negotiations", (req, res) => {
  res.json({
    code: 200,
    data: {
      message: "success",
      list:  [
        {
          type: "有意向客户",
          value: 15,
        },
        {
          type: "考虑中客户",
          value: 35,
        },
        {
          type: "合作客户",
          value: 25,
        },
      ]
    },
  });
});
module.exports = router;
