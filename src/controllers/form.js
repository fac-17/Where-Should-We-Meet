const venueFinder = require("../helpers/logic");

exports.get = (req, res) => {
  res.render("form", {
    title: "form",
    cssPath: "/css/formStyle.css",
    jsPath: "/js/userForm.js"
  });
};

exports.post = (req, res) => {
  const { postcode, friendPostcode } = req.body;
  venueFinder(postcode, friendPostcode);
  res.render("venues", {
    title: "venues",
    cssPath: "/css/venuesSwipe.css",
    jsPath: "/js/venuesSwipe.js"
  });
};
