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
 $('.single-product-promotion').owlCarousel({
    loop:true,
	navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
    nav:false,
	autoplay:true,
	smartSpeed:1500,
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

$('.product-list').masonry({
});


/* $('.menu-trigger').on('click',function(){
	$('.off-canvas-menu,.off-canvas-overlay').addClass('active');
	return false;
});
$('.menu-close').on('click',function(){
	$('.off-canvas-menu,.off-canvas-overlay').removeClass('active');
	return false;
}); */


    jQuery(window).load(function(){

        
    });


}(jQuery));	