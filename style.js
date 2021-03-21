$(function() {
  $('#hamburger .themes a').on('click', function() {
    $("body").removeAttr('class').addClass($(this).attr('class')+'-theme');
  });

  $('footer .scroll a').on('click', function() {
    $("html, body").animate({scrollTop: 0}, 1000);
  });
});