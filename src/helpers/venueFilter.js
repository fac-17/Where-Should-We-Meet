const venueFilter = (venuesArray) => {
  let newVenueArray = venuesArray.map((venueObject) => {
    let newVenueObject = {};
    ["name", "image_url", "rating", "price"].forEach(
      (property) => (newVenueObject[property] = venueObject[property])
    );
    if (!newVenueObject.image_url) {
      newVenueObject.image_url = "/img/imagenotavailable.jpg";
    }
    venueObject.location.display_address.pop(); //remove"united kingdom"
    let address = venueObject.location.display_address.join(", ");
    let postcode = venueObject.location.zip_code;
    address = address.replace(/London\s/gi, "").replace(/,[^,]*$/gi, "");
    newVenueObject.address = address;
    newVenueObject.postcode = postcode;
    return newVenueObject;
  });
  //deletes extra elements and makes it an array of 10 venues
  newVenueArray.length = 10;
  return newVenueArray;
};

module.exports = venueFilter;
