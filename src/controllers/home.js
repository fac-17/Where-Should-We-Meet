const deleteData = require("../model/queries/deleteData");

exports.get = (req, res) => {
  if (req.cookies.meetmecookie) {
    res.clearCookie("meetmecookie");
  }

  deleteData((error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.render("home", {
        title: "home",
        cssPath: "/css/homeStyle.css",
        jsPath: "/js/home.js"
      });
    }
  });
};
