$(document).ready(function(){

     $("header").mouseover(function(){
 
        $(".gnb").css("color","black");
        $(".h_box").css({backgroundColor:"rgba(255,255,255,1)",opacity:"1"});
        // $(".h_box").animate({opacity:"1"},0);


        return false;

     });

    
    $("header").mouseleave(function(){
        $(".gnb").css("color","black");
        $(".h_box").css("background-color","rgba(255,255,255,0.5)");

    });

    $(".h_drop").mouseover(function(){
        $(".h_box").css("background-color","rgba(255,255,255,1)");

    });


    $("header").mouseleave(function(){
        $(".h_box").css("background-color","rgba(255,255,255,0.5)");
        $(".gnb").css("color","white");
        $(".h_box").animate({opacity:"0.5"});



    });

  
});