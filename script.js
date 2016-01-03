$(document).ready(function() {

	$('button').mouseenter(function() {
		$(this).css("border-color", "black");
	});
	$('button').mouseleave(function() {
		$(this).css("border-color", "#EEE");
	});


	$('a').mouseenter(function() {
		$(this).css("text-decoration", "underline");
	});
	$('a').mouseleave(function() {
		$(this).css("text-decoration", "none");
	});


	$('#block').mouseenter(function() {
		$(this).css("opacity", "1.0");
	});
	$('#block').mouseleave(function() {
		$(this).css("opacity", "0.5");
	});

});
