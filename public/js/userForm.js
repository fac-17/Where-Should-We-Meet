// PLACEHOLDER DATE AND TIME SET FOR TODAY AND CURRENT TIME
const date = new Date();
document.querySelector("#todaydate").valueAsDate = date;
document.querySelector("#todaytime").value =
  date.getHours() + ":" + date.getMinutes();

var currentTab = 0;
showTab(currentTab);

const nextButton = document.querySelector(".button-next");
const prevButton = document.querySelector(".button-previous");
const userInputNames = document.querySelectorAll(".user-input-name");

nextButton.addEventListener("click", nextInput);
prevButton.addEventListener("click", prevInput);

function updateName() {
  const friendName = document.querySelector("#friendName").value;
  userInputNames.forEach(name => (name.textContent = friendName));
}

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
  if (n === 3) {
    updateName();
  }
  fixStepIndicator(n);
}

function nextInput(e) {
  e.preventDefault();
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

function prevInput(e) {
  e.preventDefault();
  const labelArray = document.querySelectorAll(".user-input");
  labelArray[currentTab].style.display = "none";
  currentTab = currentTab - 1;
  showTab(currentTab);
}

function validateForm() {
  const labelArray = document.querySelectorAll(".user-input");
  let labelInput,
    postcodeInput,
    i,
    valid = true;

  labelInput = labelArray[currentTab].querySelectorAll("input");
  for (i = 0; i < labelInput.length; i++) {
    if (labelInput[i].value === "") {
      labelInput[i].className += " invalid";
      valid = false;
    }
  }

  postcodeInput = labelArray[currentTab].querySelectorAll(
    ".user-input-postcode"
  );
  for (i = 0; i < postcodeInput.length; i++) {
    const regex =
      "^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {0,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR ?0AA)$";
    const postcode = postcodeInput[i];

    if (!postcode.value.toUpperCase().match(regex)) {
      postcode.className += " invalid";
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
