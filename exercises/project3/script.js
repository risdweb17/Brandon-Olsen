//$(document).ready(function() {
	//(".backImage_1").fadeOut("backImage_1a")
//});

$(document).ready(function() {
	$("body").removeClass(".backImage_1").delay(500).queue(function(next){
    $(this).addClass("backImage_1a");
    next();
	})
});
