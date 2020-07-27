const express = require("express");
const router = express.Router();
const user = require("./user");
const login = require("./login");
const overview = require("./overview");
const customer = require("./customer");
const apply = require("./apply");
const achievement = require("./achievement");
const taskIndicators = require("./taskIndicators");
const staff = require("./staff");
const message = require("./message");
const clockIn = require("./clockIn");


router.use("/user", user);
router.use("/login", login);
router.use("/overview", overview);
router.use("/customer", customer);
router.use("/apply", apply);
router.use("/achievement", achievement);
router.use("/taskIndicators", taskIndicators);
router.use("/staff", staff);
router.use("/message", message);
router.use("/clockIn", clockIn);

router.use((req, res, next) => {
  console.log("路由启动");
  next();
});

router.get("/", (req, res) => {
  res.json({
    status: 200,
    data: "请求成功",
  });
});
module.exports = router;
