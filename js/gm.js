$( document ).ready(function() {
  $('.nav-close, #main-menu a').click(function() {
    $('body').removeClass("nav_open");
  });
  $("#owl-example").owlCarousel(
    {
      "items":3,
      "navigation":true,
      "pagination":false,
      "navigationText": ["<img src='img/owl/arrow_left.png'/>","<img src='img/owl/arrow_right.png'/>"]
    }
  );
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 35) {
    $('.gm-nav-new, .header-two').fadeIn();
  } else {
    $('.gm-nav-new, .header-two').fadeOut();
  }

  $('.gm-nav-new a').smoothScroll({offset: -125});
});
// .menu_overlay
