const mainContainer = document.querySelector(".main-container");
const containerSwipe = document.querySelector(".swipe-container");
const childCount = containerSwipe.children.length;
const dotsArray = document.querySelectorAll(".step");

containerSwipe.style.setProperty("--n", childCount);

// helper function to only take into account the touch point that was last changed.
function unify(event) {
  return event.changedTouches ? event.changedTouches[0] : event;
}

let x0 = null;

const lock = (event) => {
  x0 = unify(event).clientX;
};

let currentVenueIndex = 0;
dotsArray[currentVenueIndex].classList.add("active");

const moveHandler = (event) => {
  event = unify(event);
  if ((event.clientX && x0) || x0 === 0) {
    let distanceX = event.clientX - x0,
      direction = Math.sign(distanceX);
    updateSlide(direction);
    x0 = null;
  } else if (event.code === "ArrowRight" || event.code === "ArrowLeft") {
    let direction = event.code === "ArrowRight" ? -1 : 1;
    updateSlide(direction);
  } else {
    return;
  }
};

//direction -1 is right and +1 is left because swiping left should move the carousel one element right
const updateSlide = (direction) => {
  if (
    (currentVenueIndex > 0 || direction < 0) &&
    (currentVenueIndex < childCount - 1 || direction > 0)
  ) {
    let newVenueIndex = currentVenueIndex - direction;
    containerSwipe.style.setProperty("--i", newVenueIndex);
    dotsArray[currentVenueIndex].classList.remove("active");
    dotsArray[newVenueIndex].classList.add("active");
    currentVenueIndex -= direction;
  }
};

containerSwipe.addEventListener("mousedown", lock, false);
containerSwipe.addEventListener("mouseup", moveHandler, false);

containerSwipe.addEventListener("touchstart", lock, false);
containerSwipe.addEventListener("touchend", moveHandler, false);

window.addEventListener("keydown", moveHandler, false);

containerSwipe.addEventListener(
  "touchmove",
  (event) => {
    event.preventDefault();
  },
  false
);

// venue button
let venueSubmitButton = document.querySelector(".venue-submit-button");
let allVenueForm = document.querySelectorAll(".venue-form-wrap");

let venueSubmitFunc = () => {
  allVenueForm[currentVenueIndex].submit();
};

venueSubmitButton.addEventListener("click", venueSubmitFunc);
