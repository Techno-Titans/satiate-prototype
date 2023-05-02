"use strict";
let postsButton = document.querySelector('.post');
postsButton.addEventListener('click', () => {
    postsButton.classList.add('clicked');
    setTimeout(() => {
        postsButton.classList.remove('clicked');
    }, 200);
});
