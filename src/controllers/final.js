const getData = require("../model/queries/getData");
const jwt = require("jsonwebtoken");

exports.get = (req, res) => {
  const jwtToken = req.cookies.meetmecookie;
  console.log("jwtToken", jwtToken);
  jwt.verify(jwtToken, process.env.SECRET, (err, decodedvalues) => {
    if (err) {
      res.status(404).end();
    } else {
      getData(jwtToken, (error, response) => {
        if (error) console.log(error);
        else {
          console.log(response.rows);
          res.render("final", {
            title: "final",
            cssPath: "/css/finalStyle.css",
            jsPath: "/js/finalPage.js",
            data: response.rows[0]
          });
        }
      });
    }
  });
};
