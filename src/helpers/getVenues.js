const apiRequestPromise = require("./request.js");

const getVenues = centerCoords => {
  //store lat and long in variables to plug into yelp request url
  const { latitude, longitude } = centerCoords;
  return new Promise((resolve, reject) => {
    apiRequestPromise(
      `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`
    )
      .then(responseFromYelp => {
        resolve(JSON.parse(responseFromYelp).body.businesses);
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = getVenues;
