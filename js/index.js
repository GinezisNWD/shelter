console.log('100/ 100 \n верстка гуляет +-5px \n куда мог добавлять интерактив добавил \n продолжительность анимаций 0.3s ease\n ссылки вроде нормально себя ведут \n если что обманывать не хотел. мог сам не доглядеть \nДабы закрыть вопрос про репозиторий, в моем регионе приватные репозитории использовать нельзя, я под санкциями. Не могу испольвать не личный, не школьный приватный. А каждый раз врубать впн так себе идея, мне еще за это не платят.')


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