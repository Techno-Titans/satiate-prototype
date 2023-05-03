"use strict";
let postsButton = document.querySelector('.post');
let postScreen = document.querySelector('.post-screen');
let closeButton = document.querySelector('#close-button');
postsButton.addEventListener('click', () => {
    postsButton.classList.add('clicked');
    setTimeout(() => {
        postsButton.classList.remove('clicked');
    }, 200);
    postScreen.classList.add('inToTheScreen');
    postScreen.classList.remove('outOfTheScreen');
    postsButton.classList.toggle('fade-out');
    postsButton.classList.toggle('fade-in');
});
closeButton.addEventListener('click', () => {
    postScreen.classList.add('outOfTheScreen');
    postScreen.classList.remove('inToTheScreen');
    postsButton.classList.toggle('fade-in');
    postsButton.classList.toggle('fade-out');
});
