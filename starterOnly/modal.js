function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// Close
const modalClose = document.querySelector(".close");

// Form
const form = document.querySelector(".form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch close modal
modalClose.addEventListener("click", closeModal);

// Function to modal
function closeModal() {
  modalbg.style.display = "none";
}

form.addEventListener("submit", submitForm);

function submitForm(event) {
  if (!validForm()) {
    console.log("pas valide");
    event.preventDefault();
  }
}

function validForm() {

  // Form elements
  const firstName = document.getElementById("first").value;
  const lastName = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const numberCompetition = document.getElementById("quantity").value;
  const locations = document.getElementsByName("location");
  const cgu = document.getElementById("checkbox1");

  let formIsValid = true;
  // Vérification que les données sont correctement saisies
  if (firstName.length < 2) {
    dataErrorMessage('first', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.')
    formIsValid = false;
  } else {
    hideDataErrorMessage('first');
  }

  if (lastName.length < 2) {
    dataErrorMessage('last', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.')
    formIsValid = false;
  } else {
    hideDataErrorMessage('last');
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailRegex.test(email)) {
    dataErrorMessage('email', 'Veuillez entrer un email valide.')
    formIsValid = false;
  } else {
    hideDataErrorMessage('email');
  }

  if (isNaN(numberCompetition)  || numberCompetition.length <= 0 ) {
    dataErrorMessage('quantity', 'Veuillez entrer un nombre.')
    formIsValid = false;
  } else {
    hideDataErrorMessage('quantity');
  }

  let locationChecked = false;

  for (const location of locations) {
    if (location.checked) {
      locationChecked = true;
      break;
    }
  }

  if (!locationChecked) {
    dataErrorMessage('location', 'Veuillez sélectionner une ville.')
    formIsValid = false;
  } else {
    hideDataErrorMessage('location');
  }

  if (!cgu.checked) {
    dataErrorMessage('condition', 'Vous devez vérifier que vous acceptez les termes et conditions.')
    formIsValid = false;
  } else {
    hideDataErrorMessage('condition');
  }

  return formIsValid;
}



function dataErrorMessage(nameID, message) {
  const errorDiv = document.getElementById(`${nameID}-form`);
  errorDiv.setAttribute('data-error-visible', 'true');
  errorDiv.setAttribute('data-error', message);
}

function hideDataErrorMessage(nameDiv) {
  const errorDiv = document.getElementById(`${nameDiv}-form`);
  errorDiv.setAttribute('data-error-visible', 'false');
  errorDiv.removeAttribute('data-error');
}