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

        

        $('#map').gmap3({
          address:"Mirsarai, Bangladesh",
          zoom: 13,
          scrollwheel: false,
          mapTypeId : google.maps.MapTypeId.ROADMAP
          .marker({
        position: center,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      })
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
