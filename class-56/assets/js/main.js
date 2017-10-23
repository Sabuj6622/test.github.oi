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

        
   
   $(".theme-1-select").on('click', function(){
    $("body").addClass('theme-1').removeClass('theme-2');
    return false;
   });
    $(".theme-2-select").on('click', function(){
    $("body").addClass('theme-2').removeClass('theme-1');
    return false;
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
