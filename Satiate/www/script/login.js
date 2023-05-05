let loginForm = document.querySelector('.login-form');
let loginLogo = document.querySelector('.login-logo');
let username = document.querySelector('#username');
let password = document.querySelector('#userpass');
let loadingBox = document.querySelector('.loader');
let buttonClass = document.querySelector('.sign-in');
let confirmationText = document.querySelector('#incorrect-text');

window.onload = () => {
    loginLogo.classList.add('move-up');
};

loginLogo.addEventListener('animationend', () => {
    loginForm.classList.add('fade-in');
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let loginName = username.value;
    let loginPassword = password.value;

    loginForm.classList.add('fade-out');
    setTimeout(() => {
        loadingBox.classList.add('fade-in');
        setTimeout(() => {
            if (loginName === "technotitans" && loginPassword === "satiatecpu") {
                window.location.href = "home.html";
            }
            else {
                confirmationText.style.opacity = '100%';
                loadingBox.classList.remove('fade-in');
                loadingBox.style.opacity = '0%';
                loginForm.classList.remove('fade-out');
                loginForm.style.opacity = '100%';
            }
        }, 3000);
    }, 1000);
});
