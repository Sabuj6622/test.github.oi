/**
 *****************************************
 * main.js
 *
 * JS FILE FOR CUSTOM JS AND ACTIVE JS
 *
 *****************************************
 **/

(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

            $('.mainmenu li').on( 'click', function() {
                 
                 $('.mainmenu li').removeClass("active");
                 $(this).addClass("active");

                  var selector=$(this).attr("data-filter");
                  $(".project-list").isotope({
                    filter:selector,
                  });
                });
                    
                 $(".project-list").isotope();
                   

    });



    jQuery(window).load(function () {
        
        // -------------------------------------------------------------
        // animation active
        // -------------------------------------------------------------
        new WOW().init();
        
        jQuery('#preloader').fadeOut(3000);

    });


}(jQuery));
