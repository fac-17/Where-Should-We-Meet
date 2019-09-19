const getData = require("../model/queries/getData");
const venueFinder = require("../helpers/venueFinder");
const venueFilter = require("../helpers/venueFilter");
const updateData = require("../model/queries/updateData");
const jwt = require("jsonwebtoken");

exports.get = (req, res) => {
  const jwtToken = req.cookies.meetmecookie;
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

exports.post = (req, res) => {
  console.log("inside post function");
  const jwtToken = req.cookies.meetmecookie;
  const { venuename, venueaddress, venuepostcode } = req.body;
  console.log("venuename", venuename);
  console.log("venueaddress", venueaddress);
  console.log("venuepostcode", venuepostcode);
  updateData(
    venuename,
    venuepostcode,
    venueaddress,
    jwtToken,
    (error, result) => {
      if (error) console.log(error);
      else {
        res.redirect("/final");
      }
    }
  );
};
