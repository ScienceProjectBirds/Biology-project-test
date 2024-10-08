





import { BirdName } from './signUp.js';

document.addEventListener('birdNameChanged', (event) => {
    console.log('Bird Name изменено на:', event.detail); // Новое значение BirdName
    // Здесь можно использовать event.detail для дальнейших действий
});




