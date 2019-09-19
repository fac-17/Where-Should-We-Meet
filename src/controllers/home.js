exports.get = (req, res) => {
  if (req.cookies.meetmecookie) {
    res.clearCookie("meetmecookie");
  }
  res.render("home", {
    title: "home",
    cssPath: "/css/homeStyle.css",
    jsPath: "/js/home.js"
  });
};
