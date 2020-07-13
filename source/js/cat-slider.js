if (location.pathname.endsWith('/') || location.pathname.endsWith('/index.html')) {
	const catBefore = document.querySelector('.example__before');
	const catAfter = document.querySelector('.example__after');
	const buttonBefore = document.querySelector('.example__button--before');
	const buttonAfter = document.querySelector('.example__button--after');
	const slideButton = document.querySelector('.example__toggles');
	var tabletWidth = window.matchMedia('(min-width: 768px)');

	buttonBefore.addEventListener('click', function(evt) {
		if (tabletWidth.matches) {
			document.getElementById('before-cat').style.width = '100%';
			document.getElementById('range-slider').value = '100';
		} else if (catAfter.classList.contains('example__cat--show')) {
			catAfter.classList.remove('example__cat--show');
			catBefore.classList.add('example__cat--show');
			slideButton.classList.remove('example__toggles-btn');
			}
	});

	buttonAfter.addEventListener('click', function(evt) {
		if (tabletWidth.matches) {
			document.getElementById('before-cat').style.width = '0';
			document.getElementById('range-slider').value = '0';
		} else if (catBefore.classList.contains('example__cat--show')) {
			catBefore.classList.remove('example__cat--show');
			catAfter.classList.add('example__cat--show');
			slideButton.classList.add('example__toggles-btn');
		}
	});

	function rangeSlider(value) {
		document.querySelector('.example__before').style.width = +value+'%';
	};
}
