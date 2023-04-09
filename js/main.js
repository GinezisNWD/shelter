import data from "./data.mjs"
const cards = [...data]
const ourFriendsSLider = document.querySelector('.our-friends__slider')
const ourFriendButtonArrowPrev = document.querySelector('.our-friends__button-arrow-prev')
const ourFriendButtonArrowNext = document.querySelector('.our-friends__button-arrow-next')

ourFriendsSLider.innerHTML = ''

// Important Variables
let prevRenderedCards = []
const renderedCards = []
let prevDirection = 'some'

// 

function getRandom() {
	return Math.floor(Math.random() * cards.length)
}


function getCardsBlock(n) {
	let cardsBlock = ''

	for (let i = 0; i < n; i++) {
		const random = getRandom()

		if (cards[random].isRender) {
			i--
			continue
		}

		renderedCards.push(random)
		const cardWrapper = document.createElement('div')
		cardWrapper.classList.add('our-friends__card-wrapper')
		cardWrapper.innerHTML = `<div class="our-friends__card">
		<div class="our-friends__image">
			<img src="${cards[random].img}" alt="${cards[random].name}">
		</div>
		<div class="our-friends__name">${cards[random].name}</div>
		<button class="our-friends__button-card button-card">Learn more</button>
		</div>`

		cards[random].isRender = true

		cardsBlock = cardsBlock + cardWrapper.outerHTML
	}
	return cardsBlock
}

function getPrevCardBlock() {
	let cardsBlock = ''
	for (let i = 0; i < prevRenderedCards.length; i++) {
		const cardWrapper = document.createElement('div')
		cardWrapper.classList.add('our-friends__card-wrapper')
		cardWrapper.innerHTML = `<div class="our-friends__card">
		<div class="our-friends__image">
			<img src="${cards[prevRenderedCards[i]].img}" alt="${cards[prevRenderedCards[i]].name}">
		</div>
		<div class="our-friends__name">${cards[prevRenderedCards[i]].name}</div>
		<button class="our-friends__button-card button-card">Learn more</button>
		</div>`

		cards[prevRenderedCards[i]].isRender = true

		cardsBlock = cardsBlock + cardWrapper.outerHTML



	}

	return cardsBlock
}

// prevRenderedCards[i]


function getNumberOfCards() {
	const num = window.innerWidth

	if (num > 0 && num <= 748) { return 1 }
	if (num >= 749 && num <= 1239) { return 2 }
	if (num >= 1240) { return 3 }
}

function renderCardsBlock(block, dir = 'beforeend') {
	ourFriendsSLider.insertAdjacentHTML(`${dir}`, block)

}

function clearRenderedStack() {
	let n = renderedCards.length / 2
	prevRenderedCards = renderedCards.slice(0, n)
	for (let i = 0; i < n; i++) {
		const index = renderedCards.shift()
		cards[index].isRender = false
	}
}


function firstRender() {
	const num = window.innerWidth

	if (num > 0 && num <= 748) { renderCardsBlock(getCardsBlock(getNumberOfCards())) }
	if (num >= 749 && num <= 1239) { renderCardsBlock(getCardsBlock(getNumberOfCards())) }
	if (num >= 1240) { (renderCardsBlock(getCardsBlock(getNumberOfCards()))) }
}
firstRender()

// window.addEventListener('resize', function () {
// 	let num = this.innerWidth
// 	if (num > 0 && num < 749) { ourFriendsSLider.innerHTML = ''; renderCardsBlock(getCardsBlock(getNumberOfCards())); }
// 	if (num >= 749 && num <= 1239) { ourFriendsSLider.innerHTML = ''; renderCardsBlock(getCardsBlock(getNumberOfCards())); }
// 	if (num >= 1240) { ourFriendsSLider.innerHTML = ''; (renderCardsBlock(getCardsBlock(getNumberOfCards()))); }
// });
// 
function nextCardsBlock() {
	const direction = 'next'

	if (prevDirection !== 'some' && prevDirection !== direction) {
		console.log(`нам нужен предыдущий блок ${prevRenderedCards}`)


	} else { console.log('всё хорошо') }

	prevDirection = direction


	const prevBlock = ourFriendsSLider.innerHTML
	const newBlock = `${getCardsBlock(getNumberOfCards())}`
	renderCardsBlock(newBlock)
	const cards = document.querySelectorAll('.our-friends__card-wrapper')
	cards.forEach(elem => { elem.classList.add('our-friends__card-wrapper_next-cards') })
	cards[0].addEventListener('animationend', function () {
		console.log('Анимация кончилась')
		ourFriendsSLider.innerHTML = newBlock
	})
	clearRenderedStack()
}

function prevCardsBlock() {
	const direction = 'prev'
	if (prevDirection !== 'some' && prevDirection !== direction) {
		console.log(`нам нужен предыдущий блок ${prevRenderedCards}`)

	} else { console.log('всё хорошо') }

	prevDirection = direction



	const prevBlock = ourFriendsSLider.innerHTML
	const newBlock = `${getCardsBlock(getNumberOfCards())}`
	renderCardsBlock(newBlock, 'afterbegin')
	const cards = document.querySelectorAll('.our-friends__card-wrapper')
	cards.forEach(elem => { elem.classList.add('our-friends__card-wrapper_prev-cards') })
	cards[0].addEventListener('animationend', function () {
		console.log('Анимация кончилась')
		ourFriendsSLider.innerHTML = newBlock
	})
	clearRenderedStack()
}

ourFriendButtonArrowNext.addEventListener('click', nextCardsBlock)

ourFriendButtonArrowPrev.addEventListener('click', prevCardsBlock)
















// const testArr = [0, 1, 2, 3, 4, 5, 6, 7,]
// const test = cards[Math.floor(Math.random() * testArr.length)]
// const newArr = []
// const random = Math.floor(Math.random() * cards.length)

// console.log(cards[random])


{/* <div class="our-friends__card-wrapper">
<div class="our-friends__card">
	<div class="our-friends__image">
		<img src="assets/img/pets-katrine.jpg" alt="katrine">
	</div>
	<div class="our-friends__name">Katrine</div>
	<button class="our-friends__button-card button-card">Learn more</button>
</div>
</div> */}