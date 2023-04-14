$(document).ready(function(){
  $('.nav_menu_item').hover(function(){
    $('.nav_bg').addClass('on');
    $('.nav_bar').addClass('bottom_line');
  }  , function(){
    $('.nav_bg').removeClass('on');
    $('.nav_bar').removeClass('bottom_line');
  });

  $('.menu_icon_box').click(function(){
    
  const $clickd = $(this);
  if( $clickd.hasClass('rotate')) {
    $clickd.removeClass('rotate');
    $('.open_menu').removeClass('open');
    $('.nav_item').removeClass('show');
    $('.icon').removeClass('show');
  } else {
    $clickd.addClass('rotate');
    $('.open_menu').addClass('open');
    $('.nav_item').addClass('show');
    $('.icon').addClass('show');
  }
  })
 
});


var swiper = new Swiper('.swiper-container', {
  speed	: 1000,
  mousewheel: {
    invert: true,
  },  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  },
  
});
