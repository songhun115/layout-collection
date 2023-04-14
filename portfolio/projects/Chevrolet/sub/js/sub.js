$(document).ready(function () {
    $(".slider_img:nth-child(1)").siblings().hide();
    $(".slider_img li:nth-child(2)").siblings().hide();
    $(".slider_img p").show();

    $(".color1").click(function () {
        $(".slider_img:nth-child(1)").fadeIn(800).siblings().fadeOut(800);
    });
    
    $(".color2").click(function () {
        $(".slider_img:nth-child(2)").fadeIn(800).siblings().fadeOut(800);
    });

    $(".color3").click(function () {
        $(".slider_img:nth-child(3)").fadeIn(800).siblings().fadeOut(800);
    });

    $(".color4").click(function () {
        $(".slider_img:nth-child(4)").fadeIn(800).siblings().fadeOut(800);
    });

    $(".color5").click(function () {
        $(".slider_img:nth-child(5)").fadeIn(800).siblings().fadeOut(800);
    });

    $(".color6").click(function () {
        $(".slider_img:nth-child(6)").fadeIn(800).siblings().fadeOut(800);
    });

    $(".color7").click(function () {
        $(".slider_img:nth-child(7)").fadeIn(800).siblings().fadeOut(800);
    });


    $(".right").click(function () {
        $(".slider_img1 > li:nth-child(2)").fadeOut().next().fadeIn().end().appendTo(".slider_img1");

        $(".slider_img2 > li:nth-child(2)").fadeOut().next().fadeIn().end().appendTo(".slider_img2");

        $(".slider_img3 > li:nth-child(2)").fadeOut().next().fadeIn().end().appendTo(".slider_img3");

        $(".slider_img4 > li:nth-child(2)").fadeOut().next().fadeIn().end().appendTo(".slider_img4");

        $(".slider_img5 > li:nth-child(2)").fadeOut().next().fadeIn().end().appendTo(".slider_img5");

        $(".slider_img6 > li:nth-child(2)").fadeOut().next().fadeIn().end().appendTo(".slider_img6");

        $(".slider_img7 > li:nth-child(2)").fadeOut().next().fadeIn().end().appendTo(".slider_img7");

    });

    $(".left").click(function () {

        $(".slider_img li:nth-child(5)").siblings().hide();
        $(".slider_img p").show();

        $(".slider_img1 > li:nth-child(5)").fadeOut().prev().fadeIn().end().prependTo(".slider_img1");

        $(".slider_img2 > li:nth-child(5)").fadeOut().prev().fadeIn().end().prependTo(".slider_img2");

        $(".slider_img3 > li:nth-child(5)").fadeOut().prev().fadeIn().end().prependTo(".slider_img3");

        $(".slider_img4 > li:nth-child(5)").fadeOut().prev().fadeIn().end().prependTo(".slider_img4");

        $(".slider_img5 > li:nth-child(5)").fadeOut().prev().fadeIn().end().prependTo(".slider_img5");

        $(".slider_img6 > li:nth-child(5)").fadeOut().prev().fadeIn().end().prependTo(".slider_img6");

        $(".slider_img7 > li:nth-child(5)").fadeOut().prev().fadeIn().end().prependTo(".slider_img7");


    });




});


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
    $("#full-page").fullpage({
        sectionSelector: ".section",
        navigation: true,
        slidesNavigation: true,
        css3: true,
        controlArrows: false,
        anchors: ["sec1", "sec2", "sec3", "section4", "sec5"]


    });

   
});

// $(document).ready(function(){
//     $("#fullpage").fullpage({
//         autoScrolling:true,
//         scrollHorizontally:true

//     });
// });