let currentTab = 0;

const nextButton = document.querySelector(".button-next");
const prevButton = document.querySelector(".button-previous");
const userInputNames = document.querySelectorAll(".user-input-name");

const updateName = () => {
  const friendName = document.querySelector("#friendName").value;
  userInputNames.forEach(name => (name.textContent = friendName));
};

const showTab = n => {
  const inputArray = document.querySelectorAll(".user-input");
  inputArray[n].style.display = "block";

  if (n === 0) {
    document.querySelector(".button-previous").style.display = "none";
  } else {
    document.querySelector(".button-previous").style.display = "inline";
  }

  if (n === inputArray.length - 1) {
    document.querySelector(".button-next").textContent = "Select Venues";
  } else {
    document.querySelector(".button-next").textContent = "Next Step";
  }
  //update friend's name in next section of form
  if (n === 3) {
    updateName();
  }
  if (n === 4) {
    // PLACEHOLDER DATE AND TIME SET FOR TODAY AND CURRENT TIME
    const date = new Date();
    document.querySelector("#todaydate").valueAsDate = date;
    document.querySelector("#todaytime").value =
      date.getHours() + ":" + date.getMinutes();
  }
  fixStepIndicator(n);
};

showTab(currentTab);

const validateEmpty = () => {
  const inputArray = document.querySelectorAll(".user-input");
  let valid = true;

  const labelInput = inputArray[currentTab].querySelector("input");
  const error = inputArray[currentTab].querySelector(".error");
  if (labelInput.value === "") {
    labelInput.classList.add("invalid");
    valid = false;
    error.innerText = "Please fill in this field!";
  }
  if (valid) {
    document.querySelectorAll(".step")[currentTab].classList.add("finish");
    error.innerText = "";
  }
  return valid;
};

const validatePostcode = () => {
  let valid = true;
  const inputArray = document.querySelectorAll(".user-input");
  const postcodeInput = inputArray[currentTab].querySelector(
    ".user-input-postcode"
  );
  const error = inputArray[currentTab].querySelector(".error");
  const regex = /^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {0,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR ?0AA)$/i;

  if (!postcodeInput.value.toUpperCase().match(regex)) {
    postcodeInput.classList.add("invalid");
    error.innerText = "Please enter a valid postcode!";
    valid = false;
  }
  if (valid === true) {
    error.innerText = "";
  }
  return valid;
};

const validateRadio = () => {
  let valid = false;
  const inputArray = document.querySelectorAll(".user-input");
  const error = inputArray[currentTab].querySelector(".error");
  const radioInputs = inputArray[currentTab].querySelectorAll(".radio-input");
  radioInputs.forEach(radioInput => {
    if (radioInput.checked) valid = true;
  });
  if (valid === false) {
    error.innerText = "Please select one of these options!";
  } else {
    error.innerText = "";
  }
  return valid;
};

const nextInput = e => {
  e.preventDefault();
  const inputArray = document.querySelectorAll(".user-input");
  //validation
  if (currentTab === 1 || currentTab === 3) {
    if (!validateEmpty()) return false;
    if (!validatePostcode()) return false;
  } else if (currentTab === 5) {
    if (!validateRadio()) return false;
  } else {
    if (!validateEmpty()) return false;
  }
  if (currentTab === inputArray.length - 1) {
    console.log("form submitted");
    document.querySelector(".user-form").submit();
    return;
  } else {
    inputArray[currentTab].style.display = "none";
    currentTab = currentTab + 1;
    console.log(currentTab);
    showTab(currentTab);
  }
};

const prevInput = e => {
  e.preventDefault();
  const inputArray = document.querySelectorAll(".user-input");
  inputArray[currentTab].style.display = "none";
  currentTab = currentTab - 1;
  showTab(currentTab);
};

nextButton.addEventListener("click", nextInput);
prevButton.addEventListener("click", prevInput);

function fixStepIndicator(n) {
  let i,
    stepArray = document.querySelectorAll(".step");
  for (i = 0; i < stepArray.length; i++) {
    stepArray[i].classList.remove("active");
  }
  stepArray[n].classList.add("active");
}
//prevent implicit submission when pressing enter key
document
  .querySelector(".user-form")
  .addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  });
//add event listener to every input to reset error message when input is detected
document.querySelectorAll(".user-input").forEach(inputDiv => {
  inputDiv.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => {
      inputDiv.querySelector(".error").innerHTML = "";
      input.classList.remove("invalid");
    });
  });
});
