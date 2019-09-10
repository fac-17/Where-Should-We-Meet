//import postcodes from form(when we have it)
const apiRequest = require("./../request.js");
const postcodeA = "N43HR";
const postcodeB = "W42LJ";

const convertPostcode = postcode => {
  apiRequest(`https://api.postcodes.io/postcodes/${postcode}`, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      const responseObj = JSON.parse(res);
      const longitude = responseObj.body.result.longitude;
      const latitude = responseObj.body.result.latitude;
      const coords = { longitude, latitude };
      return coords;
    }
  });
};

const coordsA = convertPostcode(postcodeA);
const coordsB = convertPostcode(postcodeB);
