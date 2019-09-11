const express = require("express");
const router = express.Router();
const form = require("./form");
const home = require("./home");
const howItWorks = require("./howItWorks");
//write routes here

router.get("/venues", (req, res) => {
  res.render("venues", {
    title: "venues",
    cssPath: "/css/venuesSwipe.css",
    cssPathAll: "/css/homeStyle.css",
    jsPath: "/js/venuesSwipe.js"
  });
});

router.get("/", home.get);
router.get("/howitworks", howItWorks.get);
router.get("/form", form.get);
// router.post("/formsubmit", form.post);

module.exports = router;
