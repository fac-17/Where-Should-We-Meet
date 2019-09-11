let currentTab = 0;
showTab(currentTab);

const labelArray = document.querySelectorAll(".user-input");

function showTab(n) {
  labelArray[n].style.display = "block";

  if (n === 0) {
    document.querySelector(".button-previous").style.display = "none";
  } else {
    document.querySelector(".button-previous").style.display = "inline";
  }

  if (n === labelArray.length - 1) {
    document.querySelector(".button-next").textContent = "Select Venues";
  } else {
    document.querySelector(".button-next").textContent = "Next Step";
  }
  fixStepIndicator(n);
}

function nextOrPreviousSlide(n) {
  if (n === 1 && !validateForm()) return false;
  labelArray[currentTab].style.display = "none";
  currentTab = +n;
  if (currentTab >= labelArray.length) {
    document.querySelector(".user-form").submit();
    return false;
  }
  showTab(currentTab);
}
