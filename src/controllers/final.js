const getData = require("../model/queries/getData");

exports.get = (req, res) => {
  getData((error, response) => {
    if (error) console.log(error);
    else {
      res.render("final", {
        title: "final",
        cssPath: "/css/finalStyle.css",
        jsPath: "/js/finalPage.js",
        data: response.rows[0]
      });
    }
  });
};
