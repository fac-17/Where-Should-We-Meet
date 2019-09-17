const venueFinder = require("../helpers/venueFinder");
const venueFilter = require("../helpers/venueFilter");
const postData = require("../model/queries/postData");
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
  console.log("post function");
  postData(
    userName,
    postcode,
    friendName,
    friendPostcode,
    date,
    time,
    "TBC",
    (error, result) => {
      if (error) console.log(error);
      else {
        console.log("I'm in post function");
        venueFinder(postcode, friendPostcode)
          .then(venuesArrayFromApi => {
            const filteredVenueArray = venueFilter(venuesArrayFromApi);
            // console.log(filteredVenueArray);
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
      }
    }
  );
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
