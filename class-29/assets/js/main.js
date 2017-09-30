(function ($) {

    jQuery(document).ready(function($){

	// init Isotope
	var $grid = $('.product-list').isotope({
	  // options
	});
	// filter items on button click
	$('.project-title li').on( 'click',function() {
		$('.project-title li').removeClass('active');
        $(this).addClass('active');
	  var filterValue = $(this).attr('data-filter');
	  $('.product-list').isotope({ filter: filterValue });
	});

	//Popup
	$('.image-link').magnificPopup({
	  type: 'image',
	   gallery:{
		enabled:true
	  }
	});

    });


    jQuery(window).load(function(){
    });
}(jQuery));	