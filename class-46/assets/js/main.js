(function($){
	"use strict";
	jQuery(document).ready(function($)
	{
	$(".slide-carousel-active").owlCarousel({
		items:1,
		loop:true,
		dots:true,
		nav:false,
		autoplay:false,
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
		$(".slide-carousel-active").on("translate.owl.carousel",function(){
			$(".slider-text h2").removeClass("fadeInUp animated").hide();
			$(".slider-text p").removeClass("fadeIn animated").hide();
			$(".slider-text .slide-btn").removeClass("fadeInDown animated").hide();
			$(".slider-text .pricing-info").removeClass("fadeIn animated").hide()});
			$(".slide-carousel-active").on("translated.owl.carousel",function(){
			    $(".owl-item.active .slider-text h2").addClass("fadeInUp animated").show();
				$(".owl-item.active .slider-text p").addClass("fadeIn animated").show();
				$(".owl-item.active .slider-text .slide-btn").addClass("fadeInDown animated").show();
				$(".owl-item.active .slider-text .pricing-info").addClass("fadeIn animated").show()})});
				
				jQuery(window).load(function(){})})
				
	(jQuery);