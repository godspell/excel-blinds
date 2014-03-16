$(function(){
	var nav = $('nav ul');
	var btn = $("#responsive-btn");

	btn.click(function(){
		if(window.innerWidth <= 768) {
			if(nav.css('display') == 'none'){
				console.log("down");
				nav.slideDown('fast');
			}else{
				console.log("up");
				nav.slideUp('fast');
			}
		}
	});

	$(window).resize(function(){
		if($(window).width() >= 768){
			nav.show();
		}else{
			nav.hide();
		}
	});

});