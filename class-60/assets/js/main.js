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

        

        $('#map').gmpa3({
          address:"Mirsarai,Bangladesh",
          zoom: 13,
          mapTypeId : google.maps.MapTypeId.ROADMAP
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
