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
    console.log('firstname non valide');
    formIsValid = false;
  }

  if (lastName.length < 2) {
    console.log("nom non valide");
    formIsValid = false;
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailRegex.test(email)) {
   console.log("email non valide");
   formIsValid = false;
  }

  if (isNaN(numberCompetition)  || numberCompetition.length <= 0 ) {
    console.log('chiffe non valide');
    formIsValid = false;
  }

  let locationChecked = false;

  for (const location of locations) {
    if (location.checked) {
      locationChecked = true;
      break;
    }
  }

  if (!locationChecked) {
    console.log("case non cochée");
    formIsValid = false;
  }

  if (!cgu.checked) {
    console.log("cgu non cochée");
    formIsValid = false;
  }

  return formIsValid;
}



