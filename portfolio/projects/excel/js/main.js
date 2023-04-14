$(document).ready(function(){
    $('.nav_bar_item, .nav_right, .menu_toggle_btn, .img_box > img').hover(function(){
      $('.nav_bar').addClass('on');
    }  , function(){
      $('.nav_bar').removeClass('on');
    });
   


    $('.menu_toggle_btn').click(function(){
        const $clickd = $(this);
        if( $clickd.hasClass('open')) {
          $clickd.removeClass('open');
          $('.nav_bar').removeClass('active');
          $('.all_menu').removeClass('open');
          $('body').removeClass('menu_open');
        } else {
          $clickd.addClass('open');
          $('.nav_bar').addClass('active');
          $('.all_menu').addClass('open');
          $('body').addClass('menu_open');
        }
        })
       
    $('.all_menu_item_h2').click(function(){
      var submenu = $(this).next("ul");
      if( submenu.is(":visible") ){
          submenu.slideUp(300);
      }else{
          submenu.slideDown(300);
      }
  });

});

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  },
  
});



