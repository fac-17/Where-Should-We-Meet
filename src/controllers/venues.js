const getData = require("../model/queries/getData");
const venueFinder = require("../helpers/venueFinder");
const venueFilter = require("../helpers/venueFilter");
const jwt = require("jsonwebtoken");

exports.get = (req, res) => {
  const jwtToken = req.cookies.meetmecookie;
  console.log("jwt", jwtToken);
  jwt.verify(jwtToken, process.env.SECRET, (err, decodedvalues) => {
    if (err) {
      res.status(404).end();
    } else {
      getData(jwtToken, (err, result) => {
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
    }
  });
};
