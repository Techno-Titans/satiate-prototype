let postsButton = document.querySelector('.post') as HTMLDivElement;

postsButton.addEventListener('click', () => {
    postsButton.classList.add('clicked');
    setTimeout(() => {
        postsButton.classList.remove('clicked');
    }, 200)
});