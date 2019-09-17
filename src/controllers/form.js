const venueFinder = require("../helpers/venueFinder");
const venueFilter = require("../helpers/venueFilter");
const postData = require("../model/queries/postData");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

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

  const sessionDetails = {
    userName,
    postcode,
    friendName,
    friendPostcode,
    date,
    time
  };
  const jwtToken = jwt.sign(sessionDetails, process.env.SECRET);
  res.cookie("meetme-cookie", jwtToken);
  postData(
    userName,
    postcode,
    friendName,
    friendPostcode,
    date,
    time,
    "TBC",
    jwtToken,
    (error, result) => {
      if (error) console.log(error);
      else {
        venueFinder(postcode, friendPostcode)
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
