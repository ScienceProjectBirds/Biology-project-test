// Найти все элементы, которые должны плавно появляться
const fadeElements = document.querySelectorAll('.fade-in');

// Функция для проверки, находятся ли элементы в области видимости
function checkVisibility() {
    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

// Отслеживать событие прокрутки и загружать элементы при прокрутке
window.addEventListener('scroll', checkVisibility);

// Вызвать проверку видимости сразу при загрузке страницы
checkVisibility();
