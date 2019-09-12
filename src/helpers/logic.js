//import postcodes from form(when we have it)
const apiRequestPromise = require("./../request.js");
const geolib = require("geolib");

const postcodeA = "N43HR";
const postcodeB = "W42LJ";

const convertPostcode = postcode => {
  return new Promise((resolve, reject) => {
    apiRequestPromise(`https://api.postcodes.io/postcodes/${postcode}`)
      .then(responseFromAPI => {
        const responseObj = JSON.parse(responseFromAPI);
        const longitude = responseObj.body.result.longitude;
        const latitude = responseObj.body.result.latitude;
        const coords = { longitude, latitude };
        resolve(coords);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const getCenter = arrayOfCoords => {
  //change console.log to return to chain further
  return geolib.getCenterOfBounds(arrayOfCoords);
};

const getVenues = centerCoords => {
  //store lat and long in variables to plug into yelp request url
  const { latitude, longitude } = centerCoords;
  console.log({ latitude });
  console.log({ longitude });
  return new Promise((resolve, reject) => {
    apiRequestPromise(
      `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`
    )
      .then(responseFromYelp => {
        resolve(JSON.parse(responseFromYelp).body.businesses);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const venueFinder = (postcodeA, postcodeB) => {
  const coordsPromiseA = convertPostcode(postcodeA);
  const coordsPromiseB = convertPostcode(postcodeB);
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
// venueFinder(postcodeA, postcodeB).then(array => {
//   console.log(array);
// });
module.exports = venueFinder;
