(function ($) {
	"use strict";

    jQuery(document).ready(function($){

     $(".our-clients").owlCarousel({
		items:3,
        margin:30,
        nav:false,
        loop:true,		
		 smartSpeed:1500,
         responsive:{
			0:{
				items:1
			},
			600:{
				items:3,
			},
			1000:{
				items:3
			}
    }
	 });
      



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	