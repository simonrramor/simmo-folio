$(function() {
          var pageTitle = $('title').text();
        $(window).delay(18000).blur(function () {
          $('title').text(`WAIT! COME BACK! ${pageTitle}`)
        });
        $(window).focus(function() {
          $('title').text(pageTitle);
        });
      });


      