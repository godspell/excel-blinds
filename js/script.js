$(function(){

	//smooth scrolling
	$("html").niceScroll();

	function valign(el, min_height) {
		if(min_height) {
			$(el).css('margin-top', (min_height/2) - ($(el).height()/2) + 30 + 'px');
		}else{
			$(el).css('margin-top', ($(window).height()/2) - ($(el).height()/2) + 30 + 'px');
		}
		
	}

	$("#banner-fader").css('height', $(window).height());

	$( window ).resize(function() {
		$("#banner-fader").css('height', $(window).height());
		//center banner text
		$("#banner-fader ul#slides li").each(function(index, el){
			valign($(this));
		});
	});

	//center banner text
	$("#banner-fader ul.slides li").each(function(index, el){
		valign($(this));
	});

});

window.onload = function(){
	var fader = new Fader('#banner-fader ul.slides li', '#banner-fader ul.background-images li', 2000);
	fader.start();

	var testimonials_fader = new Fader('#testimonial-slides li', null, 5000);
	testimonials_fader.start();
};