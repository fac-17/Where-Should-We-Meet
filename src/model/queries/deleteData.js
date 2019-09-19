const db_connection = require("../db_connection");

const deleteData = cb => {
  db_connection.query("DELETE FROM user_a_input", (err, result) => {
    if (err) return cb(err);
    cb(null, result);
  });
};

module.exports = deleteData;
