let box = document.querySelector('.box') as HTMLDivElement;
let logoScreen = document.querySelector('.opener') as HTMLBodyElement;
let loginForm = document.querySelector('.form') as HTMLFormElement;
let buttonClass = document.querySelector('.sign-in') as HTMLButtonElement;
let username = document.querySelector('#username') as HTMLInputElement;
let password = document.querySelector('#userpass') as HTMLInputElement;
let confirmationText = document.querySelector('#incorrect-text') as HTMLParagraphElement;


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
    let loginName: string = username.value;
    let loginPassword: string = password.value;

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