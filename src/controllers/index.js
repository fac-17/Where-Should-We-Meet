const express = require("express");
const router = express.Router();
const form = require("./form");
const home = require("./home");
const howItWorks = require("./howItWorks");
const final = require("./final");
//write routes here
const samplevenues = require("./../helpers/samplevenuearray");
router.get("/venues", (req, res) => {
  res.render("venues", {
    title: "venues",
    cssPath: "/css/venuesSwipe.css",
    jsPath: "/js/venuesSwipe.js",
    venues: samplevenues
  });
});

router.get("/", home.get);
router.get("/howitworks", howItWorks.get);
router.get("/form", form.get);
router.post("/formsubmit", form.post);
router.get("/final", final.get);

module.exports = router;
