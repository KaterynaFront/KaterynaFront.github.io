jQuery(document).ready(function($) {
    $("#scroll-top > button").on("click", function(e) {
      var body = $("html, body");
      body.stop().animate({ scrollTop: 0 }, 500, "swing");
    });
  });

