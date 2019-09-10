//import postcodes from form(when we have it)
const apiRequest = require("./../request.js");
const geolib = require("geolib");

const postcodeA = "N43HR";
const postcodeB = "W42LJ";
let resultArray;
const convertPostcode = postcode => {
  return whenTaskDone =>
    apiRequest(`https://api.postcodes.io/postcodes/${postcode}`, (err, res) => {
      if (err) {
        whenTaskDone(err);
      } else {
        const responseObj = JSON.parse(res);
        const longitude = responseObj.body.result.longitude;
        const latitude = responseObj.body.result.latitude;
        const coords = { longitude, latitude };
        whenTaskDone(null, coords);
      }
    });
};

const postcodefuncA = convertPostcode(postcodeA);
const postcodefuncB = convertPostcode(postcodeB);
const tasksArr = [postcodefuncA, postcodefuncB];

const parallelCoordinateFinder = (tasks, whenAllTasksFinished) => {
  let counter = 0;
  let resultArray = [];
  tasks.forEach((task, i) => {
    task((err, res) => {
      //the following code is only run when the response from our api is ready
      //if successful res would be our coords object
      counter += 1;
      if (err) {
        whenAllTasksFinished(err);
        return;
      }
      resultArray[i] = res;
      if (counter === tasksArr.length) {
        whenAllTasksFinished(null, resultArray);
      }
    });
  });
};

parallelCoordinateFinder(tasksArr, (err, resultCoordsArr) => {
  if (err) {
    console.log(err);
  } else {
    console.log(resultCoordsArr);
  }
});

// const centerCoords = geolib.getCenterOfBounds(coordsArray);
