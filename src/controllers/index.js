const express = require("express");
const router = express.Router();
//write routes here

router.get("/venues", (req, res) => {
  res.render("venues", {
    title: "venues",
    cssPath: "/css/venuesSwipe.css",
    jsPath: "/js/venuesSwipe.js"
  });
});
module.exports = router;
