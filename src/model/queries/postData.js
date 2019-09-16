const db_connection = require("../db_connection");

const postData = (
  userA,
  postcodeA,
  userB,
  postcodeB,
  dateInput,
  timeInput,
  venueType
) => {
  db_connection.query(
    "INSERT INTO user_a_input(usera,postcodea,userb,postcodeb,dateinput,timeinput,venuetype`) VALUES($1,$2,$3, $4,$5,$6,$7)",
    [userA, postcodeA, userB, postcodeB, dateInput, timeInput, venueType],
    (err, result) => {
      if (err) return err;
      cb(result);
    }
  );
};

module.exports = postData;
