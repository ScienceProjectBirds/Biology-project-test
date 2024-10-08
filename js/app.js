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















let navs = document.querySelector('.nav-4')
let nav2 = document.querySelector('.About-main')
let secondddd = document.querySelector('.secondddd')
let secoondText = document.querySelector('.secoondText ')
let A1 = document.querySelector('.a1')
let A2 = document.querySelector('.a2')
let injectt = document.querySelector('.inject')
let allows = 0
let asgasg = document.querySelector('.ffff')

navs.addEventListener( 'click',() => {
	navs.classList.toggle('rotunder-bottom')
	nav2.classList.toggle('About-main')
	nav2.classList.toggle('About-main-click')

	secondddd.classList.toggle('veil')
	secoondText.classList.toggle('secoond-veil')



	if (allows === 0) {
		console.log('Choose again')
	} else if (allows >= 1) {
		A1.setAttribute('href', './stage.html')

	}


	allows++


})


injectt.addEventListener('click' ,() => {
	navs.classList.add('rotunder-bottom')
	nav2.classList.add('About-main')
	nav2.classList.remove('About-main-click')
	secondddd.classList.remove('veil')


	secoondText.classList.remove('secoond-veil')
	console.log(allows)
})



injectt.addEventListener( 'click',() => {
 allows = 0
	navs.classList.add('rotunder-bottom')
	nav2.classList.add('About-main')
	nav2.classList.remove('About-main-click')
	secondddd.classList.remove('veil')
	secoondText.classList.remove('secoond-veil')

})
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
window.addEventListener('scroll', checkVisibility);
checkVisibility()







navs.addEventListener( 'click',() => {
	allows = 0
	if (allows === 0) {
		console.log('Choose again')
	} else if (allows >= 1) {
		A1.setAttribute('href', './stage.html')

	}


	allows++
})





let lNv = document.querySelector('.overall_navbar')
let nmm = document.querySelectorAll('.overall_navbar .navbar .navbar-list div a')
let pattern = document.getElementById('pattern')
let svgs = document.querySelectorAll('.overall_navbar .navbar .navbar-list div svg')
for (let i = 0; i < svgs.length; i++) {
	let svg = 	svgs[i]

	svg.style.color = 'white'
}

let bB = document.querySelector('.burger-button')
let clauses = document.querySelector('.clausess-bg')
let injectClass = document.querySelector('.inject')
let overall = document.querySelector('.overall_navbar')
let clausesChildren = document.querySelectorAll('.clausess-bg div')
const firstStripe = document.querySelector('.first-stripe')
const secondStripe = document.querySelector('.second-stripe')
const thirdStripe = document.querySelector('.third-stripe')
const stripes = document.querySelectorAll('.stripes')
let active = false

if (active === false) {


bB.addEventListener('click',() => {

	clauses.classList.toggle('clausess-bg-spike-up')
	clauses.classList.toggle('clausess-bg')
	firstStripe.classList.toggle('first-stripe-click')
	firstStripe.classList.toggle('first-stripe')
	secondStripe.classList.toggle('second-stripe')
	secondStripe.classList.toggle('second-stripe-click')
	secondStripe.classList.toggle('second-conceal-click')
	thirdStripe.classList.toggle('third-stripe')
	thirdStripe.classList.toggle('third-stripe-click')
	thirdStripe.classList.toggle('third-conceal-click')
	setTimeout(function () {
			clausesChildren.forEach((childEl) => {
				childEl.style.opacity = '1'

		})
	}, 220)


})
}



injectClass.addEventListener('click',() => {
	clauses.classList.remove('clausess-bg-spike-up')
	clauses.classList.add('clausess-bg')
	firstStripe.classList.remove('first-stripe-click')
	firstStripe.classList.add('first-stripe')
	secondStripe.classList.add('second-stripe')
	secondStripe.classList.remove('second-stripe-click')

	thirdStripe.classList.add('third-stripe')
	thirdStripe.classList.remove('third-stripe-click')

})


document.addEventListener('scroll', () => {
	let lT = document.querySelector('.logo-text')
	if (window.scrollY >= 450) {

		lNv.style.background = 'white'

		nmm.forEach((bm) => {
			bm.style.color = 'black'

		})

		pattern.style.color = 'red'

		for (let i = 0; i < svgs.length; i++) {
		let svg = 	svgs[i]
		stripes.forEach((stripe) => {
			stripe.style.backgroundColor = 'black'
		})

			lT.style.color = 'black'
			svg.style.color = 'black'
		}



	} else {
		for (let i = 0; i < svgs.length; i++) {
			let svg = 	svgs[i]
			stripes.forEach((stripe) => {
				stripe.style.backgroundColor = 'white'
			})
			lT.style.color = 'white'
			svg.style.color = 'white'

		}
		lNv.style.background = 'none'

		nmm.forEach((bm) => {
			bm.style.color = 'white'
		})
		pattern.style.color = 'red'
	}
})

let animka = document.getElementById('animation')
animka.classList.add('right-navbar-list')

let back = document.querySelector('.back')

back.style.background = 'white'

setTimeout(() => {




	animka.classList.add('rainbow_text_animated')


}, 1500)




