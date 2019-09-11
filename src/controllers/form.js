exports.get = (req, res) => {
  res.render("form", {
    title: "form",
    cssPath: "/css/formStyle.css",
    cssPathAll: "/css/homeStyle.css",
    jsPath: "/js/userForm.js"
  });
};
