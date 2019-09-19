const mainContainer = document.querySelector(".main-container");
const containerSwipe = document.querySelector(".swipe-container");
const childCount = containerSwipe.children.length;

containerSwipe.style.setProperty("--n", childCount);

// swipe function
function unify(event) {
  return event.changedTouches ? event.changedTouches[0] : event;
}

let x0 = null;
const lock = event => {
  x0 = unify(event).clientX;
};

let currentVenueIndex = 0;

const move = event => {
  if (x0 || x0 === 0) {
    let distanceX = unify(event).clientX - x0,
      sign = Math.sign(distanceX);
    if (
      (currentVenueIndex > 0 || sign < 0) &&
      (currentVenueIndex < childCount - 1 || sign > 0)
    )
      containerSwipe.style.setProperty("--i", (currentVenueIndex -= sign));
    x0 = null;
  }
};

containerSwipe.addEventListener("mousedown", lock, false);
containerSwipe.addEventListener("mouseup", move, false);

containerSwipe.addEventListener("touchstart", lock, false);
containerSwipe.addEventListener("touchend", move, false);

containerSwipe.addEventListener(
  "touchmove",
  event => {
    event.preventDefault();
  },
  false
);

// venue button
let venueSubmitButton = document.querySelector(".venue-submit-button");
let allVenueForm = document.querySelectorAll(".venue-form-wrap");

let venueSubmitFunc = event => {
  allVenueForm[currentVenueIndex].submit();
};

venueSubmitButton.addEventListener("click", venueSubmitFunc);
