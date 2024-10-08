 let  BirdName

 let selectedBackgroundColor;


let firstQuat = document.getElementById('first-quat')
let enrol = document.querySelector('.enroll')
let stripe = document.querySelector('.stripe')
let sidewaysleft = document.querySelector('.sidewayleft')
let sidewaysright = document.querySelector('.sidewayright')
let downStripeLeft = document.querySelector('.down-stripe-left')
let downStripeRight = document.querySelector('.down-stripe-right')
let starling = document.querySelector('.character_starling')
let NamesBird = document.querySelectorAll('.name-of-bird')
let ransackedCOlorOFBirdBackground = document.querySelectorAll('.ransacked-src')
 let isValidNick

 let isValidName

 let inValNick


let NameOfBirdDef = []; // Должен обновляться каждый раз
let background; // Цвет фона текущей выбранной птицы

let birdsIntelColor = []; // Массив для хранения цвета выбранных птиц

 function getBirdName() {
     return new Promise((resolve) => {
         const birds = document.querySelectorAll('.js-character-bird');

         birds.forEach((bird) => {
             bird.addEventListener('click', () => {

                 NameOfBirdDef = [bird];


                 birds.forEach((birde) => birde.classList.remove('border'));

                 // Получаем цвет фона
                 let compColor = window.getComputedStyle(bird);
                 background = compColor.backgroundColor;

                 console.log(background);
                 localStorage.setItem('backgroundColor', JSON.stringify(background))
               // Set in localStorage
                 console.log(localStorage.getItem('backgroundColor')); // Should log the color

                 bird.classList.add('border');


                 BirdName = bird.textContent.trim();


                 const birdImage = bird.querySelector('.ransacked-src');
                 const birdImageSrc = birdImage ? birdImage.src : '';

                 console.log(birdImageSrc);



                 firstQuat.style.opacity = '1';

                 stripe.classList.add('strecher');
                 stripe.style.backgroundColor = background;

                 sidewaysleft.classList.add('sideway2left');
                 sidewaysleft.style.backgroundColor = background;

                 sidewaysright.classList.add('sideway2right');
                 sidewaysright.style.backgroundColor = background;
                 birdsIntelColor.push(background);


                 const button1 = document.querySelector('.buttoned1');
                 const button2 = document.querySelector('.buttoned2');
                 const tick = document.querySelector('.tick');
                 const tick2 = document.querySelector('.tick2');
                 const cross = document.querySelector('.cross');
                 const cross2 = document.querySelector('.cross2');
                 const inputNick = document.querySelector('.inputN');
                 const inputName = document.querySelector('.inputName');
                 const displayButton = document.getElementById('display-button');
                 const secondQuat = document.querySelector('.second-quat');

                 let check = 0;

                 button1.addEventListener('click', () => {
                    inValNick = inputNick.value;
                     let regexNick = new RegExp(`[a-zA-ZА-Яа-я0-9]`);
                     isValidNick = regexNick.test(inValNick);
                     console.log(isValidNick);
                     if (inValNick !== '') {
                         if (isValidNick === true) {
                             check++;
                             tick.style.opacity = '1';

                             setTimeout(() => (inputNick.value = ''), 1000);
                             setTimeout(() => (tick.style.opacity = '0'), 2000);

                             secondQuat.style.opacity = '1';
                             for (let i = 0; i < birdsIntelColor.length; i++) {
                                 let backColor = birdsIntelColor[i];
                                 sidewaysright.classList.add('sideway3right');
                                 sidewaysleft.style.backgroundColor = backColor;
                                 sidewaysleft.classList.add('sideway3left');
                                 sidewaysright.style.backgroundColor = backColor;
                             }
                         } else {
                             cross.style.opacity = '1';
                             setTimeout(() => (inputNick.value = ''), 1000);
                             setTimeout(() => (cross.style.opacity = '0'), 2000);
                         }
                     } else {
                         cross.style.opacity = '1';
                         setTimeout(() => (inputNick.value = ''), 1000);
                         setTimeout(() => (cross.style.opacity = '0'), 2000);
                     }



    console.log(inValNick)

                 });

                 button2.addEventListener('click', () => {
                     let inValName = inputName.value;
                     let regexName = RegExp(`[a-zA-Zа-яА-Я]`);
                   isValidName = regexName.test(inValName);

                     if (inValName.trim() !== '') {
                         if (isValidName === true) {
                             check++;
                             for (let i = 0; i < birdsIntelColor.length; i++) {
                                 let backColor = birdsIntelColor[i];
                                 downStripeLeft.style.backgroundColor = backColor;
                                 downStripeLeft.classList.add('down-stripe-left-strecher');
                                 downStripeRight.style.backgroundColor = backColor;
                                 downStripeRight.classList.add('down-stripe-right-strecher');
                             }
                             tick2.style.opacity = '1';
                             setTimeout(() => (inputName.value = ''), 1000);
                             setTimeout(() => (tick2.style.opacity = '0'), 2000);
                             displayButton.style.opacity = '1';
                         } else {
                             cross2.style.opacity = '1';
                             setTimeout(() => (inputName.value = ''), 1000);
                             setTimeout(() => (cross2.style.opacity = '0'), 2000);
                         }
                     } else {
                         cross2.style.opacity = '1';
                         setTimeout(() => (inputName.value = ''), 1000);
                         setTimeout(() => (cross2.style.opacity = '0'), 2000);
                     }


                     resolve({ name: BirdName, image: birdImageSrc, backgroundColor: background,   same: inValName, nick: inValNick  });
                 });

                 if (check === 2) {
                     displayButton.style.display = 'block';
                 }

             });
         });
         let scnd_part = document.querySelector('.second-part')
         let buttonon = document.querySelector('.buttonon');
         buttonon.addEventListener('click', () => {
             document.querySelector('.display-all').style.display = 'none';
             document.querySelector('.second-part').style.display = 'block';
             scnd_part.style.opacity = '1'
         });
     });
 }

 let nameOf = document.querySelector('.titlee');
 let quiz = document.querySelector('.quiz')
 let main_bird_Text = document.querySelector('.main-deduce')
 let scd_bird_Text = document.querySelector('.secondary-deduce')
 let imagee = document.querySelector('.nameOfBird')


 getBirdName().then(({ name, image, backgroundColor, same, nick}) => {
     console.log('Выбранное имя птицы:', name);
     console.log('URL изображения птицы:', image);
     console.log(backgroundColor)

     main_bird_Text.innerHTML = same
     scd_bird_Text.innerHTML = nick
    imagee.src = image

 });








