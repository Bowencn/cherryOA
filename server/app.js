const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const globalConfig = require("./globalConfig");
const router = require("./router/index");
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "50mb",
  })
);
app.use(bodyParser.json({ limit: "50mb" }));
//跨域
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-type,Content-Length,Authorization,Accept,x-requested-with"
  );
  res.header("Access-Control-Allow-Methods", "*");
  // res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  console.log("kuayu");
  next();
});

app.use("/api", router);

app.get("/", (req, res) =>
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
  })
);
app.listen(globalConfig["port"], () => {
  console.log("服务器已启动...");
});
