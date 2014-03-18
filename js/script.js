$(function(){

	$("#fader").css('height', $(window).height());

	//smooth scrolling
	$("html").niceScroll();

	function valign(el, min_height) {
		if(min_height) {
			$(el).css('margin-top', (min_height/2) - ($(el).height()/2) + 30 + 'px');
		}else{
			$(el).css('margin-top', ($(window).height()/2) - ($(el).height()/2) + 30 + 'px');
		}
		
	}

	
	$( window ).resize(function() {
		$("#fader").css('height', $(window).height());
		//center banner text
		$("#fader ul#slides li").each(function(index, el){
			valign($(this));
		});
	});

	//center banner text
	$("#fader ul#slides li").each(function(index, el){
		valign($(this));
	});

});

window.onload = function(){
	var fader = new Fader('#slides li', '#background-images li', 10000);
	fader.start();
};