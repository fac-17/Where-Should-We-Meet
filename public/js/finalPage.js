friend = "Bryan";

//  Calendar
const linkGoogleCalendar = document.querySelector(".link-calendar-google");
const linkOutlookCalendar = document.querySelector(".link-calendar-outlook");

// url encoded name of the event:
let calendarTitle = `Meeting+${friend}`;
//dates in IOS format
let startTime = "20190913T193000Z";
let endTime = "20190913T223000Z";
//url encoded location of the event:
let venue = "North+Pole";
let GoogleCalendarHref = `https://calendar.google.com/calendar/r/eventedit?text=${calendarTitle}&dates=${startTime}/${endTime}&location=${venue}`;

// Citymapper Route
const linkCitymapper = document.querySelector(".link-citymapper");

let startLat = "51.41828";
let startLon = "-0.05647";
let endLat = "51.537060";
let endLon = "0.079179";
let endName = "The%20Proud%20Archivist";
let arrivalTime = "2016-08-06T21%3A00%2B01%3A00";
let cityMapperHref = `https://citymapper.com/directions?startcoord=${startLat}%2C${startLon}&endcoord=${endLat}%2C${endLon}&endname=${endName}&arrival_time=${arrivalTime}`;

linkCitymapper.href = `https://citymapper.com/directions?startcoord=${startLat}%2C${startLon}&endcoord=${endLat}%2C${endLon}&endname=${endName}&arrival_time=${arrivalTime}`;

const setURL = (domElement, url) => {
  domElement.href = url;
};

console.log(linkCitymapper);
setURL(linkCitymapper, cityMapperHref);
setURL(linkGoogleCalendar, GoogleCalendarHref);
