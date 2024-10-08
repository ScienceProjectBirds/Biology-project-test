const inputField = document.querySelector('.charity-gr-fund');

// Инициализация начального значения поля
inputField.value = '0$';

inputField.addEventListener('wheel', function(event) {
    event.preventDefault();

    // Текущее числовое значение поля
    let currentValue = parseInt(inputField.value.replace('$', ''), 10) || 0;

    // Увеличение или уменьшение значения на основе прокрутки
    if (event.deltaY < 0) {
        inputField.value = (currentValue + 1) + '$'; // Увеличение значения при прокрутке вверх
    } else if (event.deltaY > 0 && currentValue > 0) {
        inputField.value = (currentValue - 1) + '$'; // Уменьшение значения при прокрутке вниз, если значение больше 0
    }

    // Обновляем текущее значение
    currentValue = parseInt(inputField.value.replace('$', ''), 10);

    // Добавляем или убираем класс с анимированным бордером
    if (currentValue > 10 && currentValue < 20) {
        inputField.classList.add('dot-border');
    } else {
        inputField.classList.remove('dot-border');
    }
});
