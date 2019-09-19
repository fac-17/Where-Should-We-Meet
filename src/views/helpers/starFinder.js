module.exports = number => {
  let starsImages = "";
  let numberOfWholeStars = Math.floor(number);

  for (let i = 0; i < numberOfWholeStars; i++) {
    starsImages += "<img src='/img/starYellow.svg' class='star'/>";
  }

  if (number.toString().includes(".")) {
    starsImages += "<img src='/img/starHalf.svg' class='star'/>";
  }

  function numGreyStars() {
    const starsRoundedDown = Math.floor(number);
    return 5 - starsRoundedDown;
  }

  for (let i = 0; i < numGreyStars(); i++) {
    starsImages += "<img src='/img/starGrey.svg' class='star'/>";
  }

  return starsImages;
};
