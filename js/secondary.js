let icons = document.querySelector('.icon-pop-out')
let elements = document.querySelector('.entire-elements')
let par = document.querySelector('.paragraph-fade')
let footer = document.querySelector('.footer')
setTimeout(() => {
    footer.style.display = 'flex'
    icons.style.display = 'none'
    par.style.display = 'none'
    elements.style.display = 'block'
}, 1500)