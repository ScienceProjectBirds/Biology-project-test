let inT  =document.querySelector('.initial-title')
let bodyk = document.querySelector('.bodyk')
let lH = document.querySelector('.logo-headband')
setTimeout(() => {


    inT.classList.add('inT')
    inT.classList.remove('.initial-title')
}, 1400)

setTimeout(() => {
    bodyk.classList.remove('displayer')
    lH.style.display = 'none'
}, 2500)


/*

let details2 = document.querySelector('.detailsss2')
let reveal = document.querySelector('.reveal')
let veil = document.querySelector('.veil')
let injector = document.querySelector('.inject')

reveal.classList.add('opening')


reveal.addEventListener('click' ,() => {

    details2.style.transform = 'translateX(0px)'

    details2.style.backgroundColor = 'white'
  //  injector.style.display = 'block'

    veil.style.display = 'block'
    reveal.style.display = 'none'
    injector.style.display = 'block'
  //  heder.style.display = 'none'
})
veil.addEventListener('click' ,() => {

  //  injector.style.display = 'none'
    details2.style.transform = 'translateX(300px)'
    injector.style.display =' none'

    veil.style.display = 'none'
    reveal.style.display = 'block'
   // heder.style.display = 'flex'
})



/*
window.addEventListener( 'scroll',() => {

    if (window.screenY >= 10) {
        heeeader.style.position = 'fixed'
        heeeader.style.backgroundColor = 'white'
    }
    if (window.screenY >= 20) {
        heeeader.style.position = 'relative'

    }
})

injector.addEventListener('click',() => {
    details2.style.transform = 'translateX(0px)'
    injector.style.display = 'none'
    veil.style.display = 'none'
    reveal.style.display = 'block'
    heder.style.display = 'flex'
})



let btn = document.querySelector('.rain-back')
let hoverok = document.querySelector('.details')

btn.addEventListener('mouseenter' ,() => {
    setTimeout(() => {


        hoverok.style.display = 'block'
        hoverok.style.opacity = '1'
    }, 600)

})
let injector2 = document.querySelector('.inject2')
btn.addEventListener( 'mouseout',() => {
    setTimeout(() => {
        hoverok.style.display = 'none'
        hoverok.style.opacity = '0'
    }, 1000)
})
let tgPopOut = document.querySelector('.tg-popOut')
btn.addEventListener('click' ,() => {
    injector2.style.display = 'block'
    tgPopOut.style.opacity = '1'

})
let revoke = document.querySelector('.revoke')


revoke.addEventListener('click' ,() => {
    injector2.style.display = 'none'
    tgPopOut.style.opacity = '0'
})
injector2.addEventListener('click',() => {
    injector2.style.display = 'none'
    tgPopOut.style.opacity = '0'
})


 */
setTimeout(() => {


let biologyTextRessurected = document.querySelector('.biology-earmarking-underhyphen')
let keke = document.querySelector('.biology-earmarking-underhyphen')
let sparks = document.querySelector('.background-img')

setTimeout(() => {
    keke.classList.remove('frst_classForRemove')
    sparks.classList.add('fickle-stars')
    keke.classList.add('augm_length')
}, 1000)

setTimeout(() => {
    keke.classList.remove('augm_length')
    keke.classList.add('augm_altitude')
}, 4000)
const text = "Приветсвуем на Science Drudge of ";
const typingElement = document.querySelector('#typing-text h1');
let index = 0;





    function typeText() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Скорость печатания (в мс)
        }
    }

    typeText();




let line = document.querySelector('.line')
setTimeout(() => {
    line.style.opacity = '1'
    line.classList.add('lineIncreaseWidth')
}, 1000)
setTimeout(() => {
    line.style.opacity = '1'
    line.classList.add('lineIncreaseHeight')

}, 3500)
setTimeout(() => {
    biologyTextRessurected.style.opacity = '1'
    line.classList.add('border-radiuss')
}, 5500)
setTimeout(() => {
    line.classList.add('style-rainbow-border')
}, 6500)

setTimeout(() => {
    //  biologyTextRessurected.style.display = 'block'
    // biologyTextRessurected.style.opacity = '1'
}, 7000)



let UnableVideoInsteadBackgrounds = document.querySelector('.svg-and-text-play-picture-div')
let EnableVideoInsteadBackgrounds = document.querySelector('.svg-and-text-play-video-div')
let carouseOfBlossomImgs = document.querySelector('.carousel')
let videoFullScreen = document.querySelector('.video-whole-screen')
let pRer = document.querySelector('.paragraph-rerranger')
EnableVideoInsteadBackgrounds.addEventListener('click', () => {
    carouseOfBlossomImgs.style.display = 'none'
    sparks.style.display = 'none'
    videoFullScreen.style.display = 'block'
    EnableVideoInsteadBackgrounds.style.display = 'none'
    UnableVideoInsteadBackgrounds.style.display = 'flex'
})


UnableVideoInsteadBackgrounds.addEventListener('click', () => {
    carouseOfBlossomImgs.style.display = 'flex'
    sparks.style.display = 'flex'
    videoFullScreen.style.display = 'none'
    EnableVideoInsteadBackgrounds.style.display = 'flex'
    UnableVideoInsteadBackgrounds.style.display = 'none'

})

let burger_pull_out = document.querySelector('.pull_out')
let text_burger_paragraph = document.querySelector('.bi-text-paragraph')
let pulling_door = document.querySelector('.right-gate-main-div-closed')
const injector = document.querySelector('.inject')
let rig = document.querySelector('.right-gate-div-determine')

injector.addEventListener('click', () => {
    pulling_door.classList.add('right-gate-main-div-closed')
    pulling_door.classList.remove('right-gate-main-div')
    burger_pull_out.style.display = 'block'
    injector.classList.add('inject-clog-off')
    rig.style.zIndex = '4'


    text_burger_paragraph.style.display = 'none'
})
burger_pull_out.addEventListener( 'click',() => {
    pulling_door.classList.add('right-gate-main-div')
    pulling_door.classList.remove('right-gate-main-div-closed')
        burger_pull_out.style.display = 'none'

    text_burger_paragraph.style.display = 'block'
        injector.classList.remove('inject-clog-off')
    rig.style.zIndex = '14'


})
text_burger_paragraph.addEventListener('click',() => {
    pulling_door.classList.add('right-gate-main-div-closed')
    pulling_door.classList.remove('right-gate-main-div')
    burger_pull_out.style.display = 'block'
    injector.classList.add('inject-clog-off')
    rig.style.zIndex = '4'


    text_burger_paragraph.style.display = 'none'
})

let cards = document.querySelectorAll('.card');
const darkness = document.querySelectorAll('.inject-cards');
    let textOfCard = document.querySelectorAll('.text-scale')

    textOfCard.forEach((text) => {
        text.style.opacity = '0'
    })

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        let inject = document.querySelectorAll('.inject-cards');
        inject.forEach((inj) => {
            inj.style.opacity = '0'
        })

        textOfCard.forEach((text) => {
            text.style.opacity = '0';  // Скрываем текст
        });

        // Показываем текст только у текущей карточки
        let currentText = textOfCard[index];
        currentText.style.opacity = '1';  // Показываем текст текущей карточки
        console.log(currentText.textContent);  // Выводим текст в консоль


        // Сначала удаляем класс у всех карточек
        cards.forEach((c) => {
            c.classList.remove('class-returner');
        });

        // Добавляем класс к текущей карточке
        card.classList.add('class-returner');

        // Скрываем inject у всех карточек


        // Показать inject только у текущей карточки
        let curInj = card.querySelector('.inject-cards')
        curInj.style.opacity = '1'
    });
});
let cardsOneThrd = document.querySelectorAll('.card-one-of-third');
    let textOfCardF = document.querySelectorAll('.text-scale-f')

cardsOneThrd.forEach((card, index) => {
    card.addEventListener('click', () => {
        let inject = document.querySelectorAll('.inject-cards');
        inject.forEach((inj) => {
            inj.style.opacity = '0'
        })
        textOfCardF.forEach((text) => {
            text.style.opacity = '0';  // Скрываем текст
        });

        // Сначала удаляем класс у всех карточек
        cardsOneThrd.forEach((c) => {
            c.classList.remove('class-returner');
        });

        // Добавляем класс к текущей карточке
        card.classList.add('class-returner');

        // Скрываем inject у всех карточек
        let currentText = textOfCardF[index];
        currentText.style.opacity = '1';  // Показываем текст текущей карточки


        // Показать inject только у текущей карточки
        let curInj = card.querySelector('.inject-cards')
        curInj.style.opacity = '1'
    });
});

let card1 = document.querySelector('.card-1')
let card2 = document.querySelector('.card-2')
let card3 = document.querySelector('.card-3')
let card4 = document.querySelector('.card-4')

let lastScrollY = window.scrollTop;

window.addEventListener('scroll', () => {

    let scrollPosition = window.scrollY;


  cards.forEach((card, index) => {

          console.log(scrollPosition * -0.05)
       let shr = scrollPosition * -0.07
        let aug = scrollPosition * 0.07

      /*
          if (scrollY < lastScrollY) {
              // Прокрутка вверх
              card.style.transform = 'scale(1.5)';
          } else {
              // Прокрутка вниз
              card.style.transform = 'scale(1)';
          }


            if (scrollPosition < 500) {
              aug = 0
            }
            card1.style.transform = `scale(${aug}%) rotate(-40deg) translate(-200px, -150px)`
            card2.style.transform = `scale(${aug}%) rotate(-20deg) translate(-100px, -50px)`
            card3.style.transform = `scale(${aug}%) rotate(5deg) translate(20px, 0px)`
            card4.style.transform = `scale(${aug}%) rotate(20deg) translate(100px, -50px)`

           */
    });
});
const inputField = document.querySelector('.charity-gr-fund');
inputField.value = '0$'



inputField.addEventListener('wheel', function(event) {
    event.preventDefault();

    let currentValue = parseInt(inputField.value, 10) || 0;

    /*
        if (event.deltaY > 0 && event.deltaY > 50)  {
            inputField.value = currentValue + 1 + '$'; // Увеличение
        } else if (event.deltaY > 50 && event.deltaY > 100) {
            inputField.value = currentValue + 1 + '$'; // Увеличение
            inputField.classList.add('more-perky')
        } else if (event.deltaY === 0) {
            inputField.value = '0$'
        }
        else if (event.deltaY < 50) {

        }


        else {
            inputField.value = 0 + '$'
        }

     */
    console.log(currentValue)
    if (currentValue >150) {

        console.log('more than 50')
        inputField.value = currentValue + 1 + '$';
    }
    else if (event.deltaY < 0) {
        inputField.value = currentValue + 1 + '$'; // Увеличение значения при прокрутке вверх
    } else if (event.deltaY > 0 && currentValue > 0) {
        inputField.value = currentValue - 1 + '$'; // Уменьшение значения при прокрутке вниз, если значение больше 0
    }

    if (currentValue > 10 && currentValue < 20) {
        inputField.classList.add('back-red')
        inputField.classList.add('more-perky')
    }
    if (currentValue >= 20 && currentValue < 40) {
        inputField.classList.add('back-green')
    }
    if (currentValue >= 40 && currentValue < 60) {
        inputField.classList.add('back-violet')
    }
    if (currentValue >= 60 && currentValue < 80) {
        inputField.classList.add('back-blue')
    }
    if (currentValue >= 80 && currentValue < 150) {
        inputField.classList.add('back-blue')
    }
    else if (currentValue > 150) {
        inputField.value  = '150$'
        alert('Больше 150$ нельзя!')
    }

});
const headerRainbow = document.querySelector('.js-rainbow-p')
const te22xt = document.querySelector('.quiz-text-h1')

setTimeout(() => {
    headerRainbow.classList.add('postPoned')
    headerRainbow.classList.add('text')
    te22xt.style.color = 'white'
}, 3000)



setTimeout(() => {
    headerRainbow.classList.add('rainbow-p')
}, 3500)



/*   // ЕСЛИ СКРОЛИШЬ ВНИЗ ТО ТОГДА ДЕЛАЕТ ТО ЧТО ПРИ ДОСТУПНОСТИ ВИДИМОСТИ КОНТЭЙНЕРА ОН ПРИЦЕПЛЯЕТСЯ К ЭКРАНУ
 const container = document.querySelector('.content-of-headline');
const containerOffsetTop = container.offsetTop;





function handleScroll() {

    if (window.pageYOffset >= containerOffsetTop) {
        container.classList.add('fixed-abyss-container');

    } else {

        container.classList.remove('fixed-abyss-container');
    }
}


window.addEventListener('scroll', handleScroll);

// Найти контейнеры
const stickyContainer = document.querySelector('.content-of-headline');
const nextContainer = document.querySelector('.next-container'); // Следующий контейнер за текущим

// Получить начальные значения для отслеживания
const stickyContainerOffsetTop = stickyContainer.offsetTop;
const stickyContainerHeight = stickyContainer.offsetHeight;

// Функция для работы с прокруткой
function handleScrollFuther() {
    const nextContainerRect = nextContainer.getBoundingClientRect();

    // Проверить, если страница прокручена до или выше stickyContainer
    if (window.pageYOffset >= stickyContainerOffsetTop) {
        // Если верхняя граница следующего контейнера касается нижней границы фиксированного
        if (nextContainerRect.top <= stickyContainerHeight) {
            stickyContainer.classList.remove('fixed-abyss-container');
            stickyContainer.classList.add('sticky-disabled');
        } else {
            stickyContainer.classList.remove('sticky-disabled');
            stickyContainer.classList.add('fixed-abyss-container');
        }
    } else {
        // Убираем фиксированное положение, если прокрутка выше stickyContainer
        stickyContainer.classList.remove('fixed-abyss-container');
        stickyContainer.classList.remove('sticky-disabled');
    }
}




 */


let fades = document.querySelectorAll('.fadeIn')





// Функция для проверки, находятся ли элементы в области видимости
function checkVisibility() {
    setTimeout(() => {


    fades.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
    },600)

}

// Отслеживать событие прокрутки и загружать элементы при прокрутке
window.addEventListener('scroll', checkVisibility);

// Вызвать проверку видимости сразу при загрузке страницы
checkVisibility();

let cardsDial = document.querySelector('.phone-number-div')
let contPop = document.querySelector('.contacts-pop-out')
let classP = document.querySelectorAll('.contacts-pop-out p')
cardsDial.addEventListener('mouseenter' ,() => {
        contPop.classList.add('aug-height-and-append-padding')
    classP.forEach((eleme) => {


    eleme.classList.add('display-text')
    })
})
cardsDial.addEventListener('mouseleave' ,() => {
        contPop.classList.remove('aug-height-and-append-padding')
    classP.forEach((eleme) => {


        eleme.classList.remove('display-text')
    })
})
}, 2500)