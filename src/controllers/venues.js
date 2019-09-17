const samplevenues = require("./../helpers/samplevenuearray").venues;
exports.get = (req, res) => {
  res.render("venues", {
    title: "venues",
    cssPath: "/css/venuesSwipe.css",
    jsPath: "/js/venuesSwipe.js",
    venues: samplevenues
  });
};
