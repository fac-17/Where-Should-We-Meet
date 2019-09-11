const geolib = require("geolib");

const getCenter = geolib.getCenterOfBounds([
  { longitude: -0.109091, latitude: 51.563788 },
  { longitude: -0.136024, latitude: 51.466785 }
]);

console.log(getCenter);
