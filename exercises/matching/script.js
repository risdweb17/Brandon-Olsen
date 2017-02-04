$(document).ready(function() {

	var choice1="";
	var choice2="";


	$('.pear').click(function(){
		choice1 = $(this).attr('id');
		console.log("Choice1:" + " " + choice1);
	});

	$('.country').click(function(){
		choice2 = $(this).attr('id');
		console.log("Choice2:" + " " + choice2);
		if(choice1===choice2){
	   		console.log("correct");
	   		$("#message").text("SO SMART!");			   		
		}
	   	else {
	   		console.log("wrong");
	   		$("#message").text("YOU SUCK!");
	   	}	
		
	});
	});
	






