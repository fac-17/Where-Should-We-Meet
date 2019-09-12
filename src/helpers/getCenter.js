const geolib = require("geolib");

const getCenter = arrayOfCoords => {
  //change console.log to return to chain further
  return geolib.getCenterOfBounds(arrayOfCoords);
};
module.exports = getCenter;
