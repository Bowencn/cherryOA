const express = require("express");
const router = express.Router();
router.use((req, res, next) => {
  console.log(`路由执行成功啦~~~`, Date.now());
  next();
});
router.get("/", (req, res) => {
  res.json({
    code: 200,
    data: {
      message: "success",
      entity: {
        id: 1,
        name: "XXX",
        code: "XXX",
      },
    },
  });
});
router.get("/:id", (req, res) => {
  console.log("userId:", req.params.id);
  let userId = req.params.id;
  if (userId == 1) {
    res.json({
      code: 200,
      data: {
        message: "success",
        entity: {
          id: 1,
          name: "商青竹",
          nickname: "网瘾少女",
          age: "22",
          mailbox: "qingzhu@cherry.com",
          position: "人事主管",
          telephone: "18894887765",
          address: "成都市武城区",
          userimg:
            "/userimages/49e7f736afc37931f9b40c7dfcc4b74542a91199.jpg",
          businesscard:
            "hi，大家好，我是商青竹，是人事主管，工作上有什么事情请大家互相帮助",
        },
      },
    });
  }else{
    res.json({
        code: 500,
        data: {
            message: "error"
        }
    })
  }
});
module.exports = router;
