const test = require("tape");
const supertest = require("supertest");
const app = require("./../src/app");

test("1. Check that router testing is working", t => {
  t.assert(true, true, "Must return true");
  t.assert(process.env.NODE_ENV, "test", "inside testing environment");
  t.end();
});

test("2. Check our home route works", t => {
  supertest(app)
    .get("/")
    .expect(200)
    .expect("Content-type", /html/)
    .end(err => {
      t.error(err, "home route working");
      t.end();
    });
});

test("3. Check our form route works", t => {
  supertest(app)
    .get("/form")
    .expect(200)
    .expect("Content-type", /html/)
    .end(err => {
      t.error(err, "/form route working");
      t.end();
    });
});

// test("4. Check our venue route works", t => {
//   supertest(app)
//     .get("/venues")
//     .expect(200)
//     .expect("Content-type", /html/)
//     .end(err => {
//       t.error(err, "/venues route working");
//       t.end();
//     });
// });

test("5. Check 404 route works", t => {
  supertest(app)
    .get("/idontwork")
    .expect(404)
    .expect("Content-type", /html/)
    .end(err => {
      t.error(err, "/404 route working");
      t.end();
    });
});

// test("6. Check 500 route works", t => {
//   supertest(app)
//     .get("/idontworkagain")
//     .expect(500)
//     .expect("Content-type", /html/)
//     .end(err => {
//       t.error(err, "/500 route working");
//       t.end();
//     });
// });
