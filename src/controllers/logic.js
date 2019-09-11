//import postcodes from form(when we have it)
const apiRequestPromise = require("./../request.js");
const geolib = require("geolib");

const postcodeA = "N43HR";
const postcodeB = "W42LJ";
let resultArray;
let centerCoords;

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
  console.log(geolib.getCenterOfBounds(arrayOfCoords));
};

const coordsPromiseA = convertPostcode(postcodeA);
const coordsPromiseB = convertPostcode(postcodeB);
//use promise.all to get an array of results after both postcode conversion request promises have resolved.
Promise.all([coordsPromiseA, coordsPromiseB])
  .then(resultArray => {
    return resultArray;
  })
  .then(getCenter)
  //add more chained promises to handle different processes(YELP)
  .catch(err => {
    console.log(err);
  });
