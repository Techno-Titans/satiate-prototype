const loginForm = document.querySelector('.login-form')
const loginLogo = document.querySelector('.login-logo')
const username = document.querySelector('#username')
const password = document.querySelector('#userpass')
const loadingBox = document.querySelector('.loader')
const confirmationText = document.querySelector('#incorrect-text')

window.addEventListener('load', () => {
  loginLogo.classList.add('move-up')
})

loginLogo.addEventListener('animationend', () => {
  loginForm.classList.add('fade-in')
})

loginForm.addEventListener('submit', event => {
  event.preventDefault()
  const loginName = username.value
  const loginPassword = password.value

  loginForm.classList.add('fade-out')
  setTimeout(() => {
    loadingBox.classList.add('fade-in')
    setTimeout(() => {
      if (loginName === 'technotitans' && loginPassword === 'satiatecpu') {
        window.location.href = 'home.html'
      } else {
        confirmationText.style.opacity = '100%'
        loadingBox.classList.remove('fade-in')
        loadingBox.style.opacity = '0%'
        loginForm.classList.remove('fade-out')
        loginForm.style.opacity = '100%'
      }
    }, 3000)
  }, 1000)
})
