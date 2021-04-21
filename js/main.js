$(document).ready(function() {
	$('.header__burger').click(function(event){
			$('.header__burger').toggleClass('active');
			$('.header__nav').toggleClass('active');
			$('.header__list').toggleClass('active');
			$('body').toggleClass('lock');
	});
});
