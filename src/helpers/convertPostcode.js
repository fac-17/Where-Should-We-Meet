const apiRequestPromise = require("./request.js");

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

module.exports = convertPostcode;
