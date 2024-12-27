const background = document.querySelector('.backgroundMove'),
    hoverLeft = document.querySelector('.hover-left'),
    hoverRight = document.querySelector('.hover-right'),
    charContainer = document.querySelector('.chars-imgs'),
    charOne = document.querySelector('.char-1'),
    charTwo = document.querySelector('.char-2');

hoverLeft.addEventListener('mouseover', () => {
    charContainer.style.transform = 'translateX(20%)';
    charTwo.style.right = '-50%'
    background.style.transform = 'translateX(20%) scale(1.5)';
})

hoverLeft.addEventListener('mouseout', () => {
    charContainer.style.transform = 'translateX(0%)';
    charTwo.style.right = '0%'
    background.style.transform = 'translateX(0%) scale(1.5)';
})

hoverRight.addEventListener('mouseover', () => {
    charContainer.style.transform = 'translateX(-20%)';
    charOne.style.left = '-50%'
    background.style.transform = 'translateX(-20%) scale(1.5)';
})

hoverRight.addEventListener('mouseout', () => {
    charContainer.style.transform = 'translateX(0%)';
    charOne.style.left = '0%'
    background.style.transform = 'translateX(0%) scale(1.5)';
})