$(document).ready(function() {
 
  var hashtag = " ";

  for(var i=0; i<7; i++) {
	    hashtag = hashtag + "#";
	    console.log(hashtag);
	    $("#hashtag").append(hashtag + "<br>");
	  }





	var newArray = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delware', 'Florida', 'Georgia'];

	var stringArray= '';

	for (var j=0; j < newArray.length; j++) {
		console.log(newArray[j]);
		var stringArray = stringArray + " " + newArray[j];
	}

	$("#states").append(stringArray);






});