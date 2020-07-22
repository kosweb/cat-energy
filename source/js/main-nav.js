const navButton = document.querySelector('.page-header__nav-button');
const mainNav = document.querySelector('.main-nav');

navButton.onclick = function(evt) {
	evt.preventDefault();
	navButton.classList.toggle('nav-button--open');
	mainNav.classList.toggle('show-navigation');
};
