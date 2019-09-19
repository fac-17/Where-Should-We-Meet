exports.client = (req, res) => {
  res.status(404).render("error", {
    title: "404",
    cssPath: "/css/errorStyle.css",
    layout: "error",
    statusCode: 404,
    errorMessage: "Page not found"
  });
};

exports.server = (err, req, res, next) => {
  res.status(500).render("error", {
    title: "500",
    cssPath: "/css/errorStyle.css",
    layout: "error",
    statusCode: 500,
    errorMessage:
      "Oops, Something went wrong! Don't worry, we're working on it!"
  });
};
