BEGIN;

DROP TABLE IF EXISTS User_A_input;

CREATE TABLE User_A_input(
  id SERIAL PRIMARY KEY,
  userA VARCHAR(50) NOT NULL,
  postcodeA VARCHAR(20) NOT NULL,
  userB VARCHAR(50) NOT NULL,
  postcodeB VARCHAR(20) NOT NULL,
  dateInput VARCHAR(50) NOT NULL, 
  timeInput VARCHAR(50) NOT NULL,
  venueType VARCHAR(50) NOT NULL, 
  jwToken VARCHAR NOT NULL UNIQUE, 
  venueName VARCHAR,
  venuePostcode VARCHAR,
  venueAddress VARCHAR
);

INSERT INTO User_A_input(userA, postcodeA, userB, postcodeB, dateInput, timeInput, venueType, jwToken, venueName, venuePostcode, venueAddress) VALUES
  ('Leonie', 'SE207BW', 'Georgia', 'W55EP', '18 September 2019', '20:15', 'restaurant', 'jwTokenDummy', 'Dishmaker', 'WC2H 9FB', '12 Upper Saint Martins Lane'),
  ('Sarah', 'SE207BW', 'Ruby', 'SW12AA', '20 October 2019', '14:50', 'bar', 'jwTokenDummy2', 'The National Gallery', 'WC2N 5DN', 'Trafalgar Square'); 

COMMIT;
