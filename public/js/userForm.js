let currentTab = 0;

const nextButton = document.querySelector(".button-next");
const prevButton = document.querySelector(".button-previous");
const userInputNames = document.querySelectorAll(".user-input-outer-wrap-name");

const updateName = () => {
  const friendName = document.querySelector("#friendName").value;
  userInputNames.forEach(name => (name.textContent = friendName));
};

const showTab = n => {
  const inputArray = document.querySelectorAll(".user-input-outer-wrap");
  inputArray[n].style.display = "flex";
  inputArray[n].style.flexDirection = "column";

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
    if (date.getMinutes() < 10) {
      document.querySelector("#todaytime").value =
        date.getHours() + ":0" + date.getMinutes();
    } else {
      document.querySelector("#todaytime").value =
        date.getHours() + ":" + date.getMinutes();
    }
  }
  fixStepIndicator(n);
};

showTab(currentTab);

const validateEmpty = () => {
  const inputArray = document.querySelectorAll(".user-input-outer-wrap");
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
//dont change this to es6.. it is an async/await function setup to wait for the response from postcode api before proceeding
async function validatePostcode() {
  let valid = true;
  const inputArray = document.querySelectorAll(".user-input-outer-wrap");
  const postcodeInput = inputArray[currentTab].querySelector(".postcode");
  const error = inputArray[currentTab].querySelector(".error");
  const regex = /^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {0,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR ?0AA)$/i;

  if (!postcodeInput.value.match(regex)) {
    postcodeInput.classList.add("invalid");
    error.innerText = "Please enter a valid postcode!";
    valid = false;
  } else {
    valid = await fetch(
      `https://api.postcodes.io/postcodes/${postcodeInput.value}`
    )
      .then(res => {
        return res.json();
      })
      .then(resObj => {
        let validBasedOnFetchResponse = resObj.status === 404 ? false : true;
        if (validBasedOnFetchResponse === false) {
          error.innerText = "Please enter a valid postcode";
          postcodeInput.classList.add("invalid");
        }
        return validBasedOnFetchResponse;
      });
  }
  if (valid === true) {
    error.innerText = "";
  }
  return valid;
}

const validateRadio = () => {
  let valid = false;
  const inputArray = document.querySelectorAll(".user-input-outer-wrap");
  const error = inputArray[currentTab].querySelector(".error");
  const radioInputs = inputArray[currentTab].querySelectorAll(".radio-input");
  radioInputs.forEach(radioInput => {
    if (radioInput.checked) valid = true;
  });
  if (valid === false) {
    error.innerText = "Please select one of these options!";
    radioInputs.forEach(radioInput => radioInput.classList.add("invalid"));
  } else {
    error.innerText = "";
  }
  return valid;
};

const validateDateTime = () => {
  let valid = true;
  const inputArray = document.querySelectorAll(".user-input-outer-wrap");
  const error = inputArray[currentTab].querySelector(".error");
  const dateInput = document.querySelector("#todaydate");
  const timeInput = document.querySelector("#todaytime");
  const dateNow = new Date();
  var dateString = new Date(
    dateNow.getTime() - dateNow.getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];
  if (dateInput.value < dateString) {
    error.innerHTML = "Please enter a date in the future!";
    dateInput.classList.add("invalid");
    valid = false;
  } else if (
    timeInput.value < dateNow.getHours() + ":" + dateNow.getMinutes() &&
    dateInput.value <= dateString
  ) {
    error.innerHTML = "Please enter a time in the future!";
    timeInput.classList.add("invalid");
    valid = false;
  } else {
    error.innerHTML = "";
    valid = true;
  }
  return valid;
};
//dont change this to es6.. this is an async await function set up to wait for validatepostcode() promise to resolve before proceeding.
async function nextInput(e) {
  e.preventDefault();
  const inputArray = document.querySelectorAll(".user-input-outer-wrap");
  //validation
  if (currentTab === 1 || currentTab === 3) {
    if (!validateEmpty()) return false;
    const validPostcode = await validatePostcode().then(valid => {
      return valid;
    });
    if (!validPostcode) return false;
  } else if (currentTab === 4) {
    if (!validateDateTime()) return false;
  } else if (currentTab === 5) {
    if (!validateRadio()) return false;
  } else {
    if (!validateEmpty()) return false;
  }
  if (currentTab === inputArray.length - 1) {
    document.querySelector(".user-form").submit();
    return;
  } else {
    inputArray[currentTab].style.display = "none";
    currentTab = currentTab + 1;
    showTab(currentTab);
  }
}

const prevInput = e => {
  e.preventDefault();
  const inputArray = document.querySelectorAll(".user-input-outer-wrap");
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
document.querySelectorAll(".user-input-outer-wrap").forEach(inputDiv => {
  inputDiv.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => {
      inputDiv.querySelector(".error").innerHTML = "";
      input.classList.remove("invalid");
    });
  });
});
