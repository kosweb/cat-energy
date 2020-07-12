if (location.pathname.endsWith('/index.html')) {
	var catBefore = document.querySelector('.example__before');
	var catAfter = document.querySelector('.example__after');
	var buttonBefore = document.querySelector('.example__option--before');
	var buttonAfter = document.querySelector('.example__option--after');
	const tabletWidth = window.matchMedia( '(min-width: 768px)' );

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
