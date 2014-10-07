$(document).ready(function() {
  
  // Handle fading of "try me" CTA

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

  // Open externam links in new window
  // Source: http://css-tricks.com/snippets/jquery/open-external-links-in-new-window/

  $('a').each(function() {
    var a = new RegExp('/' + window.location.host + '/');
    if(!a.test(this.href)) {
      $(this).click(function(event) {
         event.preventDefault();
         event.stopPropagation();
         window.open(this.href, '_blank');
      });
    }
  });

});
