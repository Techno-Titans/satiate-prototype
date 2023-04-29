let app = document.querySelector('.app');
let loginForm = document.querySelector('.login-form');

app.addEventListener("animationend", function() {
  loginForm.classList.toggle('is-done');
});

let submitButton = document.querySelector('.button');

submitButton.addEventListener('click', function() {
  window.location.href = 'home.html';
})