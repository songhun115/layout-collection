$(document).ready(function(){ 
    $('.nav_btn').click(function() {
       
       $('.nav_list_mb').toggleClass('active');
       if($('.nav_list_mb').hasClass('active')){
           $('.mb_bg').addClass('active');
           $('.header').addClass('active');
           
       } else {
        $('.mb_bg').removeClass('active');
    }
    });

    $('.close_box').click(function() {
        $('.nav_list_mb').removeClass('active');
        $('.mb_bg').removeClass('active');
        $('.header').removeClass('active');

    });
    
        $(".nav_item_mb").click(function(){
            var submenu = $(this).children("ul");
            if( submenu.is(":visible") ){
                submenu.slideUp();
            }else{
                submenu.slideDown();
            }
        });

 });

//  $(window).scroll(function(event){
//     var scroll = $(this).scrollTop();
//     if (scroll > 100){
//     //이벤트를 적용시킬 스크롤 높이
//          $(".header").addClass("active");
//     }
//     else {
//          $(".header").removeClass("active");
//     }
//     lastScroll = scroll;
// });


