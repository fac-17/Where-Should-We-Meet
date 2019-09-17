// const swipeContainer = document.querySelector(".swipe-container");
// const childCount = swipeContainer.children.length;
// const descriptionSwipeContainer = document.querySelector(
//   ".description-swipe-container"
// );
// const descriptionContainer = document.querySelector(".description-container");
// const containerWrap = document.querySelector(".container-wrap");
// const heart = document.querySelector(".heart-wrap");
// const tapHere = document.querySelector(".tap-for-more");
//
// // On tap, toggle colour of heart
// heart.addEventListener("click", () => {
//   heart.classList.toggle("uncolouredHeart");
//   heart.classList.toggle("colouredHeart");
//   // swipeContainer.classList.toggle("display");
//   // descriptionSwipeContainer.classList.toggle("display");
// });
//
// swipeContainer.style.setProperty("--n", childCount);
// descriptionSwipeContainer.style.setProperty("--n", childCount);
// descriptionContainer.style.setProperty("--n", childCount);
// // On tap, toggle swipeContainer
//
// tapHere.addEventListener("click", () => {
//   swipeContainer.classList.toggle("display");
//   descriptionSwipeContainer.classList.toggle("display");
//   // descriptionContainer.classList.toggle("display");
// });
//
// // This track just the first finger which is put down on the screen
// function unify(event) {
//   return event.changedTouches ? event.changedTouches[0] : event;
// }
//
// // x = setup coordonates : store the x value of the clicked point
// let x0 = null;
//
// const lock = event => {
//   x0 = unify(event).clientX;
// };
//
// //setup the direction of the swiping gesture
// let i = 0;
//
// const move = event => {
//   if (x0 || x0 === 0) {
//     let distanceX = unify(event).clientX - x0,
//       sign = Math.sign(distanceX);
//     if ((i > 0 || sign < 0) && (i < childCount - 1 || sign > 0))
//       swipeContainer.style.setProperty("--i", (i -= sign));
//     descriptionSwipeContainer.style.setProperty("--i", (i -= sign));
//     descriptionContainer.style.setProperty("--i", (i -= sign));
//     x0 = null;
//   }
// };
//
// swipeContainer.addEventListener("mousedown", lock, false);
// swipeContainer.addEventListener("mouseup", move, false);
//
// swipeContainer.addEventListener("touchstart", lock, false);
// swipeContainer.addEventListener("touchend", move, false);
//
// swipeContainer.addEventListener(
//   "touchmove",
//   event => {
//     event.preventDefault();
//   },
//   false
// );

// sarah
const mainContainer = document.querySelector(".main-container");
const containerSwipe = document.querySelector(".container-swipe");
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

// sarah
