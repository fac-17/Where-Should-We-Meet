const postData = require("../model/queries/postData");
const jwt = require("jsonwebtoken");

const get = (req, res) => {
  res.render("form", {
    title: "form",
    cssPath: "/css/formStyle.css",
    jsPath: "/js/userForm.js"
  });
};

const post = (req, res) => {
  const {
    userName,
    postcode,
    friendName,
    friendPostcode,
    date,
    time
  } = req.body;
  const sessionDetails = {
    userName,
    eventCreated: true
  };
  const jwtToken = jwt.sign(sessionDetails, process.env.SECRET);
  res.cookie("meetmecookie", jwtToken);
  postData(
    userName,
    postcode,
    friendName,
    friendPostcode,
    date,
    time,
    "TBC",
    jwtToken,
    (error, result) => {
      if (error) console.log(error);
      else {
        res.redirect("/venues");
      }
    }
  );
};

module.exports = {
  get,
  post
};
