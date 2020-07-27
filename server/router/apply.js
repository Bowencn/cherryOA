const express = require("express");
const router = express.Router();
const fs = require("fs");
//申请
router.post("/", (req, res) => {
  console.log(req.body)
  fs.appendFileSync('public/apply/1.json',JSON.stringify(req.body)+"," );
  res.json({
    code: 200,
    data: {
      message: "success",
    },
  });
});

module.exports = router;