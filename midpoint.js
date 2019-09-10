const geolib = require("geolib");

const getCenter = geolib.getCenterOfBounds([
  { latitude: 51.56021, longitude: -0.12521 },
  { latitude: 51.56373, longitude: -0.10769 }
]);

console.log(getCenter);
