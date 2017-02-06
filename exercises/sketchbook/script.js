

$(document).ready(function() {
	$("#x").click(function() {
		$(".popup_hide").fadeToggle("popup");
	})
});

$(document).ready(function() {
	$("#x").click(function() {
		$(".menuhide").slideToggle("menu");

	})
});

$(document).ready(function() {
$( ".open" ).hide();
$( ".menu" ).hide();
$( "#x" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
});
});
});