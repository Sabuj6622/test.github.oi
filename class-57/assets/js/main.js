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

        

    const ps = new PerfectScrollbar(".testimonial-autor-section");

button.addEventListener('click', () => {
  demoDiv.style.width = `${widthInput.value}px`;
  demoDiv.style.height = `${heightInput.value}px`;

  ps.update();
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
