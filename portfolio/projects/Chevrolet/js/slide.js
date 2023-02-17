$(document).ready(function () {




    $(".lineup_text a").click(function(){
 

        $(".drop_li").siblings().hide();

    });

    
    $(".lineup_text a:not(:nth-child(3))").click(function(){
        $(".drop_li7").hide();

    });

    $(".lineup_text a:not(:nth-child(4))").click(function(){
        $(".drop_li8").hide();

    });


    
    $(".lineup_text a:not(:nth-child(5))").click(function(){
        $(".drop_li9").hide();

    });






    $(".lineup_text a:nth-child(1)").click(function () {
        $(".lineup_li:nth-child(1)").show().siblings().hide();

  

        return false;

    });


    $(".lineup_text a:nth-child(2)").click(function () {
        $(".lineup_li:nth-child(2)").show().siblings().hide();
  
        return false;

        


    });

    $(".lineup_text a:nth-child(3)").click(function () {
        $(".lineup_li:nth-child(3)").show().siblings().hide();
        return false;


    });

    $(".lineup_text a:nth-child(4)").click(function () {
        $(".lineup_li:nth-child(4)").show().siblings().hide();
        return false;


    });

    $(".lineup_text a:nth-child(5)").click(function () {
        $(".lineup_li:nth-child(5)").show().siblings().hide();
        return false;


    });



    //드롭다운


    $(".lineup_drop .drop_li").hide();

    $(".lineup_cell1 a:nth-child(1)").click(function () {
        $(".drop_li1").toggle().siblings().hide();


        return false;



    });


    $(".lineup_cell1 a:nth-child(2)").click(function () {
        $(".drop_li2").toggle().siblings().hide();

        return false;

    });

    $(".lineup_cell2 a:nth-child(1)").click(function () {
        $(".drop_li3").toggle().siblings().hide();

        return false;

    });

    $(".lineup_cell2 a:nth-child(2)").click(function () {
        $(".drop_li4").toggle().siblings().hide();

        return false;

    });

    $(".lineup_cell2 a:nth-child(3)").click(function () {
        $(".drop_li5").toggle().siblings().hide();

        return false;

    });

    $(".lineup_cell2 a:nth-child(4)").click(function () {
        $(".drop_li6").toggle().siblings().hide();

        return false;

    });


    $(".lineup_cell3 a").click(function () {
        $(".drop_li7").toggle().siblings().hide();

        return false;

    });


    $(".lineup_cell4 a").click(function () {
        $(".drop_li8").toggle().siblings().hide();

        return false;

    });



    $(".lineup_cell5 a").click(function () {
        $(".drop_li9").toggle().siblings().hide();

        return false;

    });




    $(".lineup_con").children().css("margin","8px");
    



});