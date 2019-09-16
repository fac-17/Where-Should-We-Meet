const db_connection = require("../db_connection");

const getData = cb => {
  db_connection.query(
    "SELECT * FROM user_a_input ORDER BY id DESC LIMIT 1",
    (err, result) => {
      if (err) return cb(err);
      cb(null, result);
    }
  );
};

module.exports = getData;
