exports.get = (req, res) => {
  res.render("HIW", {
    title: "HIW",
    cssPath: "/css/howitworksStyle.css",
    jsPath: "/js/home.js"
  });
};
