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