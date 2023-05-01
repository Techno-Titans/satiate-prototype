"use strict";
let box = document.querySelector('.box');
let logoScreen = document.querySelector('.opener');
let loginForm = document.querySelector('.form');
let buttonClass = document.querySelector('.sign-in');
window.onload = function () {
    box.classList.add('fade-in');
};
box.addEventListener('animationend', () => {
    logoScreen.classList.add('move-up');
});
logoScreen.addEventListener('animationend', () => {
    loginForm.classList.add('appear');
});
buttonClass.addEventListener('click', function (event) {
    event.preventDefault();
});
