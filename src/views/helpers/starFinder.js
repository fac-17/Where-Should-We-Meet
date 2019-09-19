module.exports = number => {
  let starsImages = "";
  let numberOfWholeStars = Math.floor(number);
  for (let i = 0; i < numberOfWholeStars; i++) {
    starsImages += "<img src='/img/starYellow.svg' class='star'/>";
  }
  if (number.toString().includes(".") && number != 5) {
    starsImages += "<img src='/img/starHalf.svg' class='star'/>";
    numberOfWholeStars += 1;
  }
  const greyStars = 5 - numberOfWholeStars;
  for (let i = 0; i < greyStars; i++) {
    starsImages += "<img src='/img/starGrey.svg' class='star'/>";
  }
  return starsImages;
};
