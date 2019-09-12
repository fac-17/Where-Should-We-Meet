const venueFinder = require("../helpers/logic");
const venueFilter = require("../helpers/venueFilter");
exports.get = (req, res) => {
  res.render("form", {
    title: "form",
    cssPath: "/css/formStyle.css",
    jsPath: "/js/userForm.js"
  });
};

exports.post = (req, res) => {
  const { postcode, friendPostcode } = req.body;
  console.log(postcode);
  console.log(friendPostcode);
  venueFinder(postcode, friendPostcode)
    .then(venuesArrayFromApi => {
      const filteredVenueArray = venueFilter(venuesArrayFromApi);
      console.log(filteredVenueArray);
      res.render("venues", {
        title: "venues",
        cssPath: "/css/venuesSwipe.css",
        jsPath: "/js/venuesSwipe.js",
        venues: filteredVenueArray
      });
    })
    .catch(err => {
      console.log(err);
    });
};
