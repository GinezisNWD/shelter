// burger menu
const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuBodyWrapper = document.querySelector('.menu__body-wrapper')
if (menuIcon) {
	menuIcon.addEventListener('click', function (e) {
		document.body.classList.toggle('_scroll-lock')
		menuIcon.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		menuBodyWrapper.classList.toggle('_active')
	});
}

// scroll on click
const menuLinks = document.querySelectorAll('.menu__link[data-goto], .button-primary[data-goto], #home, #ourPets')

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick)
	})

	function onMenuLinkClick(e) {
		const menuLink = e.target
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto)
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset

			if (menuIcon.classList.contains('_active')) {
				document.body.classList.remove('_scroll-lock')
				menuIcon.classList.remove('_active');
				menuBody.classList.remove('_active');
				menuBodyWrapper.classList.remove('_active');
			}


			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			})
			e.preventDefault()

		}
	}
}

// 

menuBodyWrapper.addEventListener('click', function (e) {
	if (!e.target.closest('.meny__link')) {
		menuIcon.classList.remove('_active');
		menuBody.classList.remove('_active');
		menuBodyWrapper.classList.remove('_active');
	}
})

// 

const homeLink = document.querySelector('#home')
const ourPetsLink = document.querySelector('#ourPets')
const helpLink = document.querySelector('#help')

if (homeLink) {
	homeLink.addEventListener('click', function (e) {
		e.preventDefault()
		setTimeout(function () { window.location.href = 'index.html' }, 150)
		document.body.classList.remove('_scroll-lock')
		menuIcon.classList.remove('_active');
		menuBody.classList.remove('_active');
		menuBodyWrapper.classList.remove('_active');



	})
}


if (ourPetsLink) {
	ourPetsLink.addEventListener('click', function (e) {
		e.preventDefault()
		setTimeout(function () { window.location.href = './pets.html' }, 150)
		document.body.classList.remove('_scroll-lock')
		menuIcon.classList.remove('_active');
		menuBody.classList.remove('_active');
		menuBodyWrapper.classList.remove('_active');

	})
}


if (helpLink) {
	helpLink.addEventListener('click', function (e) {
		e.preventDefault()
		setTimeout(function () { window.location.href = './index.html#help' }, 250)
		document.body.classList.remove('_scroll-lock')
		menuIcon.classList.remove('_active');
		menuBody.classList.remove('_active');
		menuBodyWrapper.classList.remove('_active');

	})
}

