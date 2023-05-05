"use strict";
const postButton = document.querySelector('#submit-button');
const selectionPanel = document.querySelector('.selection-panel');
const titleInput = document.querySelector('#title-input');
const captionInput = document.querySelector('#caption-input');

class Post {
    constructor(title, caption) {
        this.title = title;
        this.caption = caption;
    }
}

// Choosing images

const firstImage = document.querySelector('#image1');
const secondImage = document.querySelector('#image2');
const thirdImage = document.querySelector('#image3');
const fourthImage = document.querySelector('#image4');
let chosenImage;

firstImage.addEventListener('click', () => {
    chosenImage = 1;
});

secondImage.addEventListener('click', () => {
    chosenImage = 2;
});

thirdImage.addEventListener('click', () => {
    chosenImage = 3;
});

fourthImage.addEventListener('click', () => {
    chosenImage = 4;
});

// Choosing Type

const donationType = document.querySelector('.donation');
const pickupType = document.querySelector('.pickup');
let chosenType = ' - Donation';

donationType.addEventListener('click', () => {
    chosenType = ' - Donation'
});

pickupType.addEventListener('click', () => {
    chosenType = ' - Pickup'
});

postButton.addEventListener('click', () => {
    // Creating class and box element
    let newPost = new Post(titleInput.value, captionInput.value);
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.classList.add('pixel-borders--2');

    // Creating the images box
    const boxImage = document.createElement('div');
    boxImage.classList.add('box-image');
    const image = document.createElement('img');
    if (chosenImage === 1) {
        image.setAttribute('src', 'img/1.png');
    }
    else if (chosenImage === 2) {
        image.setAttribute('src', 'img/2.png');
    }
    else if (chosenImage === 3) {
        image.setAttribute('src', 'img/3.png');
    }
    else {
        image.setAttribute('src', 'img/4.png');
    }
    image.classList.add('placeholder');
    boxImage.appendChild(image);
    newBox.appendChild(boxImage);

    // Creating the text boxes
    const boxText = document.createElement('div');
    boxText.classList.add('box-text');

    // Creating the title and setting from the Class
    const boxTitle = document.createElement('div');
    boxTitle.classList.add('box-title');
    const title = document.createElement('p');
    title.classList.add(`title`);
    title.textContent = titleInput.value + chosenType; // change this to the desired title
    boxTitle.appendChild(title);
    boxText.appendChild(boxTitle);

    // Creating the caption and also setting it from the class
    const boxCaption = document.createElement('div');
    boxCaption.classList.add('box-caption');
    const caption = document.createElement('p');
    caption.classList.add('caption');
    caption.textContent = newPost.caption.toString(); // change this to the desired caption
    boxCaption.appendChild(caption);
    boxText.appendChild(boxCaption);

    // Creating the box rating, tentative system
    const boxRating = document.createElement('div');
    boxRating.classList.add('box-rating');
    const rating = document.createElement('p');
    rating.classList.add('rating');
    rating.textContent = '5.0 stars';
    boxRating.appendChild(rating);
    boxText.appendChild(boxRating);

    // add box text to the new box element
    newBox.appendChild(boxText);

    // add the new box element to the selection panel
    selectionPanel.appendChild(newBox);
});


