//$(document).ready(function() {
//	$(".button").click(function() {
//		$(".none").fadeToggle("some")
//	});
//});

$(document).ready(function() {
	$(".hamburger").click(function() {
		$(".menuhide").slideToggle("menu");

	})
});

$(document).ready(function() {
$( ".open" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".open" ).show();
});
});
});

$(document).ready(function() {
$( ".open" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".open" ).hide();
$( ".hamburger" ).show();
});
});
});