let fstBll = document.querySelector('.first-ball')


setTimeout(() => {
    fstBll.classList.add('first-exo-ball')
    fstBll.classList.remove('first-ball')
}, 3000)


let scnBll = document.querySelector('.scnd-ball')
const indText = document.getElementById('indication')
let arAnom = document.querySelector('.arr-anim')

setTimeout(() => {
    scnBll.classList.add('scnd-exo-ball')
    setTimeout(() => {
        indText.style.opacity = '1'
        arAnom.style.opacity = '1'
    }, 1500)


    scnBll.classList.remove('scnd-ball')

}, 3000)