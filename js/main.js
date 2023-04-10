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
		<button class="our-friends__button-close button-close"><img src="assets/svg/x.svg"
				alt="cross"></button>
		<div class="our-friends__image">
			<img src="${cards[random].img}" alt="${cards[random].name}">
		</div>
		<div class="our-friends__info">
			<h3 class="our-friends__name">${cards[random].name}</h3>
			<h4 class="our-friends__subtitle">Dog - Labrador</h4>
			<p class="our-friends__description">${cards[random].description}
			</p>
			<ul class="our-friends__list">
				<li class="our-friends__li">
					<h5>Age: </h5>${cards[random].age}
				</li>
				<li class="our-friends__li">
					<h5>Inoculations: </h5>${cards[random].inoculations}
				</li>
				<li class="our-friends__li">
					<h5>Diseases: </h5>${cards[random].diseases}
				</li>
				<li class="our-friends__li">
					<H5>Parasites: </H5>${cards[random].parasites}
				</li>
			</ul>
		</div>
		<button class="our-friends__button-card button-card">Learn more</button>
	</div>`

		cards[random].isRender = true

		cardsBlock = cardsBlock + cardWrapper.outerHTML
	}
	return cardsBlock
}

function getPrevCardBlock(array) {
	let cardsBlock = ''

	for (let i = 0; i < array.length; i++) {
		const random = array[i]

		renderedCards.push(random)
		const cardWrapper = document.createElement('div')
		cardWrapper.classList.add('our-friends__card-wrapper')
		cardWrapper.innerHTML = `<div class="our-friends__card">
		<button class="our-friends__button-close button-close"><img src="assets/svg/x.svg"
				alt="cross"></button>
		<div class="our-friends__image">
			<img src="${cards[random].img}" alt="${cards[random].name}">
		</div>
		<div class="our-friends__info">
			<h3 class="our-friends__name">${cards[random].name}</h3>
			<h4 class="our-friends__subtitle">Dog - Labrador</h4>
			<p class="our-friends__description">${cards[random].description}
			</p>
			<ul class="our-friends__list">
				<li class="our-friends__li">
					<h5>Age: </h5>${cards[random].age}
				</li>
				<li class="our-friends__li">
					<h5>Inoculations: </h5>${cards[random].inoculations}
				</li>
				<li class="our-friends__li">
					<h5>Diseases: </h5>${cards[random].diseases}
				</li>
				<li class="our-friends__li">
					<H5>Parasites: </H5>${cards[random].parasites}
				</li>
			</ul>
		</div>
		<button class="our-friends__button-card button-card">Learn more</button>
	</div>`

		cards[random].isRender = true

		cardsBlock = cardsBlock + cardWrapper.outerHTML
	}
	return cardsBlock
}

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

window.addEventListener('resize', resize);
let prevSize = getNumberOfCards()
function resize() {
	let num = this.innerWidth
	let size
	if (num > 0 && num < 749) { size = 1 }
	if (num >= 749 && num <= 1239) { size = 2 }
	if (num >= 1240) { size = 3 }

	if (size !== prevSize) {
		prevSize = size
		clearRenderedStack()
		prevRenderedCards = new Array()
		if (num > 0 && num < 749) { ourFriendsSLider.innerHTML = ''; renderCardsBlock(getCardsBlock(getNumberOfCards())); }
		if (num >= 749 && num <= 1239) { ourFriendsSLider.innerHTML = ''; renderCardsBlock(getCardsBlock(getNumberOfCards())); }
		if (num >= 1240) { ourFriendsSLider.innerHTML = ''; (renderCardsBlock(getCardsBlock(getNumberOfCards()))); }
	}
}


function nextCardsBlock(e) {
	e.target.removeEventListener('click', nextCardsBlock)

	const direction = 'next'
	const prevBlock = ourFriendsSLider.innerHTML
	let newBlock

	if (prevDirection !== 'some' && prevDirection !== direction && prevRenderedCards.length > 0) {
		newBlock = `${getPrevCardBlock(prevRenderedCards)}`
		renderCardsBlock(newBlock)
	} else {
		newBlock = `${getCardsBlock(getNumberOfCards())}`
		renderCardsBlock(newBlock)
	}
	prevDirection = direction

	const cardsNodeList = document.querySelectorAll('.our-friends__card-wrapper')
	cardsNodeList.forEach(elem => { elem.classList.add('our-friends__card-wrapper_next-cards') })
	cardsNodeList[0].addEventListener('animationend', function () {
		ourFriendsSLider.innerHTML = newBlock
		ourFriendButtonArrowNext.addEventListener('click', nextCardsBlock)
	})
	clearRenderedStack()
}

function prevCardsBlock(e) {
	e.target.removeEventListener('click', prevCardsBlock)

	const direction = 'prev'
	const prevBlock = ourFriendsSLider.innerHTML
	let newBlock

	if (prevDirection !== 'some' && prevDirection !== direction && prevRenderedCards.length > 0) {
		newBlock = `${getPrevCardBlock(prevRenderedCards)}`
		renderCardsBlock(newBlock, 'afterbegin')
	} else {
		newBlock = `${getCardsBlock(getNumberOfCards())}`
		renderCardsBlock(newBlock, 'afterbegin')
	}
	prevDirection = direction

	const cardsNodeList = document.querySelectorAll('.our-friends__card-wrapper')
	cardsNodeList.forEach(elem => { elem.classList.add('our-friends__card-wrapper_prev-cards') })
	cardsNodeList[0].addEventListener('animationend', function () {
		ourFriendsSLider.innerHTML = newBlock
		ourFriendButtonArrowPrev.addEventListener('click', prevCardsBlock)
	})
	clearRenderedStack()
}

ourFriendButtonArrowNext.addEventListener('click', nextCardsBlock)

ourFriendButtonArrowPrev.addEventListener('click', prevCardsBlock)

