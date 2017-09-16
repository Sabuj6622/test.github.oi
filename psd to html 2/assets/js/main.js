(function ($) {
	"use strict";

    jQuery(document).ready(function($){

   $('.slide-carousel-active').owlCarousel({
    loop:true,
	navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
    nav:true,
	autoplay:true,
	smartSpeed:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	