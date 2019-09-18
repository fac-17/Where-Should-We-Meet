exports.get = (req, res) => {
  res.render("home", {
    title: "home",
    cssPath: "/css/homeStyle.css",
    jsPath: "/js/home.js"
  });
};
