const venueFinder = require("../helpers/logic");
const venueFilter = require("../helpers/venueFilter");
let userName, postcode, friendName, friendPostcode, date, time;
const get = (req, res) => {
  res.render("form", {
    title: "form",
    cssPath: "/css/formStyle.css",
    jsPath: "/js/userForm.js"
  });
};

const post = (req, res) => {
  ({ userName, postcode, friendName, friendPostcode, date, time } = req.body);
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

module.exports = {
  get,
  post,
  userName,
  postcode,
  friendName,
  friendPostcode,
  date,
  time
};
