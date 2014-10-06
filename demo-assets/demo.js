$(document).ready(function() {
  
  $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
          $('.hero').addClass('scrolled');
      }
  });

  $(window).scroll(function() {
      if ($(this).scrollTop() < 50) {
          $('.hero').removeClass('scrolled');
      }
  });

});
