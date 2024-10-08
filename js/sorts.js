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








const headerRainbow = document.querySelector('.js-rainbow-p')


setTimeout(() => {
    headerRainbow.classList.add('postPoned')
    headerRainbow.classList.add('text')
    headerRainbow.style.color = 'black'
}, 6000)



setTimeout(() => {
    headerRainbow.classList.add('rainbow-p')
}, 3500)



const images = document.querySelector('.images')
const titleBird = document.querySelector('.titleBird')


images.addEventListener('mouseenter', () => {
    titleBird.style.opacity = '0'
})

images.addEventListener('mouseout', () => {
    titleBird.style.opacity = '1'
})

const images1 = document.querySelector('.images-1')
const titleBird1 = document.querySelector('.titleBird-1')


images1.addEventListener('mouseenter', () => {
    titleBird1.style.opacity = '0'
})

images1.addEventListener('mouseout', () => {
    titleBird1.style.opacity = '1'
})
const images2 = document.querySelector('.images-2')
const titleBird2 = document.querySelector('.titleBird-2')


images2.addEventListener('mouseenter', () => {
    titleBird2.style.opacity = '0'
})

images2.addEventListener('mouseout', () => {
    titleBird2.style.opacity = '1'
})
const images3 = document.querySelector('.images-3')
const titleBird3 = document.querySelector('.titleBird-3')


images3.addEventListener('mouseenter', () => {
    titleBird3.style.opacity = '0'
})

images3.addEventListener('mouseout', () => {
    titleBird3.style.opacity = '1'
})
const images4 = document.querySelector('.images-4')
const titleBird4 = document.querySelector('.titleBird-4')


images4.addEventListener('mouseenter', () => {
    titleBird4.style.opacity = '0'
})

images4.addEventListener('mouseout', () => {
    titleBird4.style.opacity = '1'
})
const images5 = document.querySelector('.images-5')
const titleBird5 = document.querySelector('.titleBird-5')


images5.addEventListener('mouseenter', () => {
    titleBird5.style.opacity = '0'
})

images5.addEventListener('mouseout', () => {
    titleBird5.style.opacity = '1'
})

/*
window.addEventListener('resize', function() {
    const windowWidth = window.innerWidth;
    let h1Tag = document.querySelector('.explicating-text h1')
    h1Tag.style.fontSize = (windowWidth / 100) + 'px';
});

 */