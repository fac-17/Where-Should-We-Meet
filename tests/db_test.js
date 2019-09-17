const tape = require("tape");
const runDbBuild = require("../src/model/db_build");
const getData = require("../src/model/queries/getData");
const postData = require("../src/model/queries/postData");

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape("getData", t => {
  runDbBuild((err, res) => {
    t.error(err, "No error");
    let expected = [
      {
        id: 2,
        usera: "Sarah",
        postcodea: "SW17AP",
        userb: "Ruby",
        postcodeb: "SW12AA",
        dateinput: "20 October 2019",
        timeinput: "14:50",
<<<<<<< Updated upstream
        venuetype: "bar"
=======
        venuetype: "bar",
        jwtoken: "jwTokenDummy2",
        venuelongitude: null,
        venuelatitude: null
>>>>>>> Stashed changes
      }
    ];
    getData((err, result) => {
      if (err) console.log(err);
      t.deepEqual(result.rows, expected, "returns expected data");
      t.end();
    });
  });
});

tape("postData", t => {
  runDbBuild((err, res) => {
    t.error(err, "No error");
    postData(
      "Georgia",
      "W42LJ",
      "Andrei",
      "SW46HH",
      "21 August 2020",
      "17.00",
      "restaurant",
<<<<<<< Updated upstream
=======
      "webtoken",
>>>>>>> Stashed changes
      (err, res) => {
        if (err) console.log(err);
        getData((err, res) => {
          if (err) console.log(err);
          t.equals(res.rows[0].usera, "Georgia", "posts data");
          t.end();
        });
      }
    );
  });
});
