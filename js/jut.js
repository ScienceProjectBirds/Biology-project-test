const hoverText = document.querySelector('.hover-text');
const menuContainer = document.querySelector('.menu-container');

// Когда мышь наводится на текст
hoverText.addEventListener('mouseenter', () => {
    menuContainer.classList.add('active');
});

// Когда мышь уходит с текста
hoverText.addEventListener('mouseleave', () => {
    menuContainer.classList.remove('active');
});
