const db_connection = require("../db_connection");

const getData = (webToken, cb) => {
  db_connection.query(
    "SELECT * FROM user_a_input WHERE jwToken=$1",
    [webToken],
    (err, result) => {
      if (err) return cb(err);
      cb(null, result);
    }
  );
};

module.exports = getData;
