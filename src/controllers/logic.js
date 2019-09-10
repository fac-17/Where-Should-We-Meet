//import postcodes from form(when we have it)
const apiRequest = require("./../request.js");
const geolib = require("geolib");

const postcodeA = "N43HR";
const postcodeB = "W42LJ";
const convertPostcode = postcode => {
  return cb =>
    apiRequest(`https://api.postcodes.io/postcodes/${postcode}`, (err, res) => {
      if (err) {
        cb(err);
      } else {
        const responseObj = JSON.parse(res);
        const longitude = responseObj.body.result.longitude;
        const latitude = responseObj.body.result.latitude;
        const coords = { longitude, latitude };
        cb(null, coords);
      }
    });
};

const postcodefuncA = convertPostcode(postcodeA);
const postcodefuncB = convertPostcode(postcodeB);
const tasksArr = [postcodefuncA, postcodefuncB];

const parallelCoordinateFinder = (tasks, callback) => {
  let counter = 0;
  let hasFailed = false;
  let resultArray = [];
  tasks.forEach((func, i) => {
    func((err, res) => {
      //the following code is only run when the response from our api is ready
      //if successful res would be our coords object
      counter += 1;
      if (err) {
        hasFailed = true;
        callback(err);
        return;
      }
      resultArray[i] = res;
      if (counter === tasksArr.length) {
        callback(null, resultArray);
      }
    });
  });
};

parallelCoordinateFinder(tasksArr, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

// const centerCoords = geolib.getCenterOfBounds(coordsArray);
