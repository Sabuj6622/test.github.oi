(function ($) {
	"use strict";

    jQuery(document).ready(function($){


      $(".our-staff").owlCarousel({
		  items:4,
		  autopaly:false,
		  margin:30,
		  nav:true,
		  loop:true,
		  navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
		  smartSpeed:1500,
         responsive:{
			0:{
				items:1
			},
			600:{
				items:3,
			},
			1000:{
				items:4
			}
    }
	  });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	