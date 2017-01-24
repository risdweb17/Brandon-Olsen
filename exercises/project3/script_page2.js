//$(document).ready(function() {
	//(".backImage_1").fadeOut("backImage_1a")
//});

$(document).ready(function() {
	$("body").removeClass(".backImage_1a").delay(400).queue(function(next){
    $(this).addClass("backImage_1b");
    next();
	})
});

$(document).ready(function() {
	$("body").removeClass(".backImage_1b").delay(400).queue(function(next){
    $(this).addClass("backImage_2");
    next();
	})
});

//$(document).ready(function() {
//	$(".final").click(function() {
//		$(".final_hide2").fadeToggle("final_2click");
//	})
//});
