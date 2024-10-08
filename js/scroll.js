const cards = document.querySelectorAll('.card');
const container = document.querySelector('.container');

let lastScrollY = container.scrollTop;

container.addEventListener('scroll', () => {
    const scrollY = container.scrollTop;

    cards.forEach(card => {
        // Увеличиваем при прокрутке вверх и уменьшаем при прокрутке вниз
        if (scrollY < lastScrollY) {
            // Прокрутка вверх
            card.style.transform = 'scale(1.1)';
        } else {
            // Прокрутка вниз
            card.style.transform = 'scale(1)';
        }
    });

    lastScrollY = scrollY;
});