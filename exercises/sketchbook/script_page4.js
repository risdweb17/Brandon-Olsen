//$(document).ready(function() {
	//(".backImage_1").fadeOut("backImage_1a")
//});

$(document).ready(function() {
	$("body").removeClass(".backImage_3a").delay(400).queue(function(next){
    $(this).addClass("backImage_3b");
    next();
	})
});

$(document).ready(function() {
	$("body").removeClass(".backImage_3b").delay(400).queue(function(next){
    $(this).addClass("backImage_4");
    next();
	})
});