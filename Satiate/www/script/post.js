'use strict'
const postButton = document.querySelector('#submit-button')
const selectionPanel = document.querySelector('.selection-panel')
const titleInput = document.querySelector('#title-input')
const captionInput = document.querySelector('#caption-input')

class Post {
  constructor (title, caption) {
    this.title = title
    this.caption = caption
  }
}

const images = document.querySelectorAll('[id^="image"]')
let chosenImage = 1

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    chosenImage = index + 1
  })
})

const donationType = document.querySelector('.donation')
const pickupType = document.querySelector('.pickup')
let chosenType = ' - Donation'

donationType.addEventListener('click', () => {
  chosenType = ' - Donation'
})

pickupType.addEventListener('click', () => {
  chosenType = ' - Pickup'
})

postButton.addEventListener('click', () => {
  let newPost = new Post(titleInput.value, captionInput.value)
  const newBox = document.createElement('div')
  newBox.classList.add('box', 'pixel-borders--2')

  const boxImage = document.createElement('div')
  boxImage.classList.add('box-image')
  const image = document.createElement('img')
  image.setAttribute('src', `img/${chosenImage}.png`)
  image.classList.add('placeholder')
  boxImage.appendChild(image)
  newBox.appendChild(boxImage)

  const boxText = document.createElement('div')
  boxText.classList.add('box-text')

  const boxTitle = document.createElement('div')
  boxTitle.classList.add('box-title')
  const title = document.createElement('p')
  title.classList.add('title')
  title.textContent = `${titleInput.value}${chosenType}`
  boxTitle.appendChild(title)
  boxText.appendChild(boxTitle)

  const boxCaption = document.createElement('div')
  boxCaption.classList.add('box-caption')
  const caption = document.createElement('p')
  caption.classList.add('caption')
  caption.textContent = newPost.caption
  boxCaption.appendChild(caption)
  boxText.appendChild(boxCaption)

  const boxRating = document.createElement('div')
  boxRating.classList.add('box-rating')
  const rating = document.createElement('p')
  rating.classList.add('rating')
  rating.textContent = '5.0 stars'
  boxRating.appendChild(rating)
  boxText.appendChild(boxRating)

  newBox.appendChild(boxText)
  selectionPanel.appendChild(newBox)
})
