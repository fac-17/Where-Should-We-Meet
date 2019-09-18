const getData = require("../model/queries/getData");

exports.get = (req, res) => {
  getData((error, response) => {
    if (error) console.log(error);
    else {
      console.log(response.rows[0]);
      res.render("final", {
        title: "final",
        cssPath: "/css/finalStyle.css",
        jsPath: "/js/finalPage.js",
        data: response.rows[0]
      });
    }
  });
};
