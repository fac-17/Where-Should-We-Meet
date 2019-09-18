const express = require("express");
const router = express.Router();
const form = require("./form");
const home = require("./home");
const howItWorks = require("./howItWorks");
const venues = require("./venues");
const final = require("./final");
//write routes here

router.get("/", home.get);
router.get("/howitworks", howItWorks.get);
router.get("/form", form.get);
router.post("/form", form.post);
router.get("/venues", venues.get);
router.get("/final", final.get);

module.exports = router;
