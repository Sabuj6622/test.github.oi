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

        

        $('.mailchimp-form').ajaxChimp({
    url: "https://netlify.us17.list-manage.com/subscribe/post?u=215e33b4a736ce564a29fdf98&amp;id=a299fd754e"
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
