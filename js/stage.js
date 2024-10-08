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










let bB = document.querySelector('.burger-button')
const firstStripe = document.querySelector('.first-stripe')
const secondStripe = document.querySelector('.second-stripe')
const thirdStripe = document.querySelector('.third-stripe')
const stripes = document.querySelectorAll('.stripes')
let Drawerleft = document.querySelector('.right-gate-main-div-closed')
let injecting = document.querySelector('.injector-clog-off')
const logoDivUpward  =document.querySelector('.logo-div-up')
bB.addEventListener('click',() => {
    injecting.classList.toggle('inject-exc-dr')


    logoDivUpward.classList.toggle('veil-logo')


    firstStripe.classList.toggle('first-stripe-click')
    firstStripe.classList.toggle('first-stripe')
    secondStripe.classList.toggle('second-stripe')
    secondStripe.classList.toggle('second-stripe-click')
    thirdStripe.classList.toggle('third-stripe')
    thirdStripe.classList.toggle('third-stripe-click')


    Drawerleft.classList.toggle('right-gate-main-div-closed')
    Drawerleft.classList.toggle('right-gate-main-div')



})

injecting.addEventListener( 'click',() => {
    logoDivUpward.classList.remove('veil-logo')

    firstStripe.classList.remove('first-stripe-click')
    firstStripe.classList.add('first-stripe')
    secondStripe.classList.add('second-stripe')
    secondStripe.classList.remove('second-stripe-click')
    thirdStripe.classList.add('third-stripe')
    thirdStripe.classList.remove('third-stripe-click')


    Drawerleft.classList.add('right-gate-main-div-closed')
    Drawerleft.classList.remove('right-gate-main-div')

        injecting.classList.remove('inject-exc-dr')
})