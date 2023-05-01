let box = document.querySelector('.box') as HTMLDivElement;
let logoScreen = document.querySelector('.opener') as HTMLBodyElement;
let loginForm = document.querySelector('.form') as HTMLFormElement;
let buttonClass = document.querySelector('.sign-in') as HTMLButtonElement;

window.onload = function () {
    box.classList.add('fade-in');
};

box.addEventListener('animationend', () => {
    logoScreen.classList.add('move-up');
});

logoScreen.addEventListener('animationend', () => {
    loginForm.classList.add('appear');
})

let loadingBox = document.querySelector('.loader') as HTMLDivElement;

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    loginForm.classList.add('fade-out');
    setTimeout(() => {
        loadingBox.classList.add('appear');
    }, 1000);
});