const express = require("express");
const router = express.Router();
//首页4card展示
router.get("/", (req, res) => {
  // console.log(req.body)
  res.json({
    code: 200,
    data: {
      message: "success",
      entity: {
        salesPerformance: "20",
        // unit: "万",
        salesProfit: "60",
        numberOfTransactions: "300",
        attendance: "97",
      },
    },
  });
});

module.exports = router;
