
var timer = setInterval(function(){
    var foot = $('.footer');
    var header = $('.header');

    if (foot.hasClass('active')) {
        header.addClass('active');
      } else {
        header.removeClass('active');
      }
}, 500)

$(document).ready(function () {

    $('.black_app_download, .pop_title > img:last-child').click(function () {
      const $clickd = $(this);
      if ($('.popup').hasClass('active')) {
        $('.popup').removeClass('active');
      } else {
        $('.popup').addClass('active');
      }
    });
    
});  