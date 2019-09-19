const deleteData = require("../model/queries/deleteData");
const jwt = require("jsonwebtoken");
exports.get = (req, res) => {
  if (req.cookies.meetmecookie) {
    const jwtToken = req.cookies.meetmecookie;
    jwt.verify(jwtToken, process.env.SECRET, (err, decodedvalues) => {
      if (err) {
        res.status(404).end();
      } else {
        deleteData(jwtToken, (error, result) => {
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
        res.clearCookie("meetmecookie");
      }
    });
  }
};
