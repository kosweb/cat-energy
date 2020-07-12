if (location.pathname.endsWith('/') || location.pathname.endsWith('/index.html')) {
	const catBefore = document.querySelector('.example__before');
	const catAfter = document.querySelector('.example__after');
	const buttonBefore = document.querySelector('.example__option--before');
	const buttonAfter = document.querySelector('.example__option--after');
	var tabletWidth = window.matchMedia( '(min-width: 768px)' );

	buttonBefore.addEventListener('click', function(evt) {
		if (catAfter.classList.contains('example__cat--show')) {
			catAfter.classList.remove('example__cat--show');
			catBefore.classList.add('example__cat--show');
		} if (tabletWidth.matches) {
				document.getElementById('before-cat').style.width = '100%';
				document.getElementById('range-slider').value = '100';
			}
	});

	buttonAfter.addEventListener('click', function(evt) {
		if (catBefore.classList.contains('example__cat--show')) {
			catBefore.classList.remove('example__cat--show');
			catAfter.classList.add('example__cat--show');
		} if (tabletWidth.matches) {
				document.getElementById('before-cat').style.width = '0';
				document.getElementById('range-slider').value = '0';
			}
	});

	function rangeSlider(value) {
		document.querySelector('.example__before').style.width = +value+'%';
	};
}
