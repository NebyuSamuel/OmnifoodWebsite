$(document).ready(function(){
  /* For the sticky nav */
  $(".js--section-features").waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset : "60px;"
  });

  $('.js--mobile-nav-icon').click(function(){
    var nav = $('.js--main-nav');
    var icon = $('.js--mobile-nav-icon i');
    nav.slideToggle(200);
    if(icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });

});
