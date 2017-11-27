
(function($) {
    "use strict";

    jQuery(document).ready(function($) {

         $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            dots: true,
            nav: false,
            
        });

         $(".logo-carousel-active").owlCarousel({
            items: 5,
            margin:30,
            loop: true,
            autoplay: false,
            dots: false,
            nav: false,
            
        }); 

    });
    
    jQuery(window).load(function(){
     
        

        
    }); 

}(jQuery));












