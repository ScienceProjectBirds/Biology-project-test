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








let details2 = document.querySelector('.detailsss2')
let reveal = document.querySelector('.reveal')
let veil = document.querySelector('.veil')
let injector = document.querySelector('.inject')
let heeeader = document.querySelector('.header')
let heder = document.querySelector('.hederok')
let tg_header_hunk = document.querySelector('.tg-header-hunk')
reveal.classList.add('opening')

injector.classList.add('conceal')
reveal.addEventListener('click' ,() => {

    details2.classList.add('detailsss2Pop')

    injector.classList.remove('conceal')

    veil.classList.add('get-veil')
    reveal.classList.add('nah-reveal')
    heder.classList.add('conceal')
    injector.style.zIndex = '151'

})





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
    tg_header_hunk.classList.remove('adittional_margin')
    details2.classList.remove('detailsss2Pop')
    injector.classList.add('conceal')
    veil.classList.remove('get-veil')
    reveal.classList.remove('nah-reveal')
    heder.classList.add('flexHeder')
    heder.classList.remove('conceal')
        injector.style.zIndex = '99'
})



veil.addEventListener('click' ,() => {
    tg_header_hunk.classList.remove('adittional_margin')
    injector.classList.add('conceal')
    details2.classList.remove('detailsss2Pop')


    veil.classList.remove('get-veil')
    reveal.classList.remove('nah-reveal')
    heder.classList.add('flexHeder')
    heder.classList.remove('conceal')
    injector.style.zIndex = '99'
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
 tgPopOut.style.display = 'flex'

})
let revoke = document.querySelector('.revoke')


revoke.addEventListener('click' ,() => {
    injector2.style.display = 'none'
    tgPopOut.style.display = 'none'

})
injector2.addEventListener('click',() => {
    injector2.style.display = 'none'

})





// phone response jss

let gTc = document.querySelector('.gist-title-column1')
let socials = document.querySelector('.itemizing-buds-div1')
gTc.addEventListener('click',() => {


})
