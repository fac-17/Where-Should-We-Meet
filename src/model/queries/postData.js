const db_connection = require("../db_connection");

const postData = (
  userA,
  postcodeA,
  userB,
  postcodeB,
  dateInput,
  timeInput,
  venueType,
  webToken,
  cb
) => {
  db_connection.query(
    "INSERT INTO user_a_input(usera,postcodea,userb,postcodeb,dateinput,timeinput,venuetype,jwtoken) VALUES($1,$2,$3,$4,$5,$6,$7,$8)",
    [
      userA,
      postcodeA,
      userB,
      postcodeB,
      dateInput,
      timeInput,
      venueType,
      webToken
    ],
    (err, result) => {
      if (err) return err;
      cb(null, result);
    }
  );
};

module.exports = postData;
