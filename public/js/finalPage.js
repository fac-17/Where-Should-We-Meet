const setURL = (domElement, url) => {
  domElement.href = url;
};

//  CALENDAR
let friend = "Bryan";
let calendarTitle = `Meeting+${friend}`; // url encoded name of the event
let startTime = "20190913T193000Z"; //dates in IOS format
let endTime = "20190913T223000Z";
let startTimeOutlook = "20201231T193000";
let endTimeOutlook = "20201231T223000";
let venue = "North+Pole"; //url encoded location of the event

const linkGoogleCalendar = document.querySelector(".fa-google");
const linkOutlookCalendar = document.querySelector(".fa-outlook");
const linkYahooCalendar = document.querySelector(".fa-yahoo");

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

// ROUTE
const linkCitymapper = document.querySelector(".link-citymapper");

let startLat = "51.41828";
let startLon = "-0.05647";
let endLat = "51.537060";
let endLon = "0.079179";
let endName = "The%20Proud%20Archivist";
let arrivalTime = "2016-08-06T21%3A00%2B01%3A00";
let cityMapperHref = `https://citymapper.com/directions?startcoord=${startLat}%2C${startLon}&endcoord=${endLat}%2C${endLon}&endname=${endName}&arrival_time=${arrivalTime}`;

setURL(linkCitymapper, cityMapperHref);
