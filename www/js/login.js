let app = document.querySelector('.app');
let loginForm = document.querySelector('.card');

app.addEventListener("animationend", function() {
  loginForm.classList.toggle('is-done');
});

let submitButton = document.querySelector('.btn');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  window.location.href = 'home.html';
});