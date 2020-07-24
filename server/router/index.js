const express = require("express");
const router = express.Router();
const user = require("./user");
const login = require("./login");
const overview = require("./overview");
const customer = require("./customer");

router.use("/user", user);
router.use("/login", login);
router.use("/overview", overview);
router.use("/customer", customer);

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
