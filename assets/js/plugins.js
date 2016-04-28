$(document).ready(function() {
	$(document).scroll(function() {
		var scrollPos = $(window).scrollTop();
		var dataOpacity = scrollPos/100;
		var opacityTitle = 1 - dataOpacity;
		var opacityTitle2 = 1 - (dataOpacity/1.5);
		$("header h1").css("opacity", opacityTitle)
		$("header h5").css("opacity", opacityTitle2)
	});
})