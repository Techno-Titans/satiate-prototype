let postsButton = document.querySelector('.post') as HTMLDivElement;
let postScreen = document.querySelector('.post-screen') as HTMLDivElement;
let closeButton = document.querySelector('#close-button') as HTMLImageElement;

postsButton.addEventListener('click', () => {
    postsButton.classList.add('clicked');
    setTimeout(() => {
        postsButton.classList.remove('clicked');
    }, 200)
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
})
