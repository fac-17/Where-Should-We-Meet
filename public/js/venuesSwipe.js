const swipeContainer = document.querySelector(".swipe-container");
const childCount = swipeContainer.children.length;

swipeContainer.style.setProperty("--n", childCount);

const lock = event => {};

const move = event => {};

swipeContainer.addEventListener("mousedown", lock, false);
swipeContainer.addEventListener("mouseup", lock, false);

swipeContainer.addEventListener("touchstart", move, false);
swipeContainer.addEventListener("touchend", move, false);
