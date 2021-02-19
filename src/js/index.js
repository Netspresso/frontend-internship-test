var btnMain = document.getElementById('show-popup-form');
var btnExit = document.querySelector('i');
var popup = document.querySelector('div.popup');
var email = document.getElementById('email');
var pass = document.getElementById('password');
var checkbox = document.querySelector('.form-check>input');
var btnSubmit = document.getElementById('submit');

function showPopup() {
    // Function that controll displaying popup window by toggling active class
    popup.classList.toggle('active');
}


function checkValidity(event) {
    // Function that check validity of data inputed in every used input field
    if (!checkbox.checked) {
        alert('You must agree to the terms first.');
        return false;
    } else if (email.validity.typeMismatch || email.value == '') {
        alert('I am expecting an e-mail address!');
        return false;
    } else if (pass.validity.tooShort) {
        alert('Password too short');
        return false;
    } else if (pass.value == '') {
        alert('You must provide password');
        return false;
    } else {
        return true;
    }
}

function submitForm(e) {
    // Function that check validity and if it return true -> popup is closing after 3s and displayed text is changed to 'Thank you!'
    if (checkValidity()) {
        btnMain.textContent = "Thank you!";
        setTimeout(showPopup, 3000);
    }
}

btnMain.addEventListener('click', showPopup);
btnExit.addEventListener('click', showPopup);


// Validation of form inputs

// E-mail browser API validation:
email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I am expecting an e-mail address!");
    } else {
      email.setCustomValidity("");
    }
});
  

// Password browser API validation:
pass.addEventListener("input", function (event) {
    if (pass.validity.tooShort) {
      pass.setCustomValidity("Password to short!");
    } else {
      pass.setCustomValidity("");
    }
});
  

btnSubmit.addEventListener("click", submitForm)

