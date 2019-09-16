BEGIN;

DROP TABLE IF EXISTS User_A_input;

CREATE TABLE User_A_input(
  id SERIAL PRIMARY KEY,
  userA VARCHAR(50) NOT NULL,
  postcodeA VARCHAR(10) NOT NULL,
  userB VARCHAR(50) NOT NULL,
  postcodeB VARCHAR(10) NOT NULL,
  dateInput VARCHAR(10) NOT NULL, 
  timeInput VARCHAR(10) NOT NULL,
  venueType VARCHAR(20) NOT NULL
);

INSERT INTO User_A_input(userA, postcodeA, userB, postcodeB, dateInput, timeInput, venueType) VALUES
  ('Leonie', 'SE207BW', 'Georgia', 'W55EP', '20191012', '2015', 'restaurant' );

COMMIT;
