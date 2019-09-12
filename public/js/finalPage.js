const friend = "Bryan";

// Google Calendar

const linkCalendar = document.querySelector(".link-calendar");

let calendarTitle = `Meeting ${friend}`;
let startTime = "20190913T193000Z";
let endTime = "20190913T223000Z";
let location = "North%20Pole";

linkCalendar.href = `http://www.google.com/calendar/render?
action=TEMPLATE
&text=${calendarTitle}
&dates=${startTime}/${endTime}
&location=${location}`;

// Citymapper Route

const linkCitymapper = document.querySelector(".link-citymapper");

let startLat = "51.41828";
let startLon = "-0.05647";
let endLat = "51.537060";
let endLon = "0.079179";
let endName = "The%20Proud%20Archivist";
let arrivalTime = "2016-08-06T21%3A00%2B01%3A00";

linkCitymapper.href = `https://citymapper.com/directions?startcoord=${startLat}%2C${startLon}&endcoord=${endLat}%2C${endLon}&endname=${endName}&arrival_time=${arrivalTime}`;
