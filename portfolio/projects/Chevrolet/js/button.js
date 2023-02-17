$(document).ready(function(){
    $(".slide_btn").mouseover(function(){
        $(".slide").css("left","+300px");
    });
    $(".slide_btn").mouseleave(function(){
        $(".slide").css("left","-200px");
    });

});

