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
const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if (menuLinks > 0) {
	menuLinks.forEach
}