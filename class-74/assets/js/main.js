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

        

 $('#clock').countdown('2017/12/12', function(event) {
  $(this).html(event.strftime('<span class="countdown-wrap"><span class="single-countdown-item">%w <br /> <span>weeks</span></span> <span class="single-countdown-item">%D<br /> <span>days</span></span> <span class="single-countdown-item">%H <br /><span>Hours</span></span> <span class="single-countdown-item">%M <br /><span>minutes</span></span> <span class="single-countdown-item">%S<br /> <span>seconds</span></span></span>'));


}); 

    });



    jQuery(window).load(function () {
        
        // -------------------------------------------------------------
        // animation active
        // -------------------------------------------------------------
        new WOW().init();
        
        jQuery('#preloader').fadeOut(3000);

    });


}(jQuery));
