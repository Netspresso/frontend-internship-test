var btnMain = document.getElementById('show-popup-form');
var btnExit = document.querySelector('i');
var popup = document.querySelector('div.popup');
var email = document.getElementById('email')
var pass = document.getElementById('password')

function showPopup() {
    popup.classList.toggle('active');
}

btnMain.addEventListener('click', showPopup);
btnExit.addEventListener('click', showPopup);


// Validation of form inputs

// E-mail validation:
email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I am expecting an e-mail address!");
    } else {
      email.setCustomValidity("");
    }
});
  

// Password validation:
pass.addEventListener("input", function (event) {
    if (pass.validity.tooShort) {
      pass.setCustomValidity("Password to short!");
    } else {
      pass.setCustomValidity("");
    }
});
  
