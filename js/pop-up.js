const cards = document.getElementsByClassName('our-friends__card-wrapper')
const ourFriendsSLider = document.querySelector('.our-friends__slider')
const petsPagination = document.querySelector('.our-pets__pagination')

if (ourFriendsSLider) {
	ourFriendsSLider.addEventListener('click', function (e) {
		let targetItem = e.target;

		if (targetItem.closest('.our-friends__card-wrapper')) {
			targetItem.closest('.our-friends__card-wrapper').classList.add('_active');
			document.body.classList.add('_scroll-lock')
		}

		if (targetItem.closest('.button-close')) {
			targetItem.closest('.our-friends__card-wrapper').classList.remove('_active');
			document.body.classList.remove('_scroll-lock')
		}

		if (!targetItem.closest('.our-friends__card')) {
			targetItem.closest('.our-friends__card-wrapper').classList.remove('_active');
			document.body.classList.remove('_scroll-lock')
		}
	})

}

if (petsPagination) {
	petsPagination.addEventListener('click', function (e) {
		let targetItem = e.target;

		if (targetItem.closest('.our-pets__card-wrapper')) {
			targetItem.closest('.our-pets__card-wrapper').classList.add('_active');
			document.body.classList.add('_scroll-lock')
		}

		if (targetItem.closest('.button-close')) {
			targetItem.closest('.our-pets__card-wrapper').classList.remove('_active');
			document.body.classList.remove('_scroll-lock')
		}

		if (!targetItem.closest('.our-pets__card')) {
			targetItem.closest('.our-pets__card-wrapper').classList.remove('_active');
			document.body.classList.remove('_scroll-lock')
		}
	})
}

// window.scrollTo({
// 	top: 1300,
// 	behavior: "smooth"
// })



