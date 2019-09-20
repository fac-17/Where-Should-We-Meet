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
    console.log(newVenueObject);
    return newVenueObject;
  });
  return newVenueArray;
};

module.exports = venueFilter;
