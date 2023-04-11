import data from "./data.mjs"
const petsPagination = document.querySelector('.our-pets__pagination')

const buttonArrowFirst = document.querySelector('.our-pets__button-arrow-first')
const buttonArrowPrev = document.querySelector('.our-pets__button-arrow-prev')
const buttonArrowPageNumber = document.querySelector('.our-pets__button-arrow-some')
const buttonArrowNext = document.querySelector('.our-pets__button-arrow-next')
const buttonArrowLast = document.querySelector('.our-pets__button-arrow-last')



// Important Variables
let pageNumber = 1

// 
buttonArrowPageNumber.innerHTML = pageNumber
petsPagination.innerHTML = ''



const cards = [...data, ...data, ...data, ...data, ...data, ...data,]
const sortedСards = []
getsortedСards(cards)

function getRandom() {
	return Math.floor(Math.random() * cards.length)
}

function getsortedСards(array) {
	let names = []
	let block = []

	for (let i = 0; i < 9; i++) {
		const random = getRandom()

		if (sortedСards.length === 48) { break }

		if (names.includes(array[random].name || cards[random].inStack)) {
			i--
			continue
		}

		array[random].inStack = true
		names.push(array[random].name)
		block.push(array[random])

		if (block.length === 8) {
			sortedСards.push(...block)

			i = 0
			names = new Array()
			block = new Array()
		}
	}
}

function getCardsBlock(n) {
	let cardsBlock = ''

	for (let i = 0; i < n; i++) {
		const random = i

		const cardWrapper = document.createElement('div')
		cardWrapper.classList.add('our-pets__card-wrapper')
		cardWrapper.innerHTML = `<div class="our-pets__card">
		<button class="our-pets__button-close button-close"><img src="assets/svg/x.svg"
				alt="cross"></button>
		<div class="our-pets__image">
			<img src="${sortedСards[random].img}" alt="${sortedСards[random].name}">
		</div>
		<div class="our-pets__info">
			<h3 class="our-pets__name">${sortedСards[random].name}</h3>
			<h4 class="our-pets__subtitle">Dog - Labrador</h4>
			<p class="our-pets__description">${sortedСards[random].description}
			</p>
			<ul class="our-pets__list">
				<li class="our-pets__li">
					<h5>Age: </h5>${sortedСards[random].age}
				</li>
				<li class="our-pets__li">
					<h5>Inoculations: </h5>${sortedСards[random].inoculations}
				</li>
				<li class="our-pets__li">
					<h5>Diseases: </h5>${sortedСards[random].diseases}
				</li>
				<li class="our-pets__li">
					<H5>Parasites: </H5>${sortedСards[random].parasites}
				</li>
			</ul>
		</div>
		<button class="our-pets__button-card button-card">Learn more</button>
	</div>`

		cardsBlock = cardsBlock + cardWrapper.outerHTML
	}
	return cardsBlock
}

function getNumberOfCards() {
	const num = window.innerWidth

	if (num > 0 && num <= 748) { return 3 }
	if (num >= 749 && num <= 1239) { return 6 }
	if (num >= 1240) { return 8 }
}

function renderCardsBlock(block, dir = 'beforeend') {
	petsPagination.insertAdjacentHTML(`${dir}`, block)

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
		petsPagination.innerHTML = ''
		if (num > 0 && num < 749) { petsPagination.innerHTML = ''; renderCardsBlock(getCardsBlock(getNumberOfCards())); }
		if (num >= 749 && num <= 1239) { petsPagination.innerHTML = ''; renderCardsBlock(getCardsBlock(getNumberOfCards())); }
		if (num >= 1240) { petsPagination.petsPagination = ''; (renderCardsBlock(getCardsBlock(getNumberOfCards()))); }
	}
}



// console.log(cards)
// console.log(sortedСards)
