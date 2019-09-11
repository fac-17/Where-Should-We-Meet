var currentTab = 0;
showTab(currentTab);

const nextButton = document.querySelector(".button-next");
nextButton.addEventListener("click", nextPrev);

function showTab(n) {
  const labelArray = document.querySelectorAll(".user-input");
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

function nextPrev(e) {
  e.preventDefault();
  console.log("currentTab", currentTab);
  const labelArray = document.querySelectorAll(".user-input");

  if (!validateForm()) return false;
  labelArray[currentTab].style.display = "none";
  currentTab = currentTab + 1;
  if (currentTab >= labelArray.length) {
    document.querySelector(".user-form").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  const labelArray = document.querySelectorAll(".user-input");
  let labelInput,
    i,
    valid = true;

  labelInput = labelArray[currentTab].querySelectorAll("input");
  for (i = 0; i < labelInput.length; i++) {
    if (labelInput[i].value === "") {
      labelInput[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.querySelectorAll(".step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  let i,
    stepArray = document.querySelectorAll(".step");
  for (i = 0; i < stepArray.length; i++) {
    stepArray[i].className = stepArray[i].className.replace(" active", "");
  }
  stepArray[n].className += " active";
}
