const express = require("express");
const router = express.Router();
//所有员工
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
//笔记本
router.post('/logBook',(req,res)=>{
  console.log(req.body.id)
  res.json({
      code: 200,
      data: {
          message: "success",
          entity: {
            content: '销售一部午饭后集体去会议室，集体培训一小时，带上笔记'
          }
      }
  })
})
//打卡通知
router.post('/notice',(req,res)=>{
  console.log(req.body.id)
  res.json({
      code: 200,
      data: {
          message: "success",
          entity: {
            content: '销售一部午饭后集体去会议室，集体培训一小时，带上笔记'
          }
      }
  })
})
module.exports = router;
