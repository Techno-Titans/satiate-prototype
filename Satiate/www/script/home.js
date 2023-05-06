let postsButton = document.querySelector('.post')
let postScreen = document.querySelector('.post-screen')
let closeButton = document.querySelector('#close-button')
postsButton.addEventListener('click', () => {
  postsButton.classList.add('clicked')
  setTimeout(() => {
    postsButton.classList.remove('clicked')
  }, 200)
  postScreen.classList.add('fade-in')
  postScreen.classList.remove('fade-out')
  postsButton.classList.toggle('fade-out')
  postsButton.classList.toggle('fade-in')
})
closeButton.addEventListener('click', () => {
  postScreen.classList.add('fade-out')
  postScreen.classList.remove('fade-in')
  postsButton.classList.toggle('fade-in')
  postsButton.classList.toggle('fade-out')
})
