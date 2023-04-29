const scaleButton = document.querySelector('.post-button');

scaleButton.addEventListener('click', () => {
  scaleButton.classList.add('button-anim');
  setTimeout(() => {
    scaleButton.classList.remove('button-anim');
  }, 370);
});

const originalElement = document.querySelector('.element-post');

scaleButton.addEventListener('click', () => {
  const clonedElement = originalElement.cloneNode(true);
  originalElement.parentNode.appendChild(clonedElement);
});