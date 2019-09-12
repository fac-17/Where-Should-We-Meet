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

const getVenues = centerCoords => {
  const { latitude, longitude } = centerCoords;
  console.log({ latitude });
  console.log({ longitude });
  apiRequestPromise(
    `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`
  )
    .then(responseFromYelp => {
      console.log("responseFromYelp", responseFromYelp);
    })
    .catch(err => {
      console.log(err);
    });
};
const getCenter = arrayOfCoords => {
  //change console.log to return to chain further
  return geolib.getCenterOfBounds(arrayOfCoords);
};

const coordsPromiseA = convertPostcode(postcodeA);
const coordsPromiseB = convertPostcode(postcodeB);
//use promise.all to get an array of results after both postcode conversion request promises have resolved.
Promise.all([coordsPromiseA, coordsPromiseB])
  .then(resultArray => {
    return resultArray;
  })
  .then(getCenter)
  .then(getVenues)
  //add more chained promises to handle different processes(YELP)
  .catch(err => {
    console.log(err);
  });
