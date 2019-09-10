const tape = require("tape");
const geolib = require("geolib");

tape("getCenter function is working", t => {
  const pointA = { latitude: 51.56021, longitude: -0.12521 };
  const pointB = { latitude: 51.56373, longitude: -0.10769 };
  const midC = { latitude: 51.56197, longitude: -0.11645 };
  t.equal(
    pointA - pointB,
    midC,
    "getCenter function returns longitude and latitude"
  );
  console.log(midC);
  t.end();
});
