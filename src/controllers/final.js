const variables = require("./form");

exports.get = (req, res) => {
  res.render("final", {
    title: "final",
    cssPath: "/css/finalStyle.css",
    jsPath: "/js/finalPage.js",
    friendName: variables.friendName,
    date: variables.date,
    time: variables.time
  });
};
