"use strict";
let box = document.querySelector('.box');
let logoScreen = document.querySelector('.opener');
let loginForm = document.querySelector('.form');
let buttonClass = document.querySelector('.sign-in');
let username = document.querySelector('#username');
let password = document.querySelector('#userpass');
let confirmationText = document.querySelector('#incorrect-text');
window.onload = function () {
    box.classList.add('fade-in');
};
box.addEventListener('animationend', () => {
    logoScreen.classList.add('move-up');
});
logoScreen.addEventListener('animationend', () => {
    loginForm.classList.add('appear');
});
let loadingBox = document.querySelector('.loader');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let loginName = username.value;
    let loginPassword = password.value;
    loginForm.classList.add('fade-out');
    setTimeout(() => {
        loadingBox.classList.add('appear');
        setTimeout(() => {
            if (loginName === "technotitans" && loginPassword === "satiatecpu") {
                window.location.href = "home.html";
            }
            else {
                confirmationText.style.opacity = '100%';
                loadingBox.classList.remove('appear');
                loadingBox.style.opacity = '0%';
                loginForm.classList.remove('fade-out');
                loginForm.style.opacity = '100%';
            }
        }, 3000);
    }, 1000);
});
