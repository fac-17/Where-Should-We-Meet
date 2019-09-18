const mainContainer = document.querySelector(".main-container");
const containerSwipe = document.querySelector(".swipe-container");
const childCount = containerSwipe.children.length;

containerSwipe.style.setProperty("--n", childCount);

function unify(event) {
  return event.changedTouches ? event.changedTouches[0] : event;
}

let x0 = null;
const lock = event => {
  x0 = unify(event).clientX;
};

let i = 0;
const move = event => {
  if (x0 || x0 === 0) {
    let distanceX = unify(event).clientX - x0,
      sign = Math.sign(distanceX);
    if ((i > 0 || sign < 0) && (i < childCount - 1 || sign > 0))
      containerSwipe.style.setProperty("--i", (i -= sign));
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
