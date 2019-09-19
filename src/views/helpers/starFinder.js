module.exports = number => {
  let starsImages = "";
  let numberOfWholeStars = Math.floor(number);
  const totalOfStars = 5;

  for (let i = 0; i < numberOfWholeStars; i++) {
    starsImages += "<img src='/img/starYellow.svg' class='star'/>";
  }

  if (number.toString().includes(".")) {
    starsImages += "<img src='/img/starHalf.svg' class='star'/>";
  }

  if (starsImages <= totalOfStars) {
    starsImages += "<img src='/img/starGrey.svg' class='star'/>";
  }
  return starsImages;
};
