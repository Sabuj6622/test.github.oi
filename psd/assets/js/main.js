(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".logo-carousel").owlCarousel({
            items: 6,
            loop: true,
            nav: false,
            autoplay: true,
            margin: 30,
            dots: false
        });
        
        $(".case-studies-carousel").owlCarousel({
            items: 3,
            loop: true,
            nav: false,
            autoplay: true,
            margin: 30,
            dots: true
        });
        
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            autoplay: true,
            dots: true
        });
        
            $(".testimonial-carousel").on("translate.owl.carousel", function(){ 
            $(".single-testimonial-item p").removeClass("animated fadeInDown").css("opacity", "0");
           
        });
        
            $(".testimonial-carousel").on("translated.owl.carousel", function(){
            $(".single-testimonial-item p").addClass("animated fadeInDown").css("opacity", "0");
          
        });

        
        /*home 3*/
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            autoplay: true,
            dots: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        }); 
        
        /*home 4*/
          $(".video-play-btn").magnificPopup({
            type: 'video'
        });
        
            $(".single-testimonial-box").hover(function(){
            $(".single-testimonial-box").removeClass('active');
            $(this).addClass('active');
        });
        
            $(".menu-trigger").on('click', function(){
            $(".off-canvas-menu").addClass("show-offcanvas");
            $(".offcanvas-overlay").addClass("show-overlay");
            $("body").addClass("padding-left");
        });
        
        $(".menu-close").on('click', function(){
            $(".off-canvas-menu").removeClass("show-offcanvas");
            $(".offcanvas-overlay").removeClass("show-overlay");
            $("body").removeClass("padding-left");
        });
        
        $(".offcanvas-overlay").on('click', function(){
            $(".offcanvas-overlay").removeClass("show-overlay");
            $(".off-canvas-menu").removeClass("show-offcanvas");
            $("body").removeClass("padding-left");
        });
        
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	