const express = require("express");
const router = express.Router();
const form = require("./form");
const home = require("./home");
const howItWorks = require("./howItWorks");
const venues = require("./venues");
const final = require("./final");
const error = require("./error");

//write routes here

router.get("/", home.get);
router.get("/howitworks", howItWorks.get);
router.get("/form", form.get);
router.post("/formsubmit", form.post);
router.get("/venues", venues.get);
router.post("/venuesubmit", venues.post);
router.get("/final", final.get);

router.use(error.client);
router.use(error.server);

module.exports = router;
