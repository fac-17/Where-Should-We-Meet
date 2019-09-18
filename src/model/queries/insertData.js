const db_connection = require("../db_connection");

const insertData = (venueName, venuePostcode, venueAddress, webToken, cb) => {
  db_connection.query(
    "UPDATE user_a_input SET venueName=$1, venuePostcode=$2, venueAddress=$3 WHERE jwtoken=$4",
    [venueName, venuePostcode, venueAddress, webToken],
    (err, result) => {
      if (err) return cb(err);
      cb(null, result);
    }
  );
};

module.exports = insertData;
