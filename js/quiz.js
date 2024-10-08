let nameError = document.getElementById('name-error')
let phoneError = document.getElementById('phone-error')
let emailError = document.getElementById('email-error')
let messError = document.getElementById('mess-error')
let fixError = document.getElementById('fix-error')



function validateName() {
    let name = document.getElementById('contact-name').value
    if (name.length === 0) {
        nameError.innerHTML = 'nAME IS REQUIRED'
        return  false
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = ' Write full name'
        return false
    }
    nameError.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/2048px-Flat_tick_icon.svg.png" style="width: 10px"/>  '
    return  true
}

function validatePhone() {
    let phone = document.getElementById('contact-phone').value
    if (phone.length === 0) {
        nameError.innerHTML = 'nAME IS REQUIRED'
        return false
    }
    if (!phone.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        phoneError.innerHTML = ' Write full name'
        return false
    }
    phoneError.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/2048px-Flat_tick_icon.svg.png" style="width: 10px"/> '
    return  true
}

function validateEmail() {
    let email = document.getElementById('contact-email').value
    if (email.length === 0) {
        emailError.innerHTML = ' Email is required'
        return false
    }
    if (!email.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        emailError.innerHTML = 'Write availbable email!'
        return false
    }
    emailError.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/2048px-Flat_tick_icon.svg.png" style="width: 10px"/> '
    return  true
}

function validateMess() {
    let mess = document.getElementById('contact-mess').value
    if (mess.length < 4) {
        messError.innerHTML = ' Write at least four symbols me'
    return false
    }
    if (!mess.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/[1-9])) {
        messError.innerHTML = 'weird message this not accesible'
        return  false
    }
    messError.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/2048px-Flat_tick_icon.svg.png" style="width: 10px"/> '
    return  true
}

function validateFix() {
if (!validateName()  || !validatePhone()  || !validateEmail()  || !validateMess() ) {
    setTimeout(() => {

    fixError.style.display = 'block'
    fixError.innerHTML = 'Something going wrong retrieve sure on availvality'
    }, 2000)
} else {
    console.log('cool passed')
}

}



// how allowed scroll in sideways by mouse
let scrollContainer = document.querySelector('.effrigies')


scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault()
    scrollContainer.scrollLeft += event.deltaY
    scrollContainer.style.scrollBehavior = 'auto'
})

// how append aditionally scrolling with some arrows

// example
// RightArrow.addEventListener('click', () => {
//    scrollContainer.style.scrollBehavior = 'smooth'
  //  scrollContainer.scrollLeft += 900
// })

//  LeftArrow.addEventListener('click', () => {
//  scrollContainer.style.scrollBehavior = 'smooth'
//    scrollContainer.scrollLeft -= 900
// })

let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')




setInterval(() => {


    let currentDate = new Date()
let getHours = currentDate.getHours()
    if (getHours <= 0) {
        getHours += '0'
    }
hours.innerHTML = getHours
minutes.innerHTML = currentDate.getMinutes()
seconds.innerHTML = currentDate.getSeconds()
}, 1000)