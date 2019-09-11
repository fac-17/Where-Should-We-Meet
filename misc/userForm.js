var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var labelArray = document.querySelectorAll(".user-input");
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
