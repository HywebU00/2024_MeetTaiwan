/*------------------------------------*/
///// sticky progressBar /////
/*------------------------------------*/
// get offset top 監控對象

if ($('.member-heading') != null) {
  var topper = $('.member-heading').offset().top;
  var contentHeight = $('.mt-content').height();
  // scroll event
  window.onscroll = function () {
    scroller();
  };

  $(window).resize(function () {
    scroller();
  });
}

// sticky function
function scroller() {
  var contentWidth = $('.mt-content').width();
  var contentHeight = $('.mt-content').height();
  var windowWidth = $(window).width();
  if (windowWidth < 575) {
    contentWidth = $('.mt-content').width() - 32;
  }
  $('.member-heading').css('width', contentWidth);
  $('.member-heading').toggleClass(
    'sticky-fixed',
    $(window).scrollTop() >= topper
  );
  if ($(window).scrollTop() > contentHeight - 60) {
    $('.member-heading').removeClass('sticky-fixed');
  }
}
