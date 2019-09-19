const heart = document.querySelector(".heart-wrap");
// On tap, toggle colour of heart
heart.addEventListener("click", () => {
let blancHeart = heart.classList.toggle("uncolouredHeart");
let redHeart = heart.classList.toggle("colouredHeart");
});

const submitVenue = () => {
  const btnSubmit = document.createElement("BUTTON");
  btnSubmit.textContent = "CLICK ME";
  document.body.appendChild(btnSubmit);}
