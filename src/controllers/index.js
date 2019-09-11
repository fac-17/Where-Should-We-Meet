const express = require("express");
const router = express.Router();
const form = require("./form");
//write routes here

router.get("/venues", (req, res) => {
  res.render("venues", {
    title: "venues",
    cssPath: "/css/venuesSwipe.css",
    jsPath: "/js/venuesSwipe.js"
  });
});

router.get("/form", form.get);
// router.post("/formsubmit", form.post);

module.exports = router;
