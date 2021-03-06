const tape = require("tape");
const runDbBuild = require("../src/model/db_build");
const getData = require("../src/model/queries/getData");
const postData = require("../src/model/queries/postData");
const updateData = require("../src/model/queries/updateData");

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
        postcodea: "SE207BW",
        userb: "Ruby",
        postcodeb: "SW12AA",
        dateinput: "20 October 2019",
        timeinput: "14:50",
        venuetype: "bar",
        jwtoken: "jwTokenDummy2",
        venuename: "The National Gallery",
        venuepostcode: "WC2N 5DN",
        venueaddress: "Trafalgar Square"
      }
    ];
    getData("jwTokenDummy2", (err, result) => {
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
      "webtoken",
      (err, res) => {
        if (err) console.log(err);
        getData("jwTokenDummy2", (err, res) => {
          if (err) console.log(err);
          t.equals(res.rows[0].usera, "Sarah", "posts data");
          t.end();
        });
      }
    );
  });
});

tape("update data", t => {
  runDbBuild((err, res) => {
    t.error(err, "No error");
    updateData(
      "Soho House",
      "SE207BW",
      "32 Mosslea Road",
      "jwTokenDummy2",
      (err, res) => {
        if (err) console.log(err);
        getData("jwTokenDummy2", (err, res) => {
          if (err) console.log(err);
          t.equals(res.rows[0].venuename, "Soho House", "data is the same");
          t.end();
        });
      }
    );
  });
});
