var btnMain = document.getElementById('show-popup-form');
var btnExit = document.querySelector('i');
var popup = document.querySelector('div.popup');

function showPopup() {
    popup.classList.toggle('active');
}

btnMain.addEventListener('click', showPopup);
btnExit.addEventListener('click', showPopup);