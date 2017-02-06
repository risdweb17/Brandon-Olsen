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
});
});
});