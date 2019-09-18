const getData = require("../model/queries/getData");
const venueFinder = require("../helpers/venueFinder");
const venueFilter = require("../helpers/venueFilter");

exports.get = (req, res) => {
  getData((err, result) => {
    console.log(result.rows);
    const { postcodea, postcodeb } = result.rows[0];
    console.log(postcodea, postcodeb);
    venueFinder(postcodea, postcodeb)
      .then(venuesArrayFromApi => {
        const filteredVenueArray = venueFilter(venuesArrayFromApi);
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
  });
};
