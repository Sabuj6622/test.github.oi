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

        
$('#bar1').barfiller({
    barColor:'#fff'
});
$('#bar2').barfiller({
    barColor:'#fff'
});
$('#bar3').barfiller({
    barColor:'#fff'
});
$('#bar4').barfiller({
    barColor:'#fff'
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
