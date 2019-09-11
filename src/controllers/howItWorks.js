exports.get = (req, res) => {
  res.render("HIW", {
    title: "HIW",
    cssPath: "/css/homeStyle.css",
    jsPath: "/js/home.js"
  });
};
