console.log('Время анимации слайдера для каждого разрешения разное, кнопка не активна пока идет анимация')

// burger menu
const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (menuIcon) {
	menuIcon.addEventListener('click', function (e) {
		document.body.classList.toggle('_scroll-lock')
		menuIcon.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// scroll on click
const menuLinks = document.querySelectorAll('.menu__link[data-goto], .button-primary[data-goto]')

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
			}


			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			})
			e.preventDefault()

		}
	}
}