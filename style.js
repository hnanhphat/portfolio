$(function() {
  Pace.on('done', function() {
    setTimeout(function(){ $('#loading').addClass('loaded'); }, 1000);
  });

  AOS.init({
    once: true,
    duration: 800
  });

  $('#hamburger .themes a').on('click', function() {
    $("body").removeAttr('class').addClass($(this).attr('class')+'-theme');
  });

  $('footer .scroll a').on('click', function() {
    $("html, body").animate({scrollTop: 0}, 1000);
  });
});