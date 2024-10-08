
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
}, 3000)







let tablinks = document.querySelectorAll('.tab-links')
let tabContents = document.querySelectorAll('.tab-contents')

const skills = document.querySelector('#skills')


  function openTab(tabname) {
        tablinks.forEach((tablink) => {
            tablink.classList.remove('active-link')

        })
      tabContents.forEach((tabcontent) =>{
          tabcontent.classList.remove('active-tab')
      })

      event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
  }
const firstStripe = document.querySelector('.first-stripe')
const secondStripe = document.querySelector('.second-stripe')
const thirdStripe = document.querySelector('.third-stripe')
let bB = document.querySelector('.burger-button')
let injectClass = document.querySelector('.inject')
const bS  = document.querySelector('.burger-button-sphere')
let stripes = document.querySelectorAll('.stripes')


let gate = document.querySelector('.gate')
    bB.addEventListener('click',() => {

gate.classList.toggle('gate-right-ward')
        gate.classList.toggle('gate')
        firstStripe.classList.toggle('first-stripe-click')
        firstStripe.classList.toggle('first-stripe')
        secondStripe.classList.toggle('second-stripe')
        secondStripe.classList.toggle('second-stripe-click')

        thirdStripe.classList.toggle('third-stripe')
        thirdStripe.classList.toggle('third-stripe-click')
    injectClass.classList.toggle('inject-clog-on')
        bS.classList.toggle('burger-button-sphere-red')
        stripes.forEach((stripe) => {
            stripe.classList.toggle('change-color')
        })


    })


injectClass.addEventListener('click',() => {
    gate.classList.remove('gate-right-ward')
    gate.classList.add('gate')
    firstStripe.classList.remove('first-stripe-click')
    firstStripe.classList.add('first-stripe')
    secondStripe.classList.add('second-stripe')
    secondStripe.classList.remove('second-stripe-click')

    thirdStripe.classList.add('third-stripe')
    thirdStripe.classList.remove('third-stripe-click')
    injectClass.classList.remove('inject-clog-on')
    injectClass.classList.add('inject')
    bS.classList.remove('burger-button-sphere-red')
    stripes.forEach((stripe) => {
        stripe.classList.remove('change-color')
    })

})

let btn3 = document.querySelector('.btn3')
let msg = document.querySelector('.msg')
btn3.addEventListener('click',() => {
    msg.classList.add('appear')
    msg.classList.remove('msg')

    setTimeout(() => {
        msg.classList.remove('appear')
        msg.classList.add('msg')

    }, 3000)
    form.reset()
})





const text = "Привет я ";
const typingElement = document.querySelector('#typing-text');
let index = 0;




setTimeout(() => {


function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Скорость печатания (в мс)
    }
}

typeText();
const text3 = "Иван";
const typingElement3 = document.querySelector('#typing-text3');
let index3 = 0;


setTimeout(() => {




    function typeText3() {
        if (index3 < text3.length) {
           typingElement3.style.color = 'red'
            typingElement3.textContent += text3.charAt(index3);
            index3++;
            setTimeout(typeText3, 100); // Скорость печатания (в мс)
        }
    }

    typeText3();
}, 900)

const text2 = "Создатель Science Drudge";
const typingElement2 = document.querySelector('#typing-text2');
let index2 = 0;


setTimeout(() => {




function typeText2() {
    if (index2 < text2.length) {
        typingElement2.textContent += text2.charAt(index2);
        index2++;
        setTimeout(typeText2, 100); // Скорость печатания (в мс)
    }
}

typeText2();
}, 1700)
}, 3000)