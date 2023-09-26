$(document).ready(function() {
    $(".scrollToBottom").click(function() {
      $("html, body").animate({
        scrollTop: $("#bottom").offset().top
      }, 1000);
    });
  });
  