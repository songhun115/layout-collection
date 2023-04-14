$(document).ready(function () {
    $(".gnb2").hide();

    // $(".gnb li").moseover(function(){
    //     $(".gnb li").addClass("on");

    // });

    $(".gnb li").mouseover(function () {
        $(".h_box").addClass("shadow");
    });

    $(".h_drop").mouseleave(function () {
        $(".h_box").removeClass("shadow");

    });

    $(".gnb li:nth-child(6)").mouseover(function () {
        $(".h_box").removeClass("shadow");
    });
    $(".gnb li:nth-child(7)").mouseover(function () {
        $(".h_box").removeClass("shadow");
    });




    $(".gnb li:nth-child(1)").mouseover(function () {
        $(".gnb2:nth-child(1)").show().siblings().hide();
    });

    $(".gnb li:nth-child(2)").mouseover(function () {
        $(".gnb2:nth-child(2)").show().siblings().hide();
    });

    $(".gnb li:nth-child(3)").mouseover(function () {
        $(".gnb2:nth-child(3)").show().siblings().hide();
    });

    $(".gnb li:nth-child(4)").mouseover(function () {
        $(".gnb2:nth-child(4)").show().siblings().hide();
    });

    $(".gnb li:nth-child(5)").mouseover(function () {
        $(".gnb2:nth-child(5)").show().siblings().hide();
    });

    $(".gnb2").mouseleave(function () {
        $(".gnb2").hide();

    });

    $(".gnb li:nth-child(6)").mouseover(function () {
        $(".gnb2").hide();
    });

    // 상단메뉴 효과




});


$(document).ready(function () {
    $(".slider img:nth-child(1)").siblings().hide();
    $(".slider .slide").click(function () {
        $(".slide:nth-child(1)").fadeIn("slider img:nth-child(1)");
    });


    setInterval(() => {
        $(".slider img:nth-child(1)").fadeOut(1000).next().fadeIn(1000).end().appendTo(".slider");

    }, 5000);

    $(".slider").mouseover(function () {
        $(".slider").finish();
    });


});






$(document).ready(function () {
    $(".sec1_img1 li:nth-child(1)").siblings().hide();

    $(".color:nth-child(1)").click(function () {
        $(".sec1_img1 li:nth-child(1)").fadeIn(500);
        $(".sec1_img1 li:nth-child(1)").siblings().fadeOut(500);
    });

    $(".color:nth-child(2)").click(function () {
        $(".sec1_img1 li:nth-child(2)").fadeIn(500);
        $(".sec1_img1 li:nth-child(2)").siblings().fadeOut(500);


    });

    $(".color:nth-child(3)").click(function () {
        $(".sec1_img1 li:nth-child(3)").fadeIn(500);
        $(".sec1_img1 li:nth-child(3)").siblings().fadeOut(500);


    });

    $(".color:nth-child(4)").click(function () {
        $(".sec1_img1 li:nth-child(4)").fadeIn(500);
        $(".sec1_img1 li:nth-child(4)").siblings().fadeOut(500);


    });

    $(".color:nth-child(5)").click(function () {
        $(".sec1_img1 li:nth-child(5)").fadeIn(500);
        $(".sec1_img1 li:nth-child(5)").siblings().fadeOut(500);


    });
    $(".color:nth-child(6)").click(function () {
        $(".sec1_img1 li:nth-child(6)").fadeIn(500);
        $(".sec1_img1 li:nth-child(6)").siblings().fadeOut(500);


    });

    $(".color:nth-child(7)").click(function () {
        $(".sec1_img1 li:nth-child(7)").fadeIn(500);
        $(".sec1_img1 li:nth-child(7)").siblings().fadeOut(500);


    });

    $(".color:nth-child(8)").click(function () {
        $(".sec1_img1 li:nth-child(8)").fadeIn(500);
        $(".sec1_img1 li:nth-child(8)").siblings().fadeOut(500);


    });

    $(".color:nth-child(9)").click(function () {
        $(".sec1_img1 li:nth-child(9)").fadeIn(500);
        $(".sec1_img1 li:nth-child(9)").siblings().fadeOut(500);


    });

    $(".color:nth-child(10)").click(function () {
        $(".sec1_img1 li:nth-child(10)").fadeIn(500);
        $(".sec1_img1 li:nth-child(10)").siblings().fadeOut(500);

        return false;

    });

});


// 슬라이더 색 바뀌는거

$(document).ready(function () {

   


    // $(".left").click(function () {
    //     // $(".slide_img").animate({marginLeft: "-=500px"});
    //     // $(".lineUp_p").animate({marginLeft:"-=130.66px"});
    //     $(".slide_img").animate({marginLeft:"-500px"});
    //     $(".lineUp_p").css("left","-130.66px");
    //     return false;

    // });

    
    // $(".right").click(function () {
    //     $(".slide_img").animate({marginLeft: "-500px"});
    //     $(".lineUp_p").css("left","-130.66px");


    //     return false;

    // });

    var imgs;
    var img_count;
    var img_position = 1;

    imgs = $(".sec1_img");
    img_count = imgs.children().length;

    $(".left").click(function(){
        back();
    });

    $(".right").click(function(){
        next();
    });


    function back() {
        
        if (1<img_position) {
            
            imgs.animate({left:"+-500px"});

            img_position--;


        }

        return false;

    }

    function next() {
        
        if (img_count > img_position) {
            
            imgs.animate({left:"-=500px"});

            img_position++;
        }

        return false;

    }


});



//문제의 자동차 라인업


$(document).ready(function () {


    $(".modal").hide();
    $(".menu_bar i").click(function () {
        $("nav .gnb").slideToggle(800);
        $(".modal").toggle();




    });

    $(".modal").on("click", function () {
        $(".modal").hide();
        $("nav .gnb").slideUp(800);
    });






});

