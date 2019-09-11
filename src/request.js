//reusable request module for api calls from backend
const https = require("https");

const apiRequestPromise = url => {
  return new Promise((resolve, reject) => {
    const request = https.get(url, response => {
      let statusCode = response.statusCode;
      let body = "";
      response.on("data", chunk => {
        body += chunk;
      });
      response.on("end", () => {
        let responseObj = {};
        responseObj.body = JSON.parse(body);
        responseObj.statusCode = statusCode;
        //handle response error
        if (statusCode !== 200) {
          reject(
            new Error(`Request failed with statusCode ${response.statusCode}`)
          );
        } else {
          resolve(JSON.stringify(responseObj));
        }
      });
      //handle connection error
      request.on("error", err => reject(err));
    });
  });
};

// const apiRequest = (url, cb) => {
//   https.get(url, responseFromAPI => {
//     let statusCode = responseFromAPI.statusCode;
//     let body = "";
//     responseFromAPI.on("data", chunk => {
//       body += chunk;
//     });
//     responseFromAPI.on("end", () => {
//       let responseObj = {};
//       responseObj.body = JSON.parse(body);
//       responseObj.statusCode = statusCode;
//       if (statusCode !== 200) {
//         cb(new TypeError("StatusCode is not 200, request failed"));
//       } else {
//         cb(null, JSON.stringify(responseObj));
//       }
//     });
//   });
// };

module.exports = apiRequestPromise;
