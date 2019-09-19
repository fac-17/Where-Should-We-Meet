const db_connection = require("../db_connection");
const deleteData = (webToken, cb) => {
  db_connection.query(
    "DELETE FROM user_a_input WHERE jwToken=$1",
    [webToken],
    (err, result) => {
      if (err) return cb(err);
      cb(null, result);
    }
  );
};

module.exports = deleteData;
