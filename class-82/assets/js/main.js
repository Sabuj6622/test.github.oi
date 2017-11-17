

$(document).ready(function(){
  $('.featured-project').owlCarousel({
    items:1,
    loop:true,
    dots:true,
    autoplay:true,
    smartSpeed:3000,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
});
$(".featured-bg").ripples({
    resolution:512,
    dropRadius:20,
    perturbance:.04});
    setInterval(function(){var $el=$(".featured-bg");
    var x=Math.random()*$el.outerWidth();
    var y=Math.random()*$el.outerHeight();
    var dropRadius=20;var strength=.04+Math.random()*.04;$el.ripples("drop",x,y,dropRadius,strength)},400)
});