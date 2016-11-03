$( document ).ready(function() {
  $('.nav-close, #main-menu a').click(function() {
    $('body').removeClass("nav_open");
  });
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
