	$(document).ready(function() {
		console.log($('.navBarClass').length);
	var NavY = $('.navBarClass').offset().top;

	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();

	if (ScrollY > NavY) {
		$('.navBarClass').addClass('sticky');
	} else {
		$('.navBarClass').removeClass('sticky');
	}
	};

	stickyNav();

	$(window).scroll(function() {
		stickyNav();
	});
	});
