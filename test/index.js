$(document).ready(function() {
    

  $(".nav_list li").click(function(){
     $(this).addClass("on").siblings().removeClass("on");
  });
  
  $(window).scroll(function(){
      if($(this).scrollTop() >= 100) {
          $("#header").addClass("active");
      }else {
          $("#header").removeClass("active");
      }
      
      var home_hei = $("#section01").offset().top - 40,
          aboutme_hei = $("#section02").offset().top - 40,
          portfolios_hei = $("#section03").offset().top - 40,
          contact_hei = $("#section04").offset().top - 40,
          ability_hei = $("#section05").offset().top - 40;
          
      if( $(this).scrollTop() >= home_hei ) {
          $(".nav_list li:nth-child(1)").addClass("on").siblings().removeClass("on");
      }
      if( $(this).scrollTop() >= aboutme_hei ) {
          $(".nav_list li:nth-child(2)").addClass("on").siblings().removeClass("on");
      }
      if( $(this).scrollTop() >= portfolios_hei ) {
          $(".nav_list li:nth-child(3)").addClass("on").siblings().removeClass("on");
      }
      if( $(this).scrollTop() >= contact_hei ) {
          $(".nav_list li:nth-child(4)").addClass("on").siblings().removeClass("on");
      } 
      if( $(this).scrollTop() >= ability_hei ) {
          $(".nav_list li:nth-child(5)").addClass("on").siblings().removeClass("on");
      } 

 
  });

  

      $(".nav_list li").click(function () {
        var scrollPosition = $($(this).attr("data-target")).offset().top;
        window.scrollTo({top:scrollPosition, behavior:'smooth'});
      })
      $(".nav_item2").click(function () {
        var scrollPosition = $($(this).attr("data-target")).offset().top -50;
        window.scrollTo({top:scrollPosition, behavior:'smooth'});
      })

      $(".mb_nav_btn").click(function () {
          
          $(this).toggleClass('active');
          $(".nav_list").toggleClass('active');
          if($(".nav_list").hasClass("active")){
             $("#header").addClass('active');
          }
          
          
      });
      $(".nav_item").click(function () {
          $(".nav_list").removeClass('active');
          $("#header").removeClass('active');
          $(".mb_nav_btn ").removeClass('active');
      });
      
});



