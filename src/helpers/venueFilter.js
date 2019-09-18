const venueFilter = venuesArray => {
  let newVenueArray = venuesArray.map(venueObject => {
    let newVenueObject = {};
    ["name", "image_url", "rating", "price"].forEach(
      property => (newVenueObject[property] = venueObject[property])
    );
    venueObject.location.display_address.pop(); //remove"united kingdom"
    let address = venueObject.location.display_address.join(", ");
    let postcode = venueObject.location.zip_code;
    address = address.replace(/London\s/gi, "").replace(/,[^,]*$/gi, "");
    newVenueObject.address = address;
    newVenueObject.postcode = postcode;
    return newVenueObject;
  });
  return newVenueArray;
};

module.exports = venueFilter;
// venueArray = the whole array
// the whole array is compose of N number of small object
// we want to enter inside of the small objects
// we want to iterate and return specific info
