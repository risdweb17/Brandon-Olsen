//Isotope active js code:
//************************

// Active isotope with jQuery code:

$('.main').isotope({
	itemSelector: '.griditem',
	layoutMode: 'fitRows'
});
// Isotope click function
$('.iso-nav ul li').click(function(){
	$('.iso-nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.main').isotope({
		filter: selector
	});
	return false;
});

