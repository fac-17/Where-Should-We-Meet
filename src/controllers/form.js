exports.get = (req, res) => {
  res.render("form", {
    title: "form",
    cssPath: "/css/formStyle.css",
    jsPath: "/js/userForm.js"
  });
};
