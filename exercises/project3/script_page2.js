//$(document).ready(function() {
	//(".backImage_1").fadeOut("backImage_1a")
//});

$(document).ready(function() {
	$("body").removeClass(".backImage_1a").delay(300).queue(function(next){
    $(this).addClass("backImage_1b");
    next();
	})
});

$(document).ready(function() {
	$("body").removeClass(".backImage_1b").delay(300).queue(function(next){
    $(this).addClass("backImage_2");
    next();
	})
});