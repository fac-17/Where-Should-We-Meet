//import postcodes from form(when we have it)
const convertPostcode = require("./convertPostcode");
const getCenter = require("./getCenter");
const getVenues = require("./getVenues");

const venueFinder = (postcode1, postcode2) => {
  const coordsPromiseA = convertPostcode(postcode1);
  const coordsPromiseB = convertPostcode(postcode2);
  //use promise.all to get an array of results after both postcode conversion request promises have resolved.
  return (
    Promise.all([coordsPromiseA, coordsPromiseB])
      .then(bothcoordinatesArray => {
        return bothcoordinatesArray;
      })
      .then(getCenter)
      .then(getVenues)
      .then(venuesArray => {
        return venuesArray;
      })
      //add more chained promises to handle different processes(YELP)
      .catch(err => {
        console.log(err);
      })
  );
};
module.exports = venueFinder;
