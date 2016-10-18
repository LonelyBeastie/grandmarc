$( document ).ready(function() {
  $('.nav-close, #main-menu a').click(function() {
    $('body').removeClass("nav_open");
  });
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 35) {
    $('.gm-nav-new').fadeIn();
  } else {
    $('.gm-nav-new').fadeOut();
  }

  $('.gm-nav-new a').smoothScroll({offset: -100});
});
// .menu_overlay
