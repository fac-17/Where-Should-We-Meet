const setURL = (domElement, url) => {
  domElement.href = url;
};

let date = document.querySelector(".date").innerHTML;
let time = document.querySelector(".time").innerHTML;
let start = date.concat("T", time, ":00Z");

Date.prototype.addHours = function(h) {
  this.setHours(this.getHours() + h);
  return this;
};

//  CALENDAR
let friend = document.querySelector(".userB").innerHTML;
let calendarTitle = `Meeting+${friend}`; // url encoded name of the event
let startTime = new Date(start).toISOString().replace(/\W/g, "");
let endTime = new Date(start)
  .addHours(1)
  .toISOString()
  .replace(/\W/g, "");

console.log(startTime, endTime);

let startTimeOutlook = startTime.replace(/Z/, "");
let endTimeOutlook = endTime.replace(/Z/, "");

let venue = "North+Pole"; //url encoded location of the event

const linkGoogleCalendar = document.querySelector(".fa-google");
const linkOutlookCalendar = document.querySelector(".fa-outlook");
const linkYahooCalendar = document.querySelector(".fa-yahoo");

// https://calendar.google.com/calendar/r/eventedit?text=$&dates=$20190920T131300000Z/$20190920T141300000Z&location=$North+Pole

let GoogleCalendarHref = `https://calendar.google.com/calendar/r/eventedit?text=${calendarTitle}&dates=${startTime}/${endTime}&location=${venue}`;
let OutlookCalendarHref = `https://outlook.live.com/owa/?path=/calendar/action/compose&rru=addevent&startdt=${startTimeOutlook}&enddt=${endTimeOutlook}&subject=${calendarTitle}&location=${venue}`;
let YahooCalendarHref = `https://calendar.yahoo.com/?v=60&amp;title=${calendarTitle}&amp;st=${startTimeOutlook}&amp;et=${endTimeOutlook}&amp;in_loc=${venue}`;

setURL(linkGoogleCalendar, GoogleCalendarHref);
setURL(linkOutlookCalendar, OutlookCalendarHref);
setURL(linkYahooCalendar, YahooCalendarHref);

//Drop Down Menu for Calendar Selection
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// --------------------------------------ROUTE-------------------------------------------
const linkCitymapper = document.querySelector(".link-citymapper");
let postcodeA = "SE207BW";
let postcodeB = "W42LJ";

const postcodeConverter = postcode =>
  fetch(`https://api.postcodes.io/postcodes/${postcode}`)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      let longitude = myJson.result.longitude;
      let latitude = myJson.result.latitude;
      let coords = { longitude, latitude };
      return coords;
    })
    .catch(err => {
      reject(err);
    });

const routeFinder = (postcode1, postcode2) => {
  const coordsPromiseA = postcodeConverter(postcode1);
  const coordsPromiseB = postcodeConverter(postcode2);
  return Promise.all([coordsPromiseA, coordsPromiseB])
    .then(bothcoordinatesArray => {
      return bothcoordinatesArray;
    })
    .then(coordsArr => {
      let startLat = coordsArr[0].latitude;
      let startLon = coordsArr[0].longitude;
      let endLat = coordsArr[1].latitude;
      let endLon = coordsArr[1].longitude;
      let endName = "The%20Proud%20Archivist";
      let arrivalTime = "2016-08-06T21%3A00%2B01%3A00";
      let cityMapperHref = `https://citymapper.com/directions?startcoord=${startLat}%2C${startLon}&endcoord=${endLat}%2C${endLon}&endname=${endName}&arrival_time=${arrivalTime}`;
      setURL(linkCitymapper, cityMapperHref);
    })
    .catch(err => {
      console.log(err);
    });
};

routeFinder(postcodeA, postcodeB);
