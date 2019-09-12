exports.get = (req, res) => {
  res.render("final", {
    title: "final",
    cssPath: "/css/homeStyle.css",
    jsPath: "/js/finalPage.js"
  });
};
