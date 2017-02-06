//$(document).ready(function() {
	//(".backImage_1").fadeOut("backImage_1a")
//});

$(document).ready(function() {
	$("body").removeClass(".backImage_2a").delay(400).queue(function(next){
    $(this).addClass("backImage_2b");
    next();
	})
});

$(document).ready(function() {
	$("body").removeClass(".backImage_2b").delay(400).queue(function(next){
    $(this).addClass("backImage_3");
    next();
	})
});