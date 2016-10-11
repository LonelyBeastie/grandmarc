$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 35) {
    $('.gm-nav').fadeIn();
  } else {
    $('.gm-nav').fadeOut();
  }

  $('.gm-nav a').smoothScroll({offset: -100});

});
