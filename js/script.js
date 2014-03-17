$(function(){

	$("#fader").css('height', $(window).height());

});

$( window ).resize(function() {
  $("#fader").css('height', $(window).height());
});