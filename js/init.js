(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

(function ($) {
  $(document).ready(function(){
    
  // hide .navbar first
  $(".navi-skrollz").hide();
  
  // fade in .navbar
  $(function () {
    $(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
      if ($(this).scrollTop() > 100) {
        $('.navi-skrollz').fadeIn();
        $('.origi-nav').fadeOut();
      } else {
        $('.navi-skrollz').fadeOut();
        $('.origi-nav').fadeIn();
      }
    });

  
  });

});
  }(jQuery));

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});