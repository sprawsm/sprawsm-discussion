// Copyright Sprawsm.com
// Use this code freely, but acknowledge the authorship in the comment above
// Contact: dragan@sprawsm.com

(function($) {

  $(document).ready(function() {

    // Append the stylesheet

    $('head').append('<link rel="stylesheet" href="'+sd_path+'" type="text/css" />');

    // Append the markup

    $('body').append('<div class="sd-controls" id="sd-controls">\
      <a class="sd-counter" id="sd-counter" href="#disqus_thread" data-disqus-identifier="'+disqus_identifier+'"></a>\
      <a href="#" id="sd-toggle" class="sd-toggle closed" title="Toggle discussion pane">\
        <svg width="30px" height="30px" viewBox="0 0 30 30"><g id="icon-discussion" class="icon-discussion" fill="#000000"><path d="M3.93259844,20.2022047 C2.93482895,18.291905 2.37069693,16.1191762 2.37069693,13.8146515 C2.37069693,6.18335263 8.55572709,0 16.1853485,0 C23.8166474,0 30,6.18503017 30,13.8146515 C30,21.4459504 23.8149698,27.6293031 16.1853485,27.6293031 C13.8805838,27.6293031 11.7078905,27.0651486 9.79771779,26.0674274 L1,29 L3.93259844,20.2022047 L3.93259844,20.2022047 Z M9.89408659,8.89408659 L9.89408659,10.8940866 L23.0183105,10.8940866 L23.0183105,8.89408659 L9.89408659,8.89408659 Z M9.89408659,12.8940866 L9.89408659,14.8940866 L23.0183105,14.8940866 L23.0183105,12.8940866 L9.89408659,12.8940866 Z M9.89408659,16.8940866 L9.89408659,18.8940866 L17,18.8940866 L17,16.8940866 L9.89408659,16.8940866 Z" id="bar"></path></g></svg>\
        <span>Toggle discussion pane</span>\
      </a>\
    </div>\
    <div id="sd-container" class="sd-container">\
      <div id="sd-content" class="sd-content">\
        <div id="disqus_thread"></div>\
      </div>\
    </div>');

    var sd_container = $('#sd-container');
    var sd_controls = $('#sd-controls');
    var sd_toggle    = $('#sd-toggle');
    var sd_counter    = $('#sd-counter');

    // Toggle the discussion pane on click

    sd_toggle.on('click',function() {
      sd_container.toggleClass('show');
      sd_controls.toggleClass('open');
      return false;
    });

    // Pass the clicks from .sd_counter to #sd-toggle

    $('#sd-counter').click(function() {
      sd_toggle.click();
      return false;
    });

    // Sync our hover states
    sd_toggle.hover(function() {
      sd_counter.toggleClass('hover');
    });

    sd_counter.hover(function() {
      sd_toggle.toggleClass('hover');
    });

    // Make scrolling comfortable

    $( '#sd-content' ).bind( 'mousewheel DOMMouseScroll', function ( e ) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
      e.preventDefault();
    });

    // Disqus code

    (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();

    // Comment count code

    (function () {
      var s = document.createElement('script'); s.async = true;
      s.type = 'text/javascript';
      s.src = 'http://' + disqus_shortname + '.disqus.com/count.js';
      (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
      // Strip everything from the counter but the number
      sd_counter_text = $('.sd-counter').text();
      sd_counter_text.replace(/\D/g,'');
    }());

  });

})(jQuery);
