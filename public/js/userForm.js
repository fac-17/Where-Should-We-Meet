// PLACEHOLDER DATE AND TIME SET FOR TODAY AND CURRENT TIME
const date = new Date();
document.querySelector("#todaydate").valueAsDate = date;
document.querySelector("#todaytime").value =
  date.getHours() + ":" + date.getMinutes();

let currentTab = 0;

const nextButton = document.querySelector(".button-next");
const prevButton = document.querySelector(".button-previous");
const userInputNames = document.querySelectorAll(".user-input-name");

const updateName = () => {
  const friendName = document.querySelector("#friendName").value;
  userInputNames.forEach(name => (name.textContent = friendName));
};

const showTab = n => {
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
  //update friend's name in next section of form
  if (n === 3) {
    updateName();
  }
  fixStepIndicator(n);
};

showTab(currentTab);

const prevInput = e => {
  e.preventDefault();
  const labelArray = document.querySelectorAll(".user-input");
  labelArray[currentTab].style.display = "none";
  currentTab = currentTab - 1;
  showTab(currentTab);
};

const validateEmpty = () => {
  const labelArray = document.querySelectorAll(".user-input");
  let labelInput,
    valid = true;

  labelInput = labelArray[currentTab].querySelector("input");
  if (labelInput.value === "") {
    labelInput.className += " invalid";
    valid = false;
  }
  if (valid) {
    document.querySelectorAll(".step")[currentTab].className += " finish";
  }
  return valid;
};

const validatePostcode = () => {
  let valid = true;
  const labelArray = document.querySelectorAll(".user-input");
  const postcodeInput = labelArray[currentTab].querySelector(
    ".user-input-postcode"
  );
  const regex =
    "^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {0,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR ?0AA)$";

  if (!postcodeInput.value.toUpperCase().match(regex)) {
    postcodeInput.className += " invalid";
    valid = false;
  }
  return valid;
};
const nextInput = e => {
  e.preventDefault();
  const labelArray = document.querySelectorAll(".user-input");

  if (!validateEmpty()) return false;
  if (currentTab == 1 || currentTab == 3) {
    if (!validatePostcode()) return false;
  }
  labelArray[currentTab].style.display = "none";
  currentTab = currentTab + 1;
  if (currentTab >= labelArray.length) {
    console.log("form submitted");
    document.querySelector(".user-form").submit();
    return false;
  }
  showTab(currentTab);
};

nextButton.addEventListener("click", nextInput);
prevButton.addEventListener("click", prevInput);

function fixStepIndicator(n) {
  let i,
    stepArray = document.querySelectorAll(".step");
  for (i = 0; i < stepArray.length; i++) {
    stepArray[i].className = stepArray[i].className.replace(" active", "");
  }
  stepArray[n].className += " active";
}
//prevent implicit submission when pressing enter key
document
  .querySelector(".user-form")
  .addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
