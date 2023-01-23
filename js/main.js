$(document).ready(function(){
	new WOW().init();
	// typed js
	var options = {
	  strings: ['a web designer', 'Front-End developer', 'full time freelancer'],
	  typeSpeed: 40, 
	  loop:true,
	  backSpeed:30,
	};
	// navbar show
	var typed = new Typed('.skills', options);
	$(".navbar-toggler").click(function(){
		$(".navbar-nav").toggleClass("navbar-show");
		$(".navbar-collapse").toggleClass("nav-parent-show");
	});
	// progress bar 
	$('.html').rProgressbar({
	  percentage: 99
	});
	$('.css').rProgressbar({
	  percentage: 94,
	  fillBackgroundColor: '#2ECC71',
	  duration: 1100
	});
	$('.Bootstrap').rProgressbar({
	  percentage: 97,
	  fillBackgroundColor: '#9B59B6',
	  duration: 1300
	});
	$('.Javascript').rProgressbar({
	  percentage: 90,
	  fillBackgroundColor: '#34495E',
	  duration: 1500
	});
	$('.jquery').rProgressbar({
	  percentage: 92,
	  fillBackgroundColor: '#F1C40F',
	  duration: 1700
	});
	$('.react').rProgressbar({
		percentage: 95,
		fillBackgroundColor: '#60cef0',
		duration: 1700
	  });
	// scroll top
	var scrollTag= $(".scroll-top");
	$(window).scroll(function(){
		var scrollVal = $(window).scrollTop();
		if(scrollVal >= 400){
			scrollTag.fadeIn();
		}else{
			scrollTag.fadeOut();
		}
	});
	// count up
	$('.counter').countUp();
});